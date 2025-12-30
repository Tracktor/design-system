import { Chip, Stack, Tooltip } from "@mui/material";
import { MouseEvent } from "react";
import { KanbanDataItemProps } from "@/components/DataDisplay/Kanban/Kanban";
import Typography from "@/components/DataDisplay/Typography/stories/Typography";
import Button from "@/components/Inputs/Button/Button";

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
