import { Box, ChipProps, Stack, useTheme } from "@mui/material";
import { MouseEvent, ReactElement, ReactNode, useRef } from "react";
import Column from "@/components/DataDisplay/Kanban/components/Column";
import EmptyStateOverlay from "@/components/DataDisplay/Kanban/components/EmptyStateOverlay";
import useDragScroll from "@/components/DataDisplay/Kanban/hooks/useDragScroll";

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
  text: ReactNode;
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
  headerTitle?: string;
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
