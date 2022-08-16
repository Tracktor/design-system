import { Box, Stack } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Skeleton from "./Skeleton";

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
    <Skeleton variant="rectangular" {...args} />
  </Stack>
);

const AnimationTemplate: ComponentStory<typeof Skeleton> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
    <Box sx={{ width: 300 }}>
      <Skeleton {...args} />
      <Skeleton animation="wave" {...args} />
      <Skeleton animation={false} {...args} />
    </Box>
  </Stack>
);

const PulsateTemplate: ComponentStory<typeof Skeleton> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
    <Box sx={{ width: 300 }}>
      <Skeleton variant="rectangular" width={300} height={118} {...args} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton {...args} />
        <Skeleton width="60%" {...args} />
      </Box>
    </Box>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  height: 100,
  width: 200,
};

export const Text = Template.bind({});
Text.args = {
  sx: {},
  variant: "text",
  width: 200,
};

export const Circular = Template.bind({});
Circular.args = {
  height: 60,
  variant: "circular",
  width: 60,
};

export const Rectangular = Template.bind({});
Rectangular.args = {
  height: 60,
  variant: "rectangular",
  width: 200,
};

export const Rounded = Template.bind({});
Rounded.args = {
  height: 60,
  variant: "rounded",
  width: 200,
};

export const Animation = AnimationTemplate.bind({});
Animation.args = {};

export const Pulsate = PulsateTemplate.bind({});
Pulsate.args = {};

export default {
  component: Skeleton,
  title: "Components/Feedback/Skeleton",
} as ComponentMeta<typeof Skeleton>;
