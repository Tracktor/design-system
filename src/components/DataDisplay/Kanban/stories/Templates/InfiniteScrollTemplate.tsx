import { Stack } from "@mui/material";
import type { StoryFn } from "@storybook/react-vite";
import { ComponentProps, useCallback, useEffect, useState } from "react";
import Kanban from "@/components/DataDisplay/Kanban/Kanban";
import { DEAL_ITEM_TEMPLATES } from "@/components/DataDisplay/Kanban/stories/Templates/kanbanItemTemplate";
import { kanbanDataGenerator } from "@/components/DataDisplay/Kanban/stories/utils/kanbanDataGenerator";

/**
 * Defaults (can be overridden via Storybook args)
 */
const DEFAULT_INITIAL_ITEMS = 50;
const DEFAULT_PAGE_SIZE = 50;
const TOTAL_ITEMS = 1000;

/**
 * Extend Kanban args for Storybook-only controls
 */
type InfiniteScrollStoryArgs = ComponentProps<typeof Kanban> & {
  initialItemsPerColumn?: number;
};

/**
 * Generate initial columns
 */
const createInitialData = (initialItems: number) =>
  kanbanDataGenerator(3, {
    alternateReverse: true,
    itemsPerColumn: [initialItems, initialItems, initialItems],
    itemTemplates: DEAL_ITEM_TEMPLATES,
    statuses: [
      { label: "To Do", name: "todo" },
      { label: "In Progress", name: "inprogress" },
      { label: "Done", name: "done" },
    ],
  }).map((col) => ({
    ...col,
    isFetched: true,
    isFetching: false,
  }));

/**
 * Generate additional items for infinite scroll
 */
const generateAdvancedItems = (count: number, status: { label: string; name: string }, offset: number) =>
  kanbanDataGenerator(1, {
    alternateReverse: true,
    itemIdOffset: offset,
    itemsPerColumn: [count],
    itemTemplates: DEAL_ITEM_TEMPLATES,
    statuses: [status],
  })[0].items;

const InfiniteScrollTemplate: StoryFn<InfiniteScrollStoryArgs> = (args) => {
  const initialItems = args.initialItemsPerColumn ?? DEFAULT_INITIAL_ITEMS;
  const pageSize = args.itemPerPage ?? DEFAULT_PAGE_SIZE;
  const [data, setData] = useState(() => createInitialData(initialItems));

  /**
   * Infinite load callback
   */
  const loadMoreItems = useCallback(
    async (_startIndex: number, _stopIndex: number, status?: string) => {
      if (!status) {
        return;
      }

      setData((prev) => prev.map((col) => (col.name === status ? { ...col, isFetching: true } : col)));

      // Simulated network latency
      await new Promise((resolve) => setTimeout(resolve, 800));

      setData((prev) =>
        prev.map((col) => {
          if (col.name !== status) {
            return col;
          }

          const existingCount = col.items.length;
          if (existingCount >= TOTAL_ITEMS) {
            return { ...col, isFetching: false };
          }

          const remaining = TOTAL_ITEMS - existingCount;
          const toAdd = Math.min(pageSize, remaining);

          const newItems = generateAdvancedItems(
            toAdd,
            {
              label: col.label ?? col.name,
              name: col.name,
            },
            existingCount,
          );

          return {
            ...col,
            isFetching: false,
            items: [...col.items, ...newItems],
          };
        }),
      );
    },
    [pageSize],
  );

  /**
   * Reset data when initial items change
   */
  useEffect(() => {
    setData(createInitialData(initialItems));
  }, [initialItems]);

  return (
    <Stack flex={1} minHeight={0} height="100%">
      <Kanban {...args} data={data} itemCount={TOTAL_ITEMS} itemPerPage={pageSize} loadMoreItems={loadMoreItems} />
    </Stack>
  );
};

export default InfiniteScrollTemplate;
