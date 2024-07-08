import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { ListAvatar } from "../ListAvatar";
import ArticleImage from "@/components/DataDisplay/ArticleImage";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";

const data = [
  {
    id: 1,
    onClick: () => {},
    subtitle: "With onClick",
    title: "Basic",
  },
  {
    chipColor: "secondary",
    chipLabel: "New",
    id: 2,
    subtitle: "Lorem Ipsum",
    title: "Chip",
  },
  {
    id: 3,
    secondaryAction: <CloseIcon />,
    subtitle: "Lorem Ipsum",
    title: "Secondary action",
  },
  {
    icon: <CloseIcon />,
    id: 4,
    subtitle: "Lorem Ipsum",
    title: "Icon",
  },
  {
    Avatar: <ArticleImage width={40} height={40} />,
    id: 5,
    subtitle: "Lorem Ipsum",
    title: "Custom avatar",
  },
];

const Template: StoryFn<typeof ListAvatar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <ListAvatar data={data} {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: ListAvatar,
  title: "Components/Data Display/ListAvatar",
} as Meta<typeof ListAvatar>;