import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import AppBar from "../AppBar";

const Template: StoryFn<typeof AppBar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <AppBar {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: AppBar,
  title: "Components/Surface/AppBar",
} as Meta<typeof AppBar>;
