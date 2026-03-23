import { Box, Card, CircularProgress, Skeleton, Stack } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import { capitalize, useInView } from "@tracktor/react-utils";
import { memo, useEffect, useRef, WheelEvent } from "react";
import ChipStatusKanban from "@/components/DataDisplay/Kanban/components/ChipStatusKanban";
import KanbanCard from "@/components/DataDisplay/Kanban/components/KanbanCard";
import { HeaderColumnChip, KanbanCardVariant, KanbanDataItemProps } from "@/components/DataDisplay/Kanban/types";

export interface KanbanColumnProps {
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
  activeItemId: string;
  onClickItem?: (id: string) => void;
  loadMoreItems?: (startIndex: number, stopIndex: number, status?: string) => void;
  onInView?: (name: string) => void;
  headerColumnChip?: HeaderColumnChip;
  variant?: KanbanCardVariant;
}

const KanbanColumn = memo(
  ({
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
    activeItemId,
    onClickItem,
    onInView,
    chipColumVariant,
    chipColumDot,
    chipStatus,
    headerColumnChip,
    variant,
  }: KanbanColumnProps) => {
    const onInViewTriggered = useRef<string[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);

    const inView = useInView(containerRef);
    const showSkeletons = isLoading;
    const skeletonsToShow = 3;

    const rowVirtualizer = useVirtualizer({
      count: items.length,
      estimateSize: () => 112 + gutterSize,
      getScrollElement: () => parentRef.current,
      overscan: 5,
    });

    const getCountLabel = (): string => {
      if (disableCount) {
        return "";
      }
      const value = count ?? items.length;
      return value ? ` ${value}` : "";
    };

    /**
     * Infinite scroll using `wheel` event to avoid DOM reflow loops.
     * Loads next page when user scrolls down within 50px of bottom.
     */
    const onWheel = (e: WheelEvent<HTMLDivElement>) => {
      if (e.deltaY <= 0) {
        return;
      }

      const el = parentRef.current;

      if (!el || isFetching || el.scrollHeight <= el.clientHeight) {
        return;
      }

      const bottom = el.scrollTop + el.clientHeight;
      const isNearBottom = bottom >= el.scrollHeight - 50;
      const hasMoreItemsToLoad = items.length < itemCount;

      if (isNearBottom && hasMoreItemsToLoad) {
        loadMoreItems?.(items.length, items.length + (itemPerPage || 0), name);
      }
    };

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
      <Stack ref={containerRef} spacing={1.5}>
        {/* Header */}
        <Stack direction="row" alignItems="center" spacing={1} justifyContent="space-between">
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
        <Card
          variant="elevation"
          elevation={0}
          sx={{
            ".kanban-virtual-list": {
              "&::-webkit-scrollbar": { display: "none" },
              flex: 1,
              msOverflowStyle: "none",
              overflowY: "auto",
              scrollbarWidth: "none",
            },
            backgroundColor: "grey.100",
            border: 0,
            borderRadius: 2,
            flex: "1 1 auto",
            height: 0,
            width: listWidth,
          }}
        >
          <Stack height="100%">
            {/* Content */}
            <Box flex={1} ref={parentRef} className="kanban-virtual-list" onWheel={onWheel}>
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
                  {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                    <Box
                      key={items[virtualRow.index].id}
                      ref={rowVirtualizer.measureElement}
                      data-index={virtualRow.index}
                      sx={{
                        left: 0,
                        paddingBottom: `${gutterSize}px`,
                        paddingTop: virtualRow.index === 0 ? `${gutterSize}px` : 0,
                        position: "absolute",
                        top: 0,
                        transform: `translateY(${virtualRow.start}px)`,
                        width: "100%",
                      }}
                    >
                      <KanbanCard
                        item={items[virtualRow.index]}
                        activeItemId={activeItemId}
                        gutterSize={gutterSize}
                        onClickItem={onClickItem}
                        variant={variant}
                      />
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Stack>
        </Card>
      </Stack>
    );
  },
);

export default KanbanColumn;
