import Button from "@mui/material/Button";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Button,
  title: "Components/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello !",
  fullWidth: false,
  size: "medium",
};
