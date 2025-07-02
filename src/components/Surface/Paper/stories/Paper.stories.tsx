import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import Paper from "./Paper";

const Template: StoryFn<typeof Paper> = (args) => (
  <Stack
    sx={{
      "& > :not(style)": {
        height: 128,
        m: 1,
        width: 128,
      },
    }}
    direction="row"
    height="100%"
    justifyContent="center"
    alignItems="center"
  >
    <Paper elevation={0} {...args} />
    <Paper {...args} />
    <Paper elevation={3} {...args} />
  </Stack>
);

const ElevationTemplate: StoryFn<typeof Paper> = (args) => (
  <Stack
    sx={{
      "& > :not(style)": {
        height: 128,
        m: 1,
        width: 128,
      },
    }}
    direction="row"
    height="100%"
    justifyContent="center"
    alignItems="center"
  >
    {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
      <Paper key={elevation} elevation={elevation} {...args} />
    ))}
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Square = Template.bind({});
Square.args = {
  square: true,
};

export const Elevation = ElevationTemplate.bind({});
Elevation.args = {};

export default {
  component: Paper,
  title: "Components/Surface/Paper",
} as Meta<typeof Paper>;
