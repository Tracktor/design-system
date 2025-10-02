import { Stack } from "@mui/material";
import type { StoryFn, Meta } from "@storybook/react-vite";
import Kanban from "@/components/DataDisplay/Kanban/Kanban";

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
    {
      count: 0,
      isFetched: true,
      items: [],
      label: "To Do",
      name: "todo",
    },
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
    {
      count: 0,
      isFetched: true,
      items: [],
      label: "Started",
      name: "started",
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
      items: [{ id: "5", image: undefined, tag: "Task", title: "Booking #5" }],
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
      name: "archived",
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
    archived: { color: "default", variant: "outlined" },
    draft: { color: "warning", variant: "filled" },
    review: { color: "info", variant: "filled" },
  },
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
    buttonLink: "#",
    buttonText: "Create your first item",
    description: "There are currently no items to display in this Kanban board.",
    title: "No items available",
  },
};

export default {
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
