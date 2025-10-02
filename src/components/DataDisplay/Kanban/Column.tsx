import { capitalize, useInView } from "@tracktor/react-utils";
import { CSSProperties, ReactElement, useEffect, useRef } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import ArticleImage from "@/components/DataDisplay/ArticleImage";
import {
  computeKanbanCardHeight,
  defaultKanbanChip,
  HeaderColumnChip,
  KanbanDataItemProps,
  KanbanProps,
} from "@/components/DataDisplay/Kanban/Kanban";
import { Box, Card, Chip, ChipProps, CircularProgress, Skeleton, Stack, Tooltip, Typography, useTheme } from "@/main";

const IMG_SIZE = 40;

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
                  <Typography variant="h6" noWrap>
                    {title}
                  </Typography>
                </Tooltip>

                {subtitles?.map(({ text, LeftIcon }) => (
                  <Tooltip key={text} title={text} enterDelay={300} enterNextDelay={300} slotProps={{ popper: POPPER_KANBAN }}>
                    <Stack direction="row" alignItems="center" spacing={0.5} overflow="hidden">
                      {LeftIcon}
                      <Typography variant="body3" color="textSecondary" noWrap>
                        {text}
                      </Typography>
                    </Stack>
                  </Tooltip>
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
  const statusToLowerCase = String(status)?.toLowerCase();
  const mapping = headerColumnChip ?? defaultKanbanChip;
  const { color, variant: mappedVariant } = (statusToLowerCase && mapping[statusToLowerCase]) || { color: "default" };

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

export default Column;
