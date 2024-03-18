import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import ArticleImage from "@/components/DataDisplay/ArticleImage";

const Template: StoryFn<typeof ArticleImage> = (args) => (
  <Stack spacing={2} height="100%" alignItems="center" justifyContent="center">
    <ArticleImage {...args} />
  </Stack>
);

export const Basic = Template.bind({});

export default {
  component: ArticleImage,
  title: "Components/Data Display/ArticleImage",
} as Meta<typeof ArticleImage>;
