import { Stack } from "@mui/material";
import type { StoryFn, Meta } from "@storybook/react-vite";
import Kanban from "@/components/DataDisplay/Kanban/Kanban";

const Template: StoryFn<typeof Kanban> = (args) => (
  <Stack flex={1} minHeight={0} height="100%">
    <Kanban {...args} />
  </Stack>
);

export const SingleColumnSingleItem = Template.bind({});
SingleColumnSingleItem.args = {
  data: [
    {
      count: 1,
      isFetched: true,
      items: [
        {
          id: "1",
          image: undefined,
          tag: "Task",
          title: "My first task",
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
  title: "Components/Data Display/Kanban",
} as Meta<typeof Kanban>;
