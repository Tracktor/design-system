import { Box, Card, CircularProgress, Skeleton, Stack } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import { capitalize } from "@tracktor/react-utils";
import { useEffect, useRef } from "react";
import ChipStatusKanban from "@/components/DataDisplay/Kanban/components/ChipStatusKanban";
import VirtualizedKanbanItem from "@/components/DataDisplay/Kanban/components/VirtualizedKanbanItem";
import { KanbanDataItemProps, KanbanProps } from "@/components/DataDisplay/Kanban/Kanban";

interface ColumnProps {
  name: string;
  label?: string;
  count?: number;
  items: KanbanDataItemProps[];
  isLoading?: boolean;
  isFetching?: boolean;
  gutterSize: number;
  listWidth: number | string;
  disableCount?: boolean;
  previewBookingId: string;
  onClickItem?: KanbanProps["onClickItem"];
  loadMoreItems?: (start: number, stop: number, status?: string) => void;
  itemPerPage?: number;
  chipColumVariant?: "filled" | "outlined";
  chipColumDot?: boolean;
  chipStatus?: string;
  headerColumnChip?: KanbanProps["headerColumnChip"];
}

const ColumnTanstack = ({
  name,
  label,
  count,
  items,
  isLoading,
  isFetching,
  gutterSize,
  listWidth,
  disableCount,
  previewBookingId,
  onClickItem,
  loadMoreItems,
  itemPerPage = 50,
  chipColumVariant,
  chipColumDot,
  chipStatus,
  headerColumnChip,
}: ColumnProps) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    estimateSize: () => 160,
    getScrollElement: () => parentRef.current,

    measureElement: (el) => el.getBoundingClientRect().height,
    overscan: 5,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  /** 🔄 Infinite loading */
  useEffect(() => {
    const lastItem = virtualItems.at(-1);
    if (!lastItem) {
      return;
    }

    if (lastItem.index >= items.length - 5) {
      loadMoreItems?.(items.length, items.length + itemPerPage, name);
    }
  }, [virtualItems, items.length, loadMoreItems, itemPerPage, name]);

  const getCountLabel = () => {
    if (disableCount) {
      return "";
    }

    const value = count ?? items.length;
    return value ? ` ${value}` : "";
  };

  return (
    <Stack spacing={2}>
      <Card
        sx={{
          borderRadius: 2,
          flex: "1 1 auto",
          height: 0,
          width: listWidth,
        }}
        variant="elevation"
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
            {isFetching && <CircularProgress size={16} />}
          </Stack>

          {/* Content */}
          <Box
            ref={parentRef}
            flex={1}
            sx={{
              "&::-webkit-scrollbar": { display: "none" },
              overflowY: "auto",
            }}
          >
            {isLoading ? (
              <Stack spacing={1} p={`${gutterSize}px`}>
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} variant="rounded" height={112} />
                ))}
              </Stack>
            ) : (
              <Box
                sx={{
                  height: rowVirtualizer.getTotalSize(),
                  position: "relative",
                }}
              >
                {virtualItems.map((virtualRow) => {
                  const item = items[virtualRow.index];

                  return (
                    <Box
                      key={item.id}
                      ref={rowVirtualizer.measureElement}
                      sx={{
                        left: 0,
                        paddingBottom: `${gutterSize}px`,
                        paddingLeft: `${gutterSize}px`,
                        paddingRight: `${gutterSize}px`,
                        position: "absolute",
                        top: 0,
                        transform: `translateY(${virtualRow.start}px)`,
                        width: "100%",
                      }}
                    >
                      <VirtualizedKanbanItem
                        index={virtualRow.index}
                        data={{ gutterSize, items, onClickItem, previewBookingId }}
                        style={{}}
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

export default ColumnTanstack;
