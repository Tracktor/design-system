import { Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import Pagination from "./Pagination";

const Template: StoryFn<typeof Pagination> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Typography variant="overline">Small</Typography>
    <Pagination count={3} size="small" {...args} />
    <Typography variant="overline">Medium</Typography>
    <Pagination count={3} color="primary" size="medium" {...args} />
    <Typography variant="overline">Large</Typography>
    <Pagination count={3} color="secondary" size="large" {...args} />
  </Stack>
);

export const CircularText = Template.bind({});
CircularText.args = {
  shape: "circular",
  variant: "text",
};

export const CircularOutlined = Template.bind({});
CircularOutlined.args = {
  shape: "circular",
  variant: "outlined",
};

export const RoundedText = Template.bind({});
RoundedText.args = {
  shape: "rounded",
  variant: "text",
};

export const RoundedOutlined = Template.bind({});
RoundedOutlined.args = {
  shape: "rounded",
  variant: "outlined",
};

export default {
  argTypes: {
    color: {
      control: { type: "select" },
      description:
        "The active color. It supports both default and custom theme colors, which can be added as shown in the palette customization guide .",
      options: ["standard", "primary", "secondary"],
    },
    shape: {
      description: "The shape of the pagination items.",
    },
    size: {
      control: { type: "select" },
      description: "The size of the component.",
      options: ["small", "medium", "large"],
    },
    variant: {
      description: "The variant to use.",
    },
  },
  component: Pagination,
  title: "Components/Navigation/Pagination",
} as Meta<typeof Pagination>;
