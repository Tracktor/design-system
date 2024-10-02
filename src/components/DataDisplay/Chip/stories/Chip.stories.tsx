import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import Chip from "../Chip";

const Template: StoryFn<typeof Chip> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Chip size="xSmall" label="xSmall" {...args} />
    <Chip size="small" label="small" {...args} />
    <Chip size="medium" label="medium" {...args} />
  </Stack>
);

const TemplateColor: StoryFn<typeof Chip> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Stack spacing={1}>
      <Chip variant="outlined" label="outlined default" color="default" {...args} />
      <Chip variant="outlined" label="outlined primary" color="primary" {...args} />
      <Chip variant="outlined" label="outlined secondary" color="secondary" {...args} />
      <Chip variant="outlined" label="outlined info" color="info" {...args} />
      <Chip variant="outlined" label="outlined success" color="success" {...args} />
      <Chip variant="outlined" label="outlined warning" color="warning" {...args} />
      <Chip variant="outlined" label="outlined error" color="error" {...args} />
    </Stack>

    <Stack spacing={1}>
      <Chip variant="rounded" label="rounded default" color="default" {...args} />
      <Chip variant="rounded" label="rounded primary" color="primary" {...args} />
      <Chip variant="rounded" label="rounded secondary" color="secondary" {...args} />
      <Chip variant="rounded" label="rounded info" color="info" {...args} />
      <Chip variant="rounded" label="rounded success" color="success" {...args} />
      <Chip variant="rounded" label="rounded warning" color="warning" {...args} />
      <Chip variant="rounded" label="rounded error" color="error" {...args} />
    </Stack>

    <Stack spacing={1}>
      <Chip label="default" color="default" {...args} />
      <Chip label="primary" color="primary" {...args} />
      <Chip label="secondary" color="secondary" {...args} />
      <Chip label="info" color="info" {...args} />
      <Chip label="success" color="success" {...args} />
      <Chip label="warning" color="warning" {...args} />
      <Chip label="error" color="error" {...args} />
    </Stack>

    <Stack spacing={1}>
      <Chip variant="outlined-rounded" label="outlined-rounded default" color="default" {...args} />
      <Chip variant="outlined-rounded" label="outlined-rounded primary" color="primary" {...args} />
      <Chip variant="outlined-rounded" label="outlined-rounded secondary" color="secondary" {...args} />
      <Chip variant="outlined-rounded" label="outlined-rounded info" color="info" {...args} />
      <Chip variant="outlined-rounded" label="outlined-rounded success" color="success" {...args} />
      <Chip variant="outlined-rounded" label="outlined-rounded warning" color="warning" {...args} />
      <Chip variant="outlined-rounded" label="outlined-rounded error" color="error" {...args} />
    </Stack>
  </Stack>
);

export const Filled = Template.bind({});
Filled.args = {
  onDelete: undefined,
  variant: "filled",
};

export const Outlined = Template.bind({});
Outlined.args = {
  onDelete: undefined,
  variant: "outlined",
};

export const Rounded = Template.bind({});
Rounded.args = {
  onDelete: undefined,
  variant: "rounded",
};

export const WithDeleteIcon = Template.bind({});
WithDeleteIcon.args = {
  onDelete: () => {},
};

export const Colors = TemplateColor.bind({});
Colors.args = {
  onDelete: undefined,
};

export const Dot = TemplateColor.bind({});
Dot.args = {
  dot: true,
  onDelete: undefined,
};

export default {
  component: Chip,
  title: "Components/Data Display/Chip",
} as Meta<typeof Chip>;
