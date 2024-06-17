import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import AppBar from "../AppBar";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";

const menuItems = [
  {
    icon: <CloseIcon />,
    label: "Check",
    url: "#",
  },
  {
    active: true,
    icon: <CloseIcon />,
    label: "Close",
    url: "#",
  },
];

const Template: StoryFn<typeof AppBar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <AppBar
      actionProps={{
        children: "Action",
      }}
      searchProps={{
        placeholder: "Search",
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
    menuItems,
  },
};

export const Simple = SimpleTemplate.bind({});
Simple.args = {};

export default {
  component: AppBar,
  title: "Components/Surface/AppBar",
} as Meta<typeof AppBar>;
