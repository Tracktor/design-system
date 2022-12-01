import { Stack } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Chip from "./Chip";

const Template: ComponentStory<typeof Chip> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Chip size="small" label="small" {...args} />
    <Chip size="medium" label="medium" {...args} />
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

export default {
  component: Chip,
  title: "Components/Data Display/Chip",
} as ComponentMeta<typeof Chip>;
