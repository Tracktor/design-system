import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import ArticleImage from "@/components/DataDisplay/ArticleImage";

const Template: StoryFn<typeof ArticleImage> = (args) => (
  <Stack spacing={2} height="100%" alignItems="center" justifyContent="center">
    <ArticleImage {...args} />
  </Stack>
);

export const Basic = Template.bind({});

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  height: 30,
  width: 30,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const GoodImage = Template.bind({});
GoodImage.args = {
  src: "https://assets-global.website-files.com/62987134cee3f41ed59eeb9d/6374bbba4ceb743933e96083_62b5b7cfafa4af7c9b2acd06_4298-min-p-800.jpeg",
};

export const WrongImage = Template.bind({});
WrongImage.args = {
  src: "wrong-path.jpg",
};

export default {
  component: ArticleImage,
  title: "Components/Data Display/ArticleImage",
} as Meta<typeof ArticleImage>;
