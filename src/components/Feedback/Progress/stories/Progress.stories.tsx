import { Box, Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import CircularProgress from "./CircularProgress";
import LinearProgress from "./LinearProgress";

const Template: StoryFn<typeof CircularProgress> = (args) => (
  <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
    <Box sx={{ display: "flex" }}>
      <CircularProgress {...args} />
    </Box>
  </Stack>
);

const CircularLabelTemplate: StoryFn<typeof CircularProgress> = (args) => (
  <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
    <Box sx={{ display: "inline-flex", position: "relative" }}>
      <CircularProgress variant="determinate" value={50} {...args} />
      <Box
        sx={{
          alignItems: "center",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          left: 0,
          position: "absolute",
          right: 0,
          top: 0,
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          50%
        </Typography>
      </Box>
    </Box>
  </Stack>
);

const ColorTemplate: StoryFn<typeof CircularProgress> = (args) => (
  <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
    <CircularProgress color="primary" {...args} />
    <CircularProgress color="secondary" {...args} />
    <CircularProgress color="success" {...args} />
    <CircularProgress color="info" {...args} />
    <CircularProgress color="warning" {...args} />
    <CircularProgress color="inherit" {...args} />
  </Stack>
);

const LinearTemplate: StoryFn<typeof LinearProgress> = (args) => (
  <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
    <Box sx={{ width: "100%" }}>
      <LinearProgress {...args} />
    </Box>
  </Stack>
);

const LinearColorTemplate: StoryFn<typeof LinearProgress> = (args) => (
  <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
    <Box sx={{ width: "100%" }}>
      <LinearProgress color="secondary" {...args} />
    </Box>
    <Box sx={{ width: "100%" }}>
      <LinearProgress color="success" {...args} />
    </Box>
    <Box sx={{ width: "100%" }}>
      <LinearProgress color="inherit" {...args} />
    </Box>
  </Stack>
);

export const Circular = Template.bind({});
Circular.args = {};

export const CircularColor = ColorTemplate.bind({});
CircularColor.args = {};

export const CircularWithProgress = CircularLabelTemplate.bind({});
CircularWithProgress.args = {};

export const CircularSize = Template.bind({});
CircularSize.args = {
  size: 100,
};

export const Linear = LinearTemplate.bind({});
Linear.args = {};

export const LinearColor = LinearColorTemplate.bind({});
LinearColor.args = {};

export default {
  component: CircularProgress,
  title: "Components/Feedback/Progress",
} as Meta<typeof LinearProgress | typeof CircularProgress>;
