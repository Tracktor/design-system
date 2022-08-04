import { Stack, Typography } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import Rating from "./Rating";

const Template: ComponentStory<typeof Rating> = (args) => {
  const [value, setValue] = useState<null | number>(2);

  return (
    <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        {...args}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly {...args} />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled {...args} />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} {...args} />
    </Stack>
  );
};

const TemplatePrecision: ComponentStory<typeof Rating> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Rating name="half-rating" defaultValue={2.5} precision={0.5} {...args} />
    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly {...args} />
  </Stack>
);

const TemplateSizes: ComponentStory<typeof Rating> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Rating name="size-small" defaultValue={2} size="small" {...args} />
    <Rating name="size-medium" defaultValue={2} {...args} />
    <Rating name="size-large" defaultValue={2} size="large" {...args} />
  </Stack>
);

export const Size = Template.bind({});
Size.args = {};

export const Precision = TemplatePrecision.bind({});
Precision.args = {};

export const Sizes = TemplateSizes.bind({});
Sizes.args = {};

export default {
  component: Rating,
  title: "Components/Inputs/Rating",
} as ComponentMeta<typeof Rating>;
