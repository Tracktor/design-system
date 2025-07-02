import { Box, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import Slider from "./Slider";

const Template: StoryFn<typeof Slider> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Box width={250}>
      <Slider defaultValue={30} aria-label="Disabled slider" {...args} />
    </Box>
    <Box width={250}>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" {...args} />
    </Box>
  </Stack>
);

const TemplateRange: StoryFn<typeof Slider> = (args) => {
  const [value, setValue] = useState<number[]>([20, 40]);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Box width={250}>
        <Slider defaultValue={30} aria-label="Disabled slider" value={value} onChange={handleChange} {...args} />
      </Box>
      <Box width={250}>
        <Slider disabled defaultValue={30} aria-label="Disabled slider" value={[20, 40]} {...args} />
      </Box>
    </Stack>
  );
};
export const ContinuousSliders = Template.bind({});
ContinuousSliders.args = {};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const DiscreteSliders = Template.bind({});
DiscreteSliders.args = {
  marks: true,
  max: 100,
  min: 10,
  step: 10,
  valueLabelDisplay: "auto",
};

export const RangeSliders = TemplateRange.bind({});
RangeSliders.args = {};

export default {
  component: Slider,
  title: "Components/Inputs/Slider",
} as Meta<typeof Slider>;
