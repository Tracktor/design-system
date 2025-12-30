import { Stack } from "@mui/material";
import type { StoryFn } from "@storybook/react-vite";
import Kanban from "@/components/DataDisplay/Kanban/Kanban";

const Template: StoryFn<typeof Kanban> = (args) => (
  <Stack flex={1} minHeight={0} height="100%">
    <Kanban {...args} />
  </Stack>
);

export default Template;
