import Button from "@mui/material/Button";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Button,
  title: "DesignSystem/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Bonjour</Button>;

export const Text = Template.bind({});
Text.args = {};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outlined",
};
