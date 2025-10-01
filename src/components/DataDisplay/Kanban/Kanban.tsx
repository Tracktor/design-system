import { Box, Stack, useTheme } from "@mui/material";
import { ElementType, ReactElement, useRef } from "react";
import Column from "@/components/DataDisplay/Kanban/Column";
import EmptyStateOverlay from "@/components/DataDisplay/Kanban/EmptyStateOverlay";
import useDragScroll from "@/components/DataDisplay/Kanban/hooks/useDragScroll";

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
   * The component used for rendering links. Defaults to 'a' tag.
   */
  Link: ElementType;
  /**
   * The Kanban data to be displayed.
   */
  /**
   * The ID of the booking to preview, obtained from the URL search parameters.
   */
  previewBookingId?: string;
  data: {
    /**
     * The name of the Kanban column.
     * Should be unique across all columns.
     */
    name: string;
    label?: string;
    count?: number;
    isLoading?: boolean;
    isFetching?: boolean;
    isFetched?: boolean;
    items: {
      id: string;
      image: string | undefined;
      imageTitle?: string;
      secondaryImage?: string;
      secondaryImageText?: string;
      subtitles?: {
        text: string;
        LeftIcon?: ReactElement;
      }[];
      tag: string;
      title: string;
      link?: string;
      Footer?: ReactElement;
      Alert?: ReactElement;
      RightFooter?: ReactElement;
    }[];
  }[];
  /**
   * Optional empty state configuration.
   */
  emptyState?:
    | ReactElement
    | {
        title: string;
        description: string;
        buttonText: string;
        buttonLink?: string;
      };
}

export const BASE_HEIGHT_CARD = 76;
export const HEIGHT_LINE_BODY3 = 18;

const Kanban = ({
  data,
  onClickItem,
  disableCount,
  onColumnInView,
  emptyState,
  chipColumVariant,
  chipStatus,
  previewBookingId = "",
  Link = "a",
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
              Link={Link}
            />
          );
        })}
      </Stack>

      {isEmpty && <EmptyStateOverlay emptyState={emptyState} Link={Link} />}
    </Box>
  );
};

export default Kanban;
