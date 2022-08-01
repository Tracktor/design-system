import { Stack } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
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

export const WithDeleteIcon = Template.bind({});
WithDeleteIcon.args = {
  onDelete: () => {},
};

export default {
  component: Chip,
  title: "Components/DataDisplay/Chip",
} as ComponentMeta<typeof Chip>;
