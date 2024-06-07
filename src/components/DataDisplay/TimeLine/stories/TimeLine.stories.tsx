import { Link, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import TimeLine from "@/components/DataDisplay/TimeLine";

const data = [
  {
    Action: <Link color="inherit">Action</Link>,
    active: true,
    isLastElement: false,
    key: "1",
    subtitle: "First Event Subtitle",
    tag: {
      color: "primary",
      label: "First Tag",
    },
    title: "First Event",
  } as const,
  {
    active: false,
    Footer: "Footer",
    isLastElement: false,
    key: "2",
    subtitle: "Second Event Subtitle",
    tag: {
      color: "primary",
      label: "Second Tag",
    },
    title: "Second Event",
  } as const,
  {
    Action: <Link color="inherit">Action</Link>,
    active: false,
    isLastElement: true,
    key: "3",
    subtitle: "Third Event Subtitle",
    tag: {
      color: "primary",
      label: "Third Tag",
    },
    title: "Third Event",
  } as const,
];

const Template: StoryFn<typeof TimeLine> = (args) => (
  <Stack spacing={2} height="100%" alignItems="center" justifyContent="center">
    <TimeLine isLoading={args?.isLoading} data={args?.data} emptyMessage={args?.emptyMessage} containerStyle={{ maxWidth: 400 }} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  data,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const EmptyMessage = Template.bind({});
EmptyMessage.args = {
  data: [],
  emptyMessage: "No events to display.",
};

export default {
  component: TimeLine,
  title: "Components/Data Display/TimeLine",
} as Meta<typeof TimeLine>;
