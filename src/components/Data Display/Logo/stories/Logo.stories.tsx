import { Stack } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Logo from "./Logo";

const Template: ComponentStory<typeof Logo> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Logo {...args} />
  </Stack>
);

export const Black = Template.bind({});
Black.args = {};

export const White = Template.bind({});
White.args = {
  color: "white",
};

export const RenderAsSvgBlack = Template.bind({});
RenderAsSvgBlack.args = {
  component: "svg",
};

export const RenderAsSvgWhite = Template.bind({});
RenderAsSvgWhite.args = {
  color: "white",
  component: "svg",
};

export default {
  component: Logo,
  title: "Components/Data Display/Logo",
} as ComponentMeta<typeof Logo>;
