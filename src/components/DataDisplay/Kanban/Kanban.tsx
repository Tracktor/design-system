import { Box, Stack, ChipProps, CardContent, Card, useTheme, CircularProgress, Skeleton } from "@mui/material";
import { capitalize, useInView } from "@tracktor/react-utils";
import { CSSProperties, isValidElement, MouseEvent, ReactElement, RefObject, useEffect, useRef, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import worksiteCartoonImg from "@/assets/img/worksite-cartoon.png";
import ArticleImage from "@/components/DataDisplay/ArticleImage";
import Chip from "@/components/DataDisplay/Chip/Chip";
import { Tooltip } from "@/components/DataDisplay/Tooltip/stories/Tooltip";
import Typography from "@/components/DataDisplay/Typography/stories/Typography";
import Button from "@/components/Inputs/Button/stories/Button";

const useDragScroll = (ref: RefObject<HTMLDivElement | null>) => {
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMoved = useRef(false);
  const isMouseDownRef = useRef(false);

  const onMouseDown = (e: MouseEvent<HTMLElement>) => {
    const element = ref.current;
    if (!element) {
      return;
    }

    isMouseDownRef.current = true;
    startXRef.current = e.pageX - element.offsetLeft;
    scrollLeftRef.current = element.scrollLeft;
    hasMoved.current = false;
    element.style.cursor = "grabbing";
  };

  const onMouseUp = () => {
    const element = ref.current;

    if (!element) {
      return;
    }

    isMouseDownRef.current = false;

    if (isDragging) {
      setIsDragging(false);
    }

    hasMoved.current = false;
    element.style.cursor = "grab";
  };

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const element = ref.current;

    if (!element || !isMouseDownRef.current) {
      return;
    }

    const x = e.pageX - element.offsetLeft;
    const deltaX = Math.abs(x - startXRef.current);

    // If the mouse has moved more than 5 pixels, set isDragging to true
    // Avoids setting isDragging to true if the mouse has not moved
    if (deltaX > 5 && !hasMoved.current) {
      hasMoved.current = true;
      setIsDragging(true);
    }

    if (hasMoved.current) {
      e.preventDefault();
      const walk = x - startXRef.current;
      element.scrollLeft = scrollLeftRef.current - walk;
    }
  };

  return {
    isDragging,
    onMouseDown,
    onMouseMove,
    onMouseUp,
  };
};

export type KanbanChipFormat = {
  color: ChipProps["color"];
  variant?: ChipProps["variant"];
};

export type HeaderColumnChip = Record<string, KanbanChipFormat>;

/**
 * Mapping of booking statuses to their corresponding chip variants and colors.
 * This is used to style the status chips in the Kanban columns.
 */
export const defaultKanbanChip: Record<string, KanbanChipFormat> = {
  canceled: { color: "error" },
  confirmed: { color: "success" },
  costing: { color: "default" },
  ended: { color: "default" },
  linking: { color: "info" },
  oneShot: { color: "success" },
  quotation: { color: "default" },
  request: { color: "warning" },
  requested: { color: "info" },
  started: { color: "success" },
  subleasing: { color: "warning" },
  validated: { color: "warning" },
  waiting_for_confirmation: { color: "info" },
  waiting_for_validation: { color: "success" },
};

/**
 * Props for configuring the empty state of the Kanban component.
 */
export interface EmptyStateProps {
  title: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

/**
 * Props for each subtitle item in a Kanban card.
 */
export interface SubtitleDataItemProps {
  text: string;
  LeftIcon?: ReactElement;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

/**
 * Props for each item in a Kanban column.
 * Each item represents a card in the Kanban board.
 */
export interface KanbanDataItemProps {
  id: string;
  image: string | undefined;
  imageTitle?: string;
  secondaryImage?: string;
  secondaryImageText?: string;
  subtitles?: SubtitleDataItemProps[];
  tag: string;
  title: string;
  Footer?: ReactElement;
  Alert?: ReactElement;
  RightFooter?: ReactElement;
}

/**
 * Props for each column in the Kanban board.
 * Each column contains multiple Kanban items.
 */
export interface KanbanDataProps {
  name: string;
  label?: string;
  count?: number;
  isLoading?: boolean;
  isFetching?: boolean;
  isFetched?: boolean;
  items: KanbanDataItemProps[];
}

export interface KanbanProps {
  /**
   * The height of the Kanban component.
   */
  height?: string | number;
  /**
   * The width of each Kanban list.
   */
  listWidth?: string | number;
  /**
   * Disables the count of items in the Kanban list.
   */
  disableCount?: boolean;
  /**
   * Total number of items in the list. Note that only a few items will be rendered and displayed at a time.
   */
  itemCount?: number;
  /**
   * The number of items to display per page.
   */
  itemPerPage?: number;
  /**
   * Variant for the chip column.
   */
  chipColumVariant?: "filled" | "outlined";
  /**
   * If true, the Kanban column will display a dot indicator in the chip.
   */
  chipColumDot?: boolean;
  /**
   * Status of the chip in the Kanban column.
   */
  chipStatus?: string;
  /**
   * Function to load more items when the user scrolls to the end of the list.
   * @param startIndex
   * @param stopIndex
   * @param status
   */
  loadMoreItems?: (startIndex: number, stopIndex: number, status?: string) => Promise<void> | void;
  /**
   * Function triggered when an item is clicked.
   * @param id
   */
  onClickItem?: (id: string) => void;
  /**
   * Trigger when column is visible
   * @param listName
   */
  onColumnInView?: (name: string) => void;
  /**
   * The ID of the booking to preview, obtained from the URL search parameters.
   */
  previewBookingId?: string;
  /**
   * Custom mapping of booking statuses to chip variants/colors.
   * Keys can be any string, but the value must be { color, variant? }.
   */
  headerColumnChip?: HeaderColumnChip;
  /**
   * The Kanban data to be displayed.
   */
  data: KanbanDataProps[];
  /**
   * Optional empty state configuration.
   */
  emptyState?: ReactElement | EmptyStateProps;
}

const HEIGHT_LINE_BODY3 = 18;
const IMG_SIZE = 40;

export const computeKanbanCardHeight = (item: KanbanDataItemProps): number => {
  if (item.subtitles?.length) {
    return 54 + item.subtitles.length * HEIGHT_LINE_BODY3 + (item.Footer || item.RightFooter ? 30 : 0);
  }

  return 64 + (item.Footer || item.RightFooter ? 25 : 0);
};

const EmptyStateOverlay = ({ emptyState }: { emptyState?: KanbanProps["emptyState"] }) => {
  if (isValidElement(emptyState)) {
    return (
      <Stack
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          backgroundColor: "background.default",
          zIndex: 10,
        }}
      >
        {emptyState}
      </Stack>
    );
  }

  return (
    <Stack
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        backgroundColor: "background.default",
        zIndex: 10,
      }}
    >
      <Card sx={{ maxWidth: 370 }}>
        <Box component="img" height={170} width="100%" src={worksiteCartoonImg} sx={{ objectFit: "cover", objectPosition: "top" }} />
        <CardContent>
          <Typography variant="h3">{emptyState?.title}</Typography>
          {emptyState?.description && <Typography variant="body3">{emptyState.description}</Typography>}
          {emptyState?.buttonText && (
            <Box textAlign="center" mt={3}>
              <Button variant="contained" onClick={emptyState?.onButtonClick}>
                {emptyState.buttonText}
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Stack>
  );
};

// Avoid body scrollbar appearing when tooltip is displayed and user scrolls
const POPPER_KANBAN = {
  sx: {
    "&[data-popper-reference-hidden]": {
      display: "none",
      pointerEvents: "none",
    },
  },
};

type KanbanItemProps = {
  index: number;
  style: CSSProperties;
  data: {
    previewBookingId: string;
    gutterSize: number;
    onClickItem: KanbanProps["onClickItem"];
    items: KanbanDataItemProps[];
  };
};

const VirtualizedKanbanItem = ({ index, style, data }: KanbanItemProps) => {
  const { palette } = useTheme();
  const { items, onClickItem, previewBookingId, gutterSize } = data;
  const { title, subtitles, tag, image, id, Footer, Alert, RightFooter, secondaryImage, secondaryImageText, imageTitle } = items[index];

  const active = previewBookingId === id;

  return (
    <div
      style={{
        ...style,
        paddingLeft: gutterSize,
        paddingRight: gutterSize,
      }}
    >
      <Card
        variant="elevation"
        elevation={palette.mode === "dark" ? 5 : 0}
        onClick={() => onClickItem?.(id)}
        sx={{
          "&:hover": {
            boxShadow: 8,
          },
          ".grabbing &": {
            cursor: "grabbing",
            pointerEvents: "none",
          },
          background: `${active ? palette.grey[50] : "none"}`,
          border: `1px solid ${active ? palette.action.active : palette.divider}`,
          boxShadow: "0px 0 8px 0 rgba(0, 0, 0, 0.10), 0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 1px 3px 0px rgba(0, 0, 0, 0.03)",
          cursor: "pointer",
          flexShrink: 0,
          height: computeKanbanCardHeight({ Footer, RightFooter, subtitles } as KanbanDataItemProps),
          p: 1.5,
          textDecoration: "none",
        }}
      >
        <Stack direction="row" spacing={1} flex={1} overflow="hidden">
          <Box>
            <Tooltip title={imageTitle} enterDelay={300} enterNextDelay={300}>
              <span>
                <ArticleImage
                  src={image}
                  secondarySrc={secondaryImage}
                  secondaryAvatarProps={
                    secondaryImageText
                      ? {
                          children: secondaryImageText,
                          sx: {
                            height: 24,
                            width: 24,
                          },
                        }
                      : undefined
                  }
                  alt={title}
                  width={IMG_SIZE}
                  height={IMG_SIZE}
                />
              </span>
            </Tooltip>
          </Box>

          <Stack sx={{ flex: 1, overflow: "hidden", position: "relative", whiteSpace: "nowrap" }}>
            <Stack direction="row" spacing={1} flex={1}>
              <Stack flex={1} overflow="hidden">
                <Tooltip title={title} enterDelay={300} enterNextDelay={300} slotProps={{ popper: POPPER_KANBAN }}>
                  <Typography noWrap variant="h6">
                    {title}
                  </Typography>
                </Tooltip>

                {subtitles?.map(({ text, LeftIcon, onClick }) => (
                  <Stack
                    key={`${text}-${index}`}
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                    overflow="hidden"
                    onClick={(e) => onClick?.(e)}
                    sx={onClick ? { cursor: "pointer" } : undefined}
                  >
                    {LeftIcon}
                    {onClick ? (
                      <Button variant="link" sx={{ color: "text.secondary" }}>
                        <Typography noWrap variant="body3">
                          {text}
                        </Typography>
                      </Button>
                    ) : (
                      <Typography noWrap variant="body3" color="textSecondary">
                        {text}
                      </Typography>
                    )}
                  </Stack>
                ))}
              </Stack>

              <Stack alignItems="stretch" justifyContent="space-between">
                <Stack spacing={1} direction="row" alignItems="center">
                  {Alert && Alert}
                  <Chip label={tag} variant="rounded" color="default" size="small" />
                </Stack>
              </Stack>
            </Stack>

            {(Footer || RightFooter) && (
              <Stack spacing={1} direction="row" alignItems="center" mt={1}>
                {Footer && <Box flex={1}>{Footer}</Box>}
                {RightFooter}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};

interface ChipStatusProps {
  status?: keyof typeof defaultKanbanChip | keyof HeaderColumnChip | string;
  size?: ChipProps["size"];
  variant?: ChipProps["variant"];
  lineThrough?: boolean;
  dot?: boolean;
  label?: string;
  sx?: ChipProps["sx"];
  deleteIcon?: ReactElement;
  disabled?: boolean;
  headerColumnChip?: HeaderColumnChip;
}

const ChipStatusKanban = ({
  label,
  status,
  sx,
  deleteIcon,
  lineThrough,
  disabled,
  headerColumnChip,
  dot = true,
  variant = "outlined",
  size = "small",
}: ChipStatusProps) => {
  const mapping = headerColumnChip ?? defaultKanbanChip;
  const { color, variant: mappedVariant } = (status && mapping[status]) || { color: "default" };

  return (
    <Chip
      lineThrough={lineThrough}
      disabled={disabled}
      dot={dot}
      color={color}
      deleteIcon={deleteIcon}
      label={label}
      size={size}
      variant={mappedVariant || variant}
      sx={sx}
      data-test="dealStatus"
      onDelete={deleteIcon ? () => {} : undefined}
    />
  );
};

interface ColumnProps {
  name: string;
  label?: string;
  count?: number;
  items: KanbanDataItemProps[];
  chipColumVariant?: "filled" | "outlined";
  chipColumDot?: boolean;
  chipStatus?: string;
  isLoading?: boolean;
  isFetching?: boolean;
  gutterSize: number;
  itemPerPage?: number;
  listWidth: number | string;
  disableCount?: boolean;
  itemCount: number;
  previewBookingId: string;
  onClickItem?: KanbanProps["onClickItem"];
  loadMoreItems?: (startIndex: number, stopIndex: number, status?: string) => void;
  onInView?: (name: string) => void;
  headerColumnChip?: KanbanProps["headerColumnChip"];
}

const Column = ({
  name,
  label,
  count,
  items,
  isFetching,
  isLoading,
  gutterSize,
  itemPerPage,
  listWidth,
  disableCount,
  loadMoreItems,
  itemCount,
  previewBookingId,
  onClickItem,
  onInView,
  chipColumVariant,
  chipColumDot,
  chipStatus,
  headerColumnChip,
}: ColumnProps) => {
  const onInViewTriggered = useRef<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isItemLoaded = (index: number) => index < items.length || (itemPerPage || 0) > items.length;
  const inView = useInView(containerRef);
  const showSkeletons = isLoading;
  const skeletonsToShow = 3;

  const getCountLabel = (): string => {
    if (disableCount) {
      return "";
    }
    const value = count ?? items.length;
    return value ? ` ${value}` : "";
  };

  /**
   * Trigger the onInView function when the column is in view
   */
  useEffect(() => {
    if (inView && !onInViewTriggered.current?.includes(name)) {
      onInViewTriggered.current = [...onInViewTriggered.current, name];
      onInView?.(name);
    }
  }, [name, inView, onInView]);

  return (
    <Stack ref={containerRef} spacing={2}>
      <Card
        sx={{
          ".kanban-virtual-list": {
            "&::-webkit-scrollbar": {
              display: "none",
            },
            flex: 1,
            msOverflowStyle: "none",
            overflowY: "auto",
            scrollbarWidth: "none",
          },
          borderRadius: 2,
          flex: "1 1 auto",
          height: 0,
          width: listWidth,
        }}
        variant="elevation"
        elevation={1}
      >
        <Stack height="100%">
          <Stack direction="row" alignItems="center" spacing={1} padding={2} justifyContent="space-between">
            <ChipStatusKanban
              dot={chipColumDot}
              label={`${capitalize(label || name)}${getCountLabel()}`}
              variant={chipColumVariant}
              status={chipStatus || name}
              size="small"
              headerColumnChip={headerColumnChip}
              sx={{ alignSelf: "flex-start" }}
            />
            {isFetching && <CircularProgress size={16} sx={{ color: "text.secondary" }} />}
          </Stack>
          <Box flex={1}>
            {showSkeletons ? (
              <Stack spacing={1} p={`${gutterSize}px`}>
                {Array.from({ length: skeletonsToShow }).map((_, index) => {
                  const key = `skeleton-${index}`;
                  return <Skeleton key={key} variant="rounded" height={112} />;
                })}
              </Stack>
            ) : (
              <AutoSizer>
                {({ height: autoHeight, width: autoWidth }) => (
                  <InfiniteLoader
                    isItemLoaded={isItemLoaded}
                    itemCount={itemCount}
                    loadMoreItems={(startIndex, stopIndex) => loadMoreItems?.(startIndex, stopIndex, name)}
                  >
                    {({ onItemsRendered, ref }) => (
                      <VariableSizeList
                        className="kanban-virtual-list"
                        ref={ref}
                        height={autoHeight}
                        itemCount={items.length}
                        width={autoWidth}
                        itemSize={(index) => computeKanbanCardHeight(items[index]) + gutterSize}
                        itemData={{ gutterSize, items, onClickItem, previewBookingId }}
                        onItemsRendered={onItemsRendered}
                        itemKey={(index, data) => data.items[index].id}
                      >
                        {VirtualizedKanbanItem}
                      </VariableSizeList>
                    )}
                  </InfiniteLoader>
                )}
              </AutoSizer>
            )}
          </Box>
        </Stack>
      </Card>
    </Stack>
  );
};

const Kanban = ({
  data,
  onClickItem,
  disableCount,
  onColumnInView,
  emptyState,
  chipColumVariant,
  chipStatus,
  headerColumnChip,
  previewBookingId = "",
  chipColumDot = true,
  height = "100%",
  itemPerPage = 50,
  listWidth = 360,
  itemCount = 500,
  loadMoreItems = () => {},
}: KanbanProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { spacing } = useTheme();
  const { onMouseDown, onMouseUp, onMouseMove, isDragging } = useDragScroll(containerRef);
  const gutterSize = parseInt(spacing(1), 10);
  const isEmpty = data.every((column) => column.items.length === 0 && column.isFetched && !column.isLoading && !column.isFetching);

  return (
    <Box sx={{ height, position: "relative" }}>
      <Stack
        className={isDragging ? "grabbing" : ""}
        direction="row"
        spacing={2}
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        sx={{
          "&.grabbing": {
            cursor: "grabbing !important",
            willChange: "scroll-position, transform",
          },
          backfaceVisibility: "hidden", // GPU acceleration
          cursor: "grab",
          height,
          opacity: isEmpty ? 0.3 : 1,
          overflowX: "auto",
          paddingBottom: 2,
          pointerEvents: isEmpty ? "none" : "auto",
          pr: 3,
          scrollBehavior: "auto",
          transform: "translateZ(0)",
          transition: "width 1s ease-in-out",
          userSelect: "none",
          WebkitOverflowScrolling: "touch",
          width: "100%",
          willChange: "scroll-position",
        }}
      >
        {data.map((item, index) => {
          const { name, label, count, items, isFetching, isLoading } = item;
          const key = `${name}-${index}`;

          return (
            <Column
              key={key}
              itemCount={itemCount}
              listWidth={listWidth}
              disableCount={disableCount}
              loadMoreItems={loadMoreItems}
              previewBookingId={previewBookingId}
              onClickItem={onClickItem}
              name={name}
              label={label}
              count={count}
              items={items}
              isLoading={isLoading}
              isFetching={isFetching}
              gutterSize={gutterSize}
              itemPerPage={itemPerPage}
              onInView={onColumnInView}
              chipColumVariant={chipColumVariant}
              chipColumDot={chipColumDot}
              chipStatus={chipStatus}
              headerColumnChip={headerColumnChip}
            />
          );
        })}
      </Stack>

      {isEmpty && <EmptyStateOverlay emptyState={emptyState} />}
    </Box>
  );
};

export default Kanban;
