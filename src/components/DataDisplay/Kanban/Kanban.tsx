import { Box, Stack, useTheme } from "@mui/material";
import { CSSProperties, useRef } from "react";
import EmptyStateOverlay from "@/components/DataDisplay/Kanban/components/EmptyStateOverlay";
import KanbanCard from "@/components/DataDisplay/Kanban/components/KanbanCard";
import KanbanColumn from "@/components/DataDisplay/Kanban/components/KanbanColumn";
import useDragScroll from "@/components/DataDisplay/Kanban/hooks/useDragScroll";
import { KanbanDataItemProps, KanbanProps } from "@/components/DataDisplay/Kanban/types";

// Re-export all types and constants for backward compatibility
export * from "@/components/DataDisplay/Kanban/types";

// Backward-compatible wrapper for VirtualizedKanbanItem
type KanbanItemProps = {
  index: number;
  style: CSSProperties;
  data: {
    activeItemId: string;
    gutterSize: number;
    onClickItem: KanbanProps["onClickItem"];
    items: KanbanDataItemProps[];
  };
};

export const VirtualizedKanbanItem = ({ index, data }: KanbanItemProps) => (
  <KanbanCard item={data.items[index]} activeItemId={data.activeItemId} gutterSize={data.gutterSize} onClickItem={data.onClickItem} />
);

const Kanban = ({
  data,
  onClickItem,
  disableCount,
  onColumnInView,
  emptyState,
  chipColumVariant,
  chipStatus,
  headerColumnChip,
  activeItemId = "",
  variant = "primary",
  chipColumDot = true,
  height = "100%",
  itemPerPage = 50,
  listWidth = 360,
  itemCount = 500,
  loadMoreItems = () => {},
}: KanbanProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { spacing } = useTheme();
  const { onMouseDown, onMouseUp, onMouseMove } = useDragScroll(containerRef);
  const gutterSize = parseInt(spacing(1), 10);
  const isEmpty = data.every((column) => column.items.length === 0 && column.isFetched && !column.isLoading && !column.isFetching);

  return (
    <Box sx={{ height, position: "relative" }}>
      <Stack
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
            <KanbanColumn
              key={key}
              itemCount={itemCount}
              listWidth={listWidth}
              disableCount={disableCount}
              loadMoreItems={loadMoreItems}
              activeItemId={activeItemId}
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
              variant={variant}
            />
          );
        })}
      </Stack>

      {isEmpty && <EmptyStateOverlay emptyState={emptyState} />}
    </Box>
  );
};

export default Kanban;
