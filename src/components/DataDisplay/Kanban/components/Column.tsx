import { Box, Card, CircularProgress, Skeleton, Stack } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import { capitalize, useInView } from "@tracktor/react-utils";
import { useEffect, useRef } from "react";
import ChipStatusKanban from "@/components/DataDisplay/Kanban/components/ChipStatusKanban";
import VirtualizedKanbanItem from "@/components/DataDisplay/Kanban/components/VirtualizedKanbanItem";
import { KanbanDataItemProps, KanbanProps } from "@/components/DataDisplay/Kanban/Kanban";

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
  const parentRef = useRef<HTMLDivElement>(null);

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

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    estimateSize: () => 112 + gutterSize,
    getScrollElement: () => parentRef.current,
    overscan: 5,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  /**
   * Infinite loading trigger
   */
  useEffect(() => {
    if (!virtualItems.length || isFetching) {
      return;
    }

    const lastItem = virtualItems[virtualItems.length - 1];
    if (lastItem.index >= items.length - 1 && items.length < itemCount) {
      loadMoreItems?.(items.length, items.length + (itemPerPage || 0), name);
    }
  }, [virtualItems, items.length, itemCount, itemPerPage, isFetching, loadMoreItems, name]);

  // /**
  //  * Infinite loading trigger
  //  * Automatically loads more items when user scrolls near the end of the virtualized list
  //  */
  // useEffect(() => {
  //   const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();
  //
  //   if (!lastItem) {
  //     return;
  //   }
  //
  //   if (lastItem.index >= items.length - 1 && items.length < itemCount) {
  //     loadMoreItems?.(items.length, items.length + (itemPerPage || 0), name);
  //   }
  // }, [items.length, itemCount, itemPerPage, loadMoreItems, name, rowVirtualizer.getVirtualItems]);

  /**
   * Trigger onInView once per column
   */
  useEffect(() => {
    if (inView && !onInViewTriggered.current.includes(name)) {
      onInViewTriggered.current.push(name);
      onInView?.(name);
    }
  }, [name, inView, onInView]);

  return (
    <Stack ref={containerRef} spacing={2}>
      <Card
        sx={{
          ".kanban-virtual-list": {
            "&::-webkit-scrollbar": { display: "none" },
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
        elevation={1}
      >
        <Stack height="100%">
          {/* Header */}
          <Stack direction="row" alignItems="center" spacing={1} padding={2} justifyContent="space-between">
            <ChipStatusKanban
              dot={chipColumDot}
              label={`${capitalize(label || name)}${getCountLabel()}`}
              variant={chipColumVariant}
              status={chipStatus || name}
              size="small"
              headerColumnChip={headerColumnChip}
            />
            {isFetching && <CircularProgress size={16} sx={{ color: "text.secondary" }} />}
          </Stack>

          {/* Content */}
          <Box flex={1} ref={parentRef} className="kanban-virtual-list">
            {showSkeletons ? (
              <Stack spacing={1} p={`${gutterSize}px`}>
                {Array.from({ length: skeletonsToShow }).map((_, index) => (
                  <Skeleton key={index} variant="rounded" height={112} />
                ))}
              </Stack>
            ) : (
              <Box
                sx={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  position: "relative",
                  width: "100%",
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  return (
                    <Box
                      key={items[virtualRow.index].id}
                      ref={rowVirtualizer.measureElement}
                      data-index={virtualRow.index}
                      sx={{
                        left: 0,
                        paddingBottom: `${gutterSize}px`,
                        position: "absolute",
                        top: 0,
                        transform: `translateY(${virtualRow.start}px)`,
                        width: "100%",
                      }}
                    >
                      <VirtualizedKanbanItem
                        index={virtualRow.index}
                        style={{}}
                        data={{
                          gutterSize,
                          items,
                          onClickItem,
                          previewBookingId,
                        }}
                      />
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
        </Stack>
      </Card>
    </Stack>
  );
};

export default Column;
