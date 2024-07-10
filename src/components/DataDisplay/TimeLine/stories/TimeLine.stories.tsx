import { Link, Stack, Typography } from "@mui/material";
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
      color: "secondary",
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
      color: "warning",
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
      color: "info",
      label: "Third Tag",
    },
    title: "Third Event with a very long title that should be truncated",
  } as const,
];

const Template: StoryFn<typeof TimeLine> = (args) => (
  <Stack spacing={2} height="100%" alignItems="center" justifyContent="center">
    <TimeLine
      isLoading={args?.isLoading}
      data={args?.data}
      emptyMessage={args?.emptyMessage}
      containerStyle={{ maxWidth: 400 }}
      variant={args?.variant}
    />
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

export const CollapseItems = Template.bind({});
CollapseItems.args = {
  data: [
    {
      active: true,
      collapseItems: [
        {
          subtitle: "First Collapse Item Subtitle",
          title: "First Collapse Item",
        },
        {
          image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
          subtitle: "Second Collapse Item Subtitle with very long subtitle that should be truncated",
          tag: {
            color: "error",
            label: "Second Tag",
          },
          title: "Second Collapse Item with very long title that should be truncated",
        },
        {
          image: ["https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"],
          subtitle: "Second Collapse Item Subtitle",
          title: "Third Collapse Item",
        },
        {
          image: ["https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"],
          subtitle: "Second Collapse Item Subtitle",
          title: "Fourth Collapse Item",
        },
      ],
      isLastElement: false,
      subtitle: "Second Event Subtitle",
      tag: {
        color: "warning",
        label: "Second Tag",
      },
      title: "Second Event",
    },
    ...data,
  ],
};

export const CollapseCustom = Template.bind({});
CollapseCustom.args = {
  data: [
    {
      active: true,
      Collapse: <Typography>Collapsed content</Typography>,
      Footer: "Footer",
      isLastElement: false,
      subtitle: "Second Event Subtitle",
      tag: {
        color: "warning",
        label: "Second Tag",
      },
      title: "Second Event",
    },
    ...data,
  ],
};

export const VariantHover = Template.bind({});
VariantHover.args = {
  data,
  variant: "hover",
};

export default {
  component: TimeLine,
  title: "Components/Data Display/TimeLine",
} as Meta<typeof TimeLine>;
