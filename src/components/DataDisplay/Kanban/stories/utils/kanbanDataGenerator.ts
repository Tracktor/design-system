import { KanbanDataItemProps, KanbanDataProps } from "@/components/DataDisplay/Kanban/Kanban";

type StatusPreset = {
  name: string;
  label: string;
};

type GeneratorOptions = {
  itemsPerColumn?: number[];
  maxTotalItems?: number;
  hideEmptyColumns?: boolean;
  emptyColumns?: number[];
  statuses?: StatusPreset[];
};

type ColumnPreset = {
  name: string;
  label: string;
};

const KANBAN_COLUMN_PRESETS: Record<number, ColumnPreset[]> = {
  1: [{ label: "To do", name: "todo" }],
  2: [
    { label: "To do", name: "todo" },
    { label: "Done", name: "done" },
  ],
  3: [
    { label: "To do", name: "todo" },
    { label: "In progress", name: "inprogress" },
    { label: "Done", name: "done" },
  ],
  4: [
    { label: "Backlog", name: "backlog" },
    { label: "To do", name: "todo" },
    { label: "In progress", name: "inprogress" },
    { label: "Done", name: "done" },
  ],
};

const getColumnPreset = (columns: number, index: number, statuses?: StatusPreset[]): ColumnPreset => {
  if (statuses?.[index]) {
    return statuses[index];
  }

  const preset = KANBAN_COLUMN_PRESETS[columns];
  if (preset?.[index]) {
    return preset[index];
  }

  return {
    label: `Column ${index + 1}`,
    name: `column-${index}`,
  };
};

export type UnifiedKanbanGeneratorOptions = GeneratorOptions & {
  itemTemplates?: Partial<KanbanDataItemProps>[];
  alternateReverse?: boolean;
  loadingColumns?: number[];
};

export const kanbanDataGenerator = (columns: number, options: UnifiedKanbanGeneratorOptions = {}): KanbanDataProps[] => {
  const {
    itemsPerColumn = [],
    maxTotalItems,
    hideEmptyColumns = false,
    emptyColumns = [],
    statuses,
    itemTemplates,
    alternateReverse = false,
    loadingColumns = [], // ⬅️
  } = options;

  let totalItems = 0;

  return Array.from({ length: columns }).reduce<KanbanDataProps[]>((acc, _, colIndex) => {
    const { name, label } = getColumnPreset(columns, colIndex, statuses);

    if (loadingColumns.includes(colIndex)) {
      return [
        ...acc,
        {
          isLoading: true,
          items: [],
          label,
          name,
        },
      ];
    }

    const isEmpty = emptyColumns.includes(colIndex);
    const wanted = isEmpty ? 0 : (itemsPerColumn[colIndex] ?? 0);
    const remaining = maxTotalItems ? Math.max(0, maxTotalItems - totalItems) : wanted;
    const count = maxTotalItems ? Math.min(wanted, remaining) : wanted;

    totalItems += count;

    const baseItems: KanbanDataItemProps[] = Array.from({ length: count }).map((_, itemIndex) => {
      const template = itemTemplates?.[count === 1 ? colIndex % itemTemplates.length : itemIndex % itemTemplates.length];

      return {
        id: `${name}-${itemIndex}`,
        image: undefined,
        tag: "Task",
        title: `Task #${itemIndex + 1}`,
        ...template,
      };
    });

    const items = alternateReverse && colIndex % 2 === 1 ? [...baseItems].reverse() : baseItems;

    return hideEmptyColumns && items.length === 0
      ? acc
      : [
          ...acc,
          {
            count: items.length,
            isFetched: true,
            items,
            label,
            name,
          },
        ];
  }, []);
};
