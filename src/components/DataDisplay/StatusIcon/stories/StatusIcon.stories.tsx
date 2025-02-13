import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import StatusIcon from "./StatusIcon";

const Template: StoryFn<typeof StatusIcon> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <StatusIcon {...args} />
    <StatusIcon color="primary" {...args} />
    <StatusIcon color="secondary" {...args} />
    <StatusIcon color="success" {...args} />
    <StatusIcon color="info" {...args} />
    <StatusIcon color="error" {...args} />
    <StatusIcon color="warning" {...args} />
  </Stack>
);

export const small = Template.bind({});
small.args = {
  fontSize: "small",
};

export const medium = Template.bind({});
medium.args = {
  fontSize: "medium",
};

export const large = Template.bind({});
large.args = {
  fontSize: "large",
};

export const customFontSize = Template.bind({});
customFontSize.args = {
  sx: {
    fontSize: 10,
  },
};

export const filled = Template.bind({});
large.args = {
  variant: "filled",
};

export const outlined = Template.bind({});
outlined.args = {
  variant: "outlined",
};

export default {
  component: StatusIcon,
  title: "Components/Data Display/StatusIcon",
} as Meta<typeof StatusIcon>;
