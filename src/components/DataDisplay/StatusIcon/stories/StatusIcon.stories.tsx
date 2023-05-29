import { Stack } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import StatusIcon from "./StatusIcon";

const Template: ComponentStory<typeof StatusIcon> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <StatusIcon {...args} />
    <StatusIcon color="primary" {...args} />
    <StatusIcon color="secondary" {...args} />
    <StatusIcon color="info" {...args} />
    <StatusIcon color="error" {...args} />
    <StatusIcon color="warning" {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const medium = Template.bind({});
medium.args = {
  fontSize: "medium",
};

export const large = Template.bind({});
large.args = {
  fontSize: "large",
};

export const CustomFontSize = Template.bind({});
CustomFontSize.args = {
  sx: {
    fontSize: 10,
  },
};

export default {
  component: StatusIcon,
  title: "Components/Data Display/StatusIcon",
} as ComponentMeta<typeof StatusIcon>;
