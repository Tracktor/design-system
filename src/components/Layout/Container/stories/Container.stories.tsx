import { Box } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import Container from "./Container";

const Template: StoryFn<typeof Container> = (args) => (
  <Container {...args}>
    <Box sx={{ backgroundColor: "#cfe8fc", height: "100vh" }} />
  </Container>
);

export const Fluid = Template.bind({});
Fluid.args = {
  maxWidth: "lg",
};

export const Fixed = Template.bind({});
Fixed.args = {
  fixed: true,
};

export default {
  component: Container,
  title: "Components/Layout/Container",
} as Meta<typeof Container>;
