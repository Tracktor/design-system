import { Link, Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import TimeLine from "@/components/DataDisplay/TimeLine";

const items = [
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
      items={args?.items}
      emptyMessage={args?.emptyMessage}
      containerStyle={{ maxWidth: 400 }}
      variant={args?.variant}
    />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  items,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const EmptyMessage = Template.bind({});
EmptyMessage.args = {
  emptyMessage: "No events to display.",
  items: [],
};

export const CollapseItems = Template.bind({});
CollapseItems.args = {
  items: [
    {
      active: true,
      collapseItems: [
        {
          onClick: () => null,
          subtitle: "First Collapse Item Subtitle",
          title: "First Collapse Item clickable",
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
      title: "Collapse Event",
    },
    ...items,
  ],
};

export const CollapseItemsDefaultOpen = Template.bind({});
CollapseItemsDefaultOpen.args = {
  items: [
    {
      active: true,
      collapseDefaultOpen: true,
      collapseItems: [
        {
          onClick: () => null,
          subtitle: "First Collapse Item Subtitle",
          title: "First Collapse Item clickable",
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
      title: "Collapse Event",
    },
    ...items,
  ],
};

export const CollapseCustom = Template.bind({});
CollapseCustom.args = {
  items: [
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
    ...items,
  ],
};

export const VariantHover = Template.bind({});
VariantHover.args = {
  items: [
    {
      Action: <Link color="inherit">Action</Link>,
      active: true,
      collapseItems: [
        {
          onClick: () => null,
          subtitle: "First Collapse Item Subtitle",
          title: "First Collapse Item clickable",
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
      title: "Collapse Event",
    },
    ...items,
  ],
  variant: "hover",
};

export default {
  component: TimeLine,
  title: "Components/Data Display/TimeLine",
} as Meta<typeof TimeLine>;
