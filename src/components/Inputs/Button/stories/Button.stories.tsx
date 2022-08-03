import { Stack } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

const Template: ComponentStory<typeof Button> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Button size="small" color="error" {...args}>
      Small
    </Button>
    <Button size="medium" {...args}>
      Medium
    </Button>
    <Button size="large" color="secondary" {...args}>
      Large
    </Button>
    <Button size="small" disabled {...args}>
      Disabled
    </Button>
  </Stack>
);

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export default {
  component: Button,
  title: "Components/Inputs/Button",
} as ComponentMeta<typeof Button>;
