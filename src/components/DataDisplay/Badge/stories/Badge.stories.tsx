import { Box, Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import Badge from "./Badge";

const Template: StoryFn<typeof Badge> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Badge badgeContent={4} {...args}>
      <Typography variant="h4">✉️</Typography>
    </Badge>
  </Stack>
);

const TemplateCircle: StoryFn<typeof Badge> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Badge {...args}>
      <Box component="span" sx={{ backgroundColor: "secondary.main", borderRadius: "50%", height: 40, width: 40 }} />
    </Badge>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  badgeContent: 4,
  color: "primary",
};

export const Color = Template.bind({});
Color.args = {
  badgeContent: 13,
  color: "secondary",
};

export const Zero = Template.bind({});
Zero.args = {
  badgeContent: 0,
  color: "primary",
  showZero: true,
};

export const ZeroHidden = Template.bind({});
ZeroHidden.args = {
  badgeContent: 0,
  color: "primary",
  showZero: false,
};

export const Max = Template.bind({});
Max.args = {
  badgeContent: 1000,
  color: "primary",
  max: 99,
};

export const Dot = Template.bind({});
Dot.args = {
  color: "primary",
  variant: "dot",
};

export const Alignment = Template.bind({});
Alignment.args = {
  anchorOrigin: { horizontal: "right", vertical: "top" },
  color: "primary",
};

export const BadgeOverlap = TemplateCircle.bind({});
BadgeOverlap.args = {
  badgeContent: " ",
  color: "primary",
  overlap: "circular",
};

export default {
  argTypes: {
    anchorOrigin: {
      mapping: {
        BottomLeft: { horizontal: "left", vertical: "bottom" },
        BottomRight: { horizontal: "right", vertical: "bottom" },
        TopLeft: { horizontal: "left", vertical: "top" },
        TopRight: { horizontal: "right", vertical: "top" },
      },
      options: ["BottomLeft", "BottomRight", "TopLeft", "TopRight"],
    },
    overlap: {
      control: { type: "radio" },
      options: ["circular", "rectangular"],
    },
  },
  component: Badge,
  title: "Components/Data Display/Badge",
} as Meta<typeof Badge>;
