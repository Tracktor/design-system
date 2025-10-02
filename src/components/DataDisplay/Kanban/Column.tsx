import { capitalize, useInView } from "@tracktor/react-utils";
import { ElementType, useEffect, useRef } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import ChipStatusKanban from "@/components/DataDisplay/Kanban/ChipStatusKanban";
import { BASE_HEIGHT_CARD, HEIGHT_LINE_BODY3, KanbanDataItemProps, KanbanProps } from "@/components/DataDisplay/Kanban/Kanban";
import VirtualizedKanbanItem from "@/components/DataDisplay/Kanban/VirtualizedKanbanItem";
import { Box, Card, CircularProgress, Skeleton, Stack } from "@/main";

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
  Link: ElementType;
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
  Link,
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
                        itemSize={(index) => {
                          const item = items[index];
                          return BASE_HEIGHT_CARD + (item.subtitles?.length || 0) * HEIGHT_LINE_BODY3 + gutterSize;
                        }}
                        itemData={{ gutterSize, items, Link, onClickItem, previewBookingId }}
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
