import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { ListAvatar } from "../ListAvatar";
import ArticleImage from "@/components/DataDisplay/ArticleImage";
import CheckIcon from "@/components/DataDisplay/Icons/CheckIcon";
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
    <ListAvatar items={data} {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const AlwaysDisplaySecondaryAction = Template.bind({});
AlwaysDisplaySecondaryAction.args = {
  alwaysDisplaySecondaryAction: true,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const WithAction = Template.bind({});
WithAction.args = {
  action: {
    icon: <CheckIcon />,
    title: "Action here !",
  },
};

export default {
  component: ListAvatar,
  title: "Components/Data Display/ListAvatar",
} as Meta<typeof ListAvatar>;
