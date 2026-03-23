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
  totalItems?: number;
};

/**
 * Generate initial columns
 */
const SMALL_LIST_ITEMS = 2;

const STATUSES = [
  { label: "To Do", name: "todo" },
  { label: "In Progress", name: "inprogress" },
  { label: "Done", name: "done" },
  { label: "Small List", name: "small" },
];

type ColumnData = ReturnType<typeof kanbanDataGenerator>[number] & {
  isFetched: boolean;
  isFetching: boolean;
  isLoading: boolean;
};

const createLoadingData = (): ColumnData[] =>
  STATUSES.map(({ label, name }) => ({
    count: 0,
    isFetched: false,
    isFetching: false,
    isLoading: true,
    items: [],
    label,
    name,
  }));

const createLoadedData = (initialItems: number, totalItems: number): ColumnData[] =>
  STATUSES.map(({ label, name }) => {
    const isSmall = name === "small";
    const itemCount = isSmall ? SMALL_LIST_ITEMS : initialItems;
    const items = kanbanDataGenerator(1, {
      alternateReverse: true,
      itemsPerColumn: [itemCount],
      itemTemplates: DEAL_ITEM_TEMPLATES,
      statuses: [{ label, name }],
    })[0].items;

    return {
      count: isSmall ? SMALL_LIST_ITEMS : totalItems,
      isFetched: true,
      isFetching: false,
      isLoading: false,
      items,
      label,
      name,
    };
  });

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
  const totalItems = args.totalItems ?? TOTAL_ITEMS;
  const pageSize = args.itemPerPage ?? DEFAULT_PAGE_SIZE;
  const [data, setData] = useState(createLoadingData);

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
          const colTotal = col.count ?? totalItems;
          if (existingCount >= colTotal) {
            return { ...col, isFetching: false };
          }

          const remaining = colTotal - existingCount;
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
    [pageSize, totalItems],
  );

  /**
   * Simulate initial loading for all columns
   */
  useEffect(() => {
    setData(createLoadingData());

    const timer = setTimeout(() => {
      setData(createLoadedData(initialItems, totalItems));
    }, 1200);

    return () => clearTimeout(timer);
  }, [initialItems, totalItems]);

  return (
    <Stack flex={1} minHeight={0} height="100%">
      <Kanban {...args} data={data} itemPerPage={pageSize} loadMoreItems={loadMoreItems} />
    </Stack>
  );
};

export default InfiniteScrollTemplate;
