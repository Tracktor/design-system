import { Stack } from "@mui/material";
import type { StoryFn, Meta } from "@storybook/react-vite";
import Kanban from "@/components/DataDisplay/Kanban/Kanban";

const Template: StoryFn<typeof Kanban> = (args) => (
  <Stack flex={1} minHeight={0} height="100%">
    <Kanban {...args} />
  </Stack>
);

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
