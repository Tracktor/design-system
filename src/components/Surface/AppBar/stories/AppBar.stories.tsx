import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import AppBar from "../AppBar";

const ITEMS_SECONDARY = [
  {
    label: "Restore",
    url: "#",
  },
  {
    active: true,
    label: "Favorite",
    url: "#",
  },
];

const Template: StoryFn<typeof AppBar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <AppBar
      actionProps={{
        children: "Action",
      }}
      {...args}
    />
  </Stack>
);

const SimpleTemplate: StoryFn<typeof AppBar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <AppBar Search={null} Avatar={null} Action={null} {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const WithAvatarMenu = Template.bind({});
WithAvatarMenu.args = {
  avatarProps: {
    items: ITEMS_SECONDARY,
  },
};

export const Simple = SimpleTemplate.bind({});
Simple.args = {};

export default {
  component: AppBar,
  title: "Components/Surface/AppBar",
} as Meta<typeof AppBar>;
