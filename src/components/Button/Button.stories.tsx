// import Button, { ButtonProps } from "@mui/material/Button";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  component: Button,
  title: "DesignSystem/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = { children: "Hello !" };
