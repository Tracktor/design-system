import { Stack } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Skeleton from "./Skeleton";

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
    <Skeleton variant="rectangular" width={210} height={118} {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: Skeleton,
  title: "Components/Feedback/Skeleton",
} as ComponentMeta<typeof Skeleton>;
