import { Chip, Stack, Tooltip } from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { KanbanDataItemProps, KanbanDataProps } from "@/components/DataDisplay/Kanban/Kanban";
import Typography from "@/components/DataDisplay/Typography/stories/Typography";
import Button from "@/components/Inputs/Button/Button";

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

export const simpleDataGenerator = (columns: number, options: GeneratorOptions = {}): KanbanDataProps[] => {
  const { itemsPerColumn = [], maxTotalItems, hideEmptyColumns = false, emptyColumns = [], statuses } = options;

  const result = Array.from({ length: columns }).reduce<{
    totalItems: number;
    data: KanbanDataProps[];
  }>(
    (acc, _, colIndex) => {
      const { name, label } = getColumnPreset(columns, colIndex, statuses);

      const isEmpty = emptyColumns.includes(colIndex);
      const wantedCount = isEmpty ? 0 : (itemsPerColumn[colIndex] ?? 0);
      const remaining = maxTotalItems ? Math.max(0, maxTotalItems - acc.totalItems) : wantedCount;
      const columnItemCount = maxTotalItems ? Math.min(wantedCount, remaining) : wantedCount;

      const items = Array.from({ length: columnItemCount }).map((_, itemIndex) => ({
        id: `${colIndex}-${itemIndex}`,
        image: undefined,
        tag: "Task",
        title: `Task #${itemIndex + 1}`,
      }));

      return {
        data: [
          ...acc.data,
          {
            count: items.length,
            isFetched: true,
            items,
            label,
            name,
          },
        ],
        totalItems: acc.totalItems + columnItemCount,
      };
    },
    { data: [], totalItems: 0 },
  );

  return hideEmptyColumns ? result.data.filter((col) => col.items.length > 0) : result.data;
};

export type KanbanItemTemplate = Omit<KanbanDataItemProps, "id">;

export const KANBAN_ITEM_TEMPLATES: KanbanItemTemplate[] = [
  {
    Alert: <Chip color="warning" size="small" label="Deadline approaching" />,
    Footer: (
      <Typography variant="caption" color="text.secondary">
        Last updated: 1d ago
      </Typography>
    ),
    headerTitle: "Custom Header Content With very Long Text to test overflow",
    image: "https://picsum.photos/seed/11/100/100",
    imageTitle: "Task image",
    RightFooter: (
      <Button size="xSmall" variant="outlined">
        Open
      </Button>
    ),
    secondaryImage: "https://picsum.photos/seed/secondary11/40/40",
    secondaryImageText: "AB",
    subtitles: [{ text: "Due next week" }, { text: "Assigned to Alice" }, { text: "Priority: High" }],
    tag: "High Priority",
    title: "Design new landing page",
  },
  {
    Alert: <Chip color="info" size="small" label="In review" />,
    image: "https://picsum.photos/seed/12/100/100",
    imageTitle: "Task image",
    RightFooter: (
      <Button size="xSmall" variant="contained" color="primary">
        Edit
      </Button>
    ),
    subtitles: [{ text: "Draft in progress" }, { text: "Owner: Chris" }],
    tag: "Medium",
    title: "Write blog post",
  },
  {
    Footer: (
      <Typography variant="caption" color="text.secondary">
        Waiting for backend API
      </Typography>
    ),
    image: "https://picsum.photos/seed/13/100/100",
    imageTitle: "Task image",
    subtitles: [{ text: "Dependency missing" }],
    tag: "Blocked",
    title: "Integrate payment service",
  },
  {
    image: "https://picsum.photos/seed/14/100/100",
    imageTitle: "Task image",
    tag: "Completed",
    title: "Release v2.1",
  },
  {
    Alert: <Chip color="secondary" size="small" label="Scheduled" />,
    Footer: (
      <Typography variant="caption" color="text.secondary">
        Starts next week
      </Typography>
    ),
    headerTitle: "Upcoming task",
    image: "https://picsum.photos/seed/15/100/100",
    imageTitle: "Task image",
    tag: "Planned",
    title: "Prepare Q4 roadmap",
  },
];

type AdvancedKanbanGeneratorOptions = GeneratorOptions & {
  itemTemplates: KanbanItemTemplate[];
  alternateReverse?: boolean;
};

export const advancedKanbanDataGenerator = (columns: number, options: AdvancedKanbanGeneratorOptions): KanbanDataProps[] => {
  const { itemsPerColumn = [], itemTemplates, alternateReverse = false, ...structureOptions } = options;

  const structure = simpleDataGenerator(columns, structureOptions);

  return structure.map((column, colIndex) => {
    const count = itemsPerColumn[colIndex] ?? 0;

    const baseItems: KanbanDataItemProps[] = Array.from({ length: count }).map((_, itemIndex) => {
      const template = itemTemplates[itemIndex % itemTemplates.length];

      return {
        id: `${column.name}-${itemIndex}`,
        ...template,
      };
    });

    const items = alternateReverse && colIndex % 2 === 1 ? [...baseItems].reverse() : baseItems;

    return {
      ...column,
      count: items.length,
      isFetched: true,
      items,
    };
  });
};

type AnimatedSubtitlesProps = {
  subtitles?: { text: string }[];
  delay?: number;
};

export const AnimatedSubtitles = ({ subtitles = [], delay = 1500 }: AnimatedSubtitlesProps) => {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    if (subtitles.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev >= subtitles.length ? 1 : prev + 1));
    }, delay);

    return () => clearInterval(interval);
  }, [subtitles, delay]);

  return (
    <>
      {subtitles.slice(0, visibleCount).map((s, i) => (
        <Typography key={i} variant="body2" color="text.secondary">
          {s.text}
        </Typography>
      ))}
    </>
  );
};

export const KANBAN_ANIMATED_ITEM_TEMPLATES: KanbanItemTemplate[] = [
  {
    Alert: <Chip color="warning" size="small" label="Deadline approaching" />,
    Footer: (
      <Typography variant="caption" color="text.secondary">
        Last updated: 1d ago
      </Typography>
    ),
    headerTitle: "Custom Header Content With very Long Text to test overflow",
    image: "https://picsum.photos/seed/11/100/100",
    imageTitle: "Task image",
    RightFooter: (
      <Button size="xSmall" variant="outlined">
        Open
      </Button>
    ),
    secondaryImage: "https://picsum.photos/seed/secondary11/40/40",
    secondaryImageText: "AB",
    subtitles: [
      {
        text: (
          <AnimatedSubtitles
            subtitles={[{ text: "Due next week" }, { text: "Assigned to Alice" }, { text: "Priority: High" }]}
            delay={1200}
          />
        ),
      },
    ],
    tag: "High Priority",
    title: "Design new landing page",
  },
  {
    Alert: <Chip color="info" size="small" label="In review" />,
    image: "https://picsum.photos/seed/12/100/100",
    imageTitle: "Task image",
    RightFooter: (
      <Button size="xSmall" variant="contained" color="primary">
        Edit
      </Button>
    ),
    subtitles: [
      {
        text: <AnimatedSubtitles subtitles={[{ text: "Draft in progress" }, { text: "Owner: Chris" }]} delay={1000} />,
      },
    ],
    tag: "Medium",
    title: "Write blog post",
  },
  {
    Footer: (
      <Typography variant="caption" color="text.secondary">
        Waiting for backend API
      </Typography>
    ),
    image: "https://picsum.photos/seed/13/100/100",
    imageTitle: "Task image",
    subtitles: [{ text: "Dependency missing" }],
    tag: "Blocked",
    title: "Integrate payment service",
  },
  {
    image: "https://picsum.photos/seed/14/100/100",
    imageTitle: "Task image",
    tag: "Completed",
    title: "Release v2.1",
  },
  {
    Alert: <Chip color="secondary" size="small" label="Scheduled" />,
    Footer: (
      <Typography variant="caption" color="text.secondary">
        Starts next week
      </Typography>
    ),
    headerTitle: "Upcoming task",
    image: "https://picsum.photos/seed/15/100/100",
    imageTitle: "Task image",
    subtitles: [
      {
        text: <AnimatedSubtitles subtitles={[{ text: "Kickoff planned" }, { text: "Waiting for validation" }]} delay={1400} />,
      },
    ],
    tag: "Planned",
    title: "Prepare Q4 roadmap",
  },
];

export const customChipStatusMappingData = [
  {
    count: 1,
    isFetched: true,
    items: [{ id: "5", image: undefined, tag: "Task", title: "Archived task" }],
    label: "Archived",
    name: "archivedItem",
  },
  {
    count: 1,
    isFetched: true,
    items: [{ id: "6", image: undefined, tag: "Task", title: "Draft task" }],
    label: "Draft",
    name: "draft",
  },
  {
    count: 1,
    isFetched: true,
    items: [{ id: "7", image: undefined, tag: "Task", title: "In Review" }],
    label: "In Review",
    name: "review",
  },
];

export const subtitleActionsData = [
  {
    count: 2,
    isFetched: true,
    items: [
      {
        Footer: <Chip color="info" size="small" label="Summer" variant="outlined-rounded" />,
        headerTitle: "Custom Header Content",
        id: "17605",
        image: "https://picsum.photos/seed/abri/160/160",
        imageTitle: "Abri de chantier isolé équipé sur roues",
        secondaryImage: "https://picsum.photos/seed/logo1/64/64",
        secondaryImageText: "V",
        subtitles: [{ text: "Élévateur - GS-1532" }, { text: "08 Oct → 12 Oct 2025" }, { text: "SGP LIGNE 17 TRIANGLE GONESSE" }],
        tag: "N° 17605",
        title: "HELLO CONSTRUCTION",
      },
      {
        Footer: <Chip color="success" size="small" label="winter" variant="outlined-rounded" />,
        id: "18098",
        image: "https://picsum.photos/seed/betonniere/160/160",
        imageTitle: "Bétonnière électrique - 100 L",
        secondaryImage: "https://picsum.photos/seed/logo2/64/64",
        secondaryImageText: "V",
        subtitles: [
          {
            LeftIcon: <span style={{ fontSize: 16 }}>➕</span>,
            onClick: (event: MouseEvent) => {
              event.stopPropagation();
              alert("Add resource clicked");
            },
            text: "Add resource",
          },
          { text: "100 €/jour · 13 Oct → 19 Oct 2025" },
          { text: "SGP LIGNE 17 TRIANGLE GONESSE" },
        ],
        tag: "N° 18098",
        title: "WORLD CONSTRUCTION",
      },
    ],
    label: "Waiting for confirmation",
    name: "waiting_for_confirmation",
  },
];

export const customSubtitlesData = [
  {
    count: 1,
    isFetched: true,
    items: [
      {
        Footer: <Chip color="warning" size="small" label="Spring" variant="outlined-rounded" />,
        id: "19001",
        image: "https://picsum.photos/seed/excavator/160/160",
        imageTitle: "Excavatrice compacte - 2T",
        secondaryImage: "https://picsum.photos/seed/logo3/64/64",
        secondaryImageText: "E",
        subtitles: [
          {
            text: (
              <Stack spacing={1} direction="row" alignItems="center">
                <Typography noWrap variant="body2" color="success">
                  Excavatrice
                </Typography>
                <Tooltip title="Numéro de série : EXC-2025-001" enterDelay={300}>
                  <Typography noWrap variant="body3" color="error">
                    série 2025
                  </Typography>
                </Tooltip>
                <span style={{ fontSize: 16 }}>➕</span>
              </Stack>
            ),
          },
          {
            text: "14 Oct → 20 Oct 2025",
          },
          {
            text: "CHANTIER METRO L14 BERCY",
          },
        ],
        tag: "N° 19001",
        title: "BIG MACHINES",
      },
    ],
    label: "With tooltip",
    name: "with_tooltip",
  },
];

export const loadingColumnData = [
  { isLoading: true, items: [], label: "Validated", name: "validated" },
  { isLoading: true, items: [], label: "Confirmed", name: "confirmed" },
];
