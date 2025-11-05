import { Chip, Stack, Tooltip } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import Typography from "@/components/DataDisplay/Typography/stories/Typography";
import Button from "@/components/Inputs/Button/Button";
import Kanban from "./Kanban";

const Template: StoryFn<typeof Kanban> = (args) => (
  <Stack flex={1} minHeight={0} height="100%">
    <Kanban {...args} />
  </Stack>
);

export const SingleColumnDefaultTasks = Template.bind({});
SingleColumnDefaultTasks.args = {
  data: [
    {
      count: 2,
      isFetched: true,
      items: [
        { id: "1", image: undefined, tag: "Task", title: "My first task" },
        { id: "2", image: undefined, tag: "Task", title: "My second task" },
      ],
      label: "To Do",
      name: "todo",
    },
  ],
};

export const TwoColumnsBasic = Template.bind({});
TwoColumnsBasic.args = {
  data: [
    {
      count: 1,
      isFetched: true,
      items: [{ id: "1", image: undefined, tag: "Task", title: "Task A" }],
      label: "To Do",
      name: "todo",
    },
    {
      count: 1,
      isFetched: true,
      items: [{ id: "2", image: undefined, tag: "Task", title: "Task B" }],
      label: "Done",
      name: "done",
    },
  ],
};

export const MixedColumnsWithEmpty = Template.bind({});
MixedColumnsWithEmpty.args = {
  data: [
    { count: 0, isFetched: true, items: [], label: "To Do", name: "todo" },
    {
      count: 1,
      isFetched: true,
      items: [{ id: "3", image: undefined, tag: "Task", title: "Working on it" }],
      label: "In Progress",
      name: "inprogress",
    },
  ],
};

export const BookingStatusColumns = Template.bind({});
BookingStatusColumns.args = {
  data: [
    {
      count: 2,
      isFetched: true,
      items: [
        { id: "1", image: undefined, tag: "Task", title: "Booking #1" },
        { id: "2", image: undefined, tag: "Task", title: "Booking #2" },
      ],
      label: "Validated",
      name: "validated",
    },
    {
      count: 1,
      isFetched: true,
      items: [{ id: "3", image: undefined, tag: "Task", title: "Booking #3" }],
      label: "Confirmed",
      name: "confirmed",
    },
    { count: 0, isFetched: true, items: [], label: "Started", name: "started" },
  ],
};

export const DealDataKanban = Template.bind({});
DealDataKanban.args = {
  data: [
    {
      count: 1,
      isFetched: true,
      items: [
        {
          id: "17483",
          image: "https://picsum.photos/seed/ballon/160/160",
          imageTitle: "LocMat",
          secondaryImage: "https://picsum.photos/seed/logo1/64/64",
          secondaryImageText: "L",
          subtitles: [{ text: "CODE123" }, { text: "Chantier A" }],
          tag: "N° 17483",
          title: "Ballon éclairant [gen]",
        },
      ],
      label: "Validé",
      name: "validated",
    },
    {
      count: 1,
      isFetched: true,
      items: [
        {
          id: "15692",
          image: "https://picsum.photos/seed/chariot/160/160",
          imageTitle: "Manitou",
          secondaryImage: "https://picsum.photos/seed/logo2/64/64",
          secondaryImageText: "M",
          subtitles: [{ text: "MT-25" }, { text: "01 Oct → 08 Oct 2025" }, { text: "Chantier B" }],
          tag: "N° 15692",
          title: "Chariot télescopique 2,5t",
        },
      ],
      label: "Confirmé",
      name: "confirmed",
    },
    {
      count: 1,
      isFetched: true,
      items: [
        {
          id: "16918",
          image: "https://picsum.photos/seed/laveuse/160/160",
          imageTitle: "Karcher",
          secondaryImage: "https://picsum.photos/seed/logo3/64/64",
          secondaryImageText: "K",
          subtitles: [{ text: "LV-99" }, { text: "01 Oct → 16 Oct 2025" }, { text: "Chantier C" }],
          tag: "N° 16918",
          title: "Laveuse de sol",
        },
      ],
      label: "Terminé",
      name: "ended",
    },
  ],
};

export const FullyFilledCardsThreeColumns = Template.bind({});
FullyFilledCardsThreeColumns.args = {
  data: [
    {
      count: 2,
      isFetched: true,
      items: [
        {
          Alert: <Chip color="warning" size="small" label="Deadline approaching" />,
          Footer: (
            <Typography variant="caption" color="text.secondary">
              Last updated: 1d ago
            </Typography>
          ),
          headerTitle: "Custom Header Content With very Long Text to test overflow",
          id: "1",
          image: "https://picsum.photos/seed/11/100/100",
          imageTitle: "Task image",
          RightFooter: (
            <Button size="xSmall" variant="outlined">
              Open
            </Button>
          ),
          secondaryImage: "https://picsum.photos/seed/secondary11/40/40",
          secondaryImageText: "AB",
          subtitles: [{ text: "Due next week" }, { text: "Assigned to Alice" }],
          tag: "High Priority",
          title: "Design new landing page",
        },
        {
          Alert: <Chip color="info" size="small" label="In review" />,
          Footer: (
            <Typography variant="caption" color="text.secondary">
              Marketing team
            </Typography>
          ),
          id: "2",
          image: "https://picsum.photos/seed/12/100/100",
          imageTitle: "Task image",
          RightFooter: (
            <Button size="xSmall" variant="contained" color="primary">
              Edit
            </Button>
          ),
          secondaryImage: "https://picsum.photos/seed/secondary12/40/40",
          secondaryImageText: "CD",
          subtitles: [{ text: "Draft in progress" }, { text: "Owner: Chris" }],
          tag: "Medium",
          title: "Write blog post",
        },
      ],
      label: "To Do",
      name: "todo",
    },
    {
      count: 1,
      isFetched: true,
      items: [
        {
          Alert: <Chip color="info" size="small" label="Blocked" />,
          Footer: (
            <Typography variant="caption" color="text.secondary">
              Updated: 3h ago
            </Typography>
          ),
          id: "3",
          image: "https://picsum.photos/seed/21/100/100",
          imageTitle: "Progress image",
          RightFooter: (
            <Button size="xSmall" variant="outlined" color="secondary">
              Details
            </Button>
          ),
          secondaryImage: "https://picsum.photos/seed/secondary21/40/40",
          secondaryImageText: "EF",
          subtitles: [{ text: "Backend integration" }, { text: "Owner: Emma" }],
          tag: "Urgent",
          title: "Implement payment API",
        },
      ],
      label: "In Progress",
      name: "inprogress",
    },
    {
      count: 2,
      isFetched: true,
      items: [
        {
          Alert: <Chip color="success" size="small" label="Deployed" />,
          Footer: (
            <Typography variant="caption" color="text.secondary">
              Finished yesterday
            </Typography>
          ),
          id: "4",
          image: "https://picsum.photos/seed/31/100/100",
          imageTitle: "Preview image",
          RightFooter: (
            <Button size="xSmall" variant="outlined" color="primary">
              View
            </Button>
          ),
          secondaryImage: "https://picsum.photos/seed/secondary31/40/40",
          secondaryImageText: "GH",
          subtitles: [{ text: "Deployment successful" }, { text: "Owner: George" }],
          tag: "Completed",
          title: "Release v2.0",
        },
        {
          Alert: <Chip color="success" size="small" label="Passed" />,
          Footer: (
            <Typography variant="caption" color="text.secondary">
              Completed 2 days ago
            </Typography>
          ),
          id: "5",
          image: "https://picsum.photos/seed/32/100/100",
          imageTitle: "Preview image",
          RightFooter: (
            <Button size="xSmall" variant="contained" color="success">
              Report
            </Button>
          ),
          secondaryImage: "https://picsum.photos/seed/secondary32/40/40",
          secondaryImageText: "IJ",
          subtitles: [{ text: "No issues found" }, { text: "Auditor: Ivan" }],
          tag: "Completed",
          title: "Security audit",
        },
      ],
      label: "Done",
      name: "done",
    },
  ],
};

export const StatusFlowSimulation = Template.bind({});
StatusFlowSimulation.args = {
  data: [
    { count: 0, isFetched: true, items: [], label: "Validated", name: "validated" },
    {
      count: 1,
      isFetched: true,
      items: [{ headerTitle: "Custom Header Content", id: "5", image: undefined, tag: "Task", title: "Booking #5" }],
      label: "Confirmed",
      name: "confirmed",
    },
    {
      count: 1,
      isFetched: true,
      items: [{ id: "6", image: undefined, tag: "Task", title: "Booking #6 (moved from confirmed)" }],
      label: "Started",
      name: "started",
    },
    {
      count: 1,
      isFetched: true,
      items: [{ id: "7", image: undefined, tag: "Task", title: "Booking #7 (finished flow)" }],
      label: "Ended",
      name: "ended",
    },
    {
      count: 1,
      isFetched: true,
      items: [{ id: "8", image: undefined, tag: "Task", title: "Booking #8 (canceled by user)" }],
      label: "Canceled",
      name: "canceled",
    },
  ],
};

export const WithCustomChipStatusMapping = Template.bind({});
WithCustomChipStatusMapping.args = {
  data: [
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
  ],
  headerColumnChip: {
    archivedItem: { color: "error", variant: "outlined" },
    draft: { color: "warning", variant: "filled" },
    review: { color: "info", variant: "filled" },
  },
};

export const SubtitleActions = Template.bind({});
SubtitleActions.args = {
  data: [
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
              onClick: (event) => {
                event.stopPropagation();
                // eslint-disable-next-line no-alert
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
  ],
  // eslint-disable-next-line no-alert
  onClickItem: () => alert(`Clicked on item`),
};

export const CustomSubtitles = Template.bind({});
CustomSubtitles.args = {
  data: [
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
  ],
  onClickItem: () => alert(`Clicked on item`),
};

export const LoadingColumns = Template.bind({});
LoadingColumns.args = {
  data: [
    { isLoading: true, items: [], label: "Validated", name: "validated" },
    { isLoading: true, items: [], label: "Confirmed", name: "confirmed" },
  ],
};

export const EmptyStateKanban = Template.bind({});
EmptyStateKanban.args = {
  data: [],
  emptyState: {
    buttonText: "Create your first item",
    description: "There are currently no items to display in this Kanban board.",
    title: "No items available",
  },
};

export default {
  args: {
    // Pass void functions for required callbacks, otherwise Storybook will complain
    onColumnInView: () => {},
  },
  component: Kanban,
  parameters: {
    docs: {
      description: {
        component: "Kanban component for displaying tasks in columns.",
      },
    },
  },
  title: "Components/Data Display/Kanban",
} as Meta<typeof Kanban>;
