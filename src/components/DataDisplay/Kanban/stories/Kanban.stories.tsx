import { Stack } from "@mui/material";
import type { StoryFn, Meta } from "@storybook/react-vite";
import Kanban from "@/components/DataDisplay/Kanban/Kanban";

const Template: StoryFn<typeof Kanban> = (args) => (
  <Stack flex={1} minHeight={0} height="100%">
    <Kanban {...args} />
  </Stack>
);

export const Default: StoryFn<typeof Kanban> = Template.bind({});
Default.args = {
  data: [
    {
      count: 2,
      isFetched: true,
      items: [
        {
          id: "1",
          image: undefined,
          tag: "Task",
          title: "My first task",
        },
        {
          id: "2",
          image: undefined,
          tag: "Task",
          title: "My second task",
        },
      ],
      label: "To Do",
      name: "todo",
    },
  ],
};

export const TwoColumnsMinimal = Template.bind({});
TwoColumnsMinimal.args = {
  data: [
    {
      count: 1,
      isFetched: true,
      items: [
        {
          id: "1",
          image: undefined,
          tag: "Task",
          title: "Task A",
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
          id: "2",
          image: undefined,
          tag: "Task",
          title: "Task B",
        },
      ],
      label: "Done",
      name: "done",
    },
  ],
};

export const ColumnEmptyButNotAll = Template.bind({});
ColumnEmptyButNotAll.args = {
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
      items: [
        {
          id: "3",
          image: undefined,
          tag: "Task",
          title: "Working on it",
        },
      ],
      label: "In Progress",
      name: "inprogress",
    },
  ],
};

export const StatusColumns = Template.bind({});
StatusColumns.args = {
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

export const StatusChangeSimulation = Template.bind({});
StatusChangeSimulation.args = {
  data: [
    {
      count: 0,
      isFetched: true,
      items: [],
      label: "Validated",
      name: "validated",
    },
    {
      count: 1,
      isFetched: true,
      items: [
        {
          id: "5",
          image: undefined,
          tag: "Task",
          title: "Booking #5",
        },
      ],
      label: "Confirmed",
      name: "confirmed",
    },
    {
      count: 1,
      isFetched: true,
      items: [
        {
          id: "6",
          image: undefined,
          tag: "Task",
          title: "Booking #6 (moved from confirmed)",
        },
      ],
      label: "Started",
      name: "started",
    },
  ],
};

export const WithCustomStatusMapping = Template.bind({});
WithCustomStatusMapping.args = {
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
  statusChipMapping: {
    archived: { color: "default", variant: "outlined" },
    draft: { color: "warning", variant: "filled" },
    review: { color: "info", variant: "filled" },
  },
};

export const LoadingKanban = Template.bind({});
LoadingKanban.args = {
  data: [
    {
      isLoading: true,
      items: [],
      label: "Validated",
      name: "validated",
    },
    {
      isLoading: true,
      items: [],
      label: "Confirmed",
      name: "confirmed",
    },
  ],
};

export const EmptyKanban = Template.bind({});
EmptyKanban.args = {
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
