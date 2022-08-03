import { Stack, AvatarGroup, Badge } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "./Avatar";

const src = "https://avatars.githubusercontent.com/u/108873902?v=4";

const TemplateImage: ComponentStory<typeof Avatar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar src={src} sx={{ height: 24, width: 24 }} {...args} />
    <Avatar src={src} {...args} />
    <Avatar src={src} sx={{ height: 56, width: 56 }} {...args} />
  </Stack>
);

const TemplateLetter: ComponentStory<typeof Avatar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar sx={{ height: 24, width: 24 }} {...args}>
      M
    </Avatar>
    <Avatar {...args}>M</Avatar>
    <Avatar sx={{ height: 56, width: 56 }} {...args}>
      M
    </Avatar>
  </Stack>
);

const TemplateGrouped: ComponentStory<typeof Avatar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <AvatarGroup max={4}>
      <Avatar alt="Mickaël Austoni" src={src} {...args} />
      <Avatar alt="Lorem Ipsum" src={src} {...args} />
      <Avatar alt="Lorem Ipsum" src={src} {...args} />
      <Avatar alt="Lorem Ipsum" src={src} {...args} />
      <Avatar alt="Lorem Ipsum" src={src} {...args} />
    </AvatarGroup>
  </Stack>
);

const TemplateBadge: ComponentStory<typeof Avatar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Badge
      overlap="circular"
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      badgeContent={<Avatar src={src} sx={{ height: 20, width: 20 }} {...args} />}
    >
      <Avatar alt="Travis Howard" src={src} {...args} />
    </Badge>
  </Stack>
);

export const Image = TemplateImage.bind({});
Image.args = {};

export const ImageSquare = TemplateImage.bind({});
ImageSquare.args = {
  variant: "square",
};

export const ImageRounded = TemplateImage.bind({});
ImageRounded.args = {
  variant: "rounded",
};

export const Letter = TemplateLetter.bind({});
Letter.args = {};

export const LetterSquare = TemplateLetter.bind({});
LetterSquare.args = {
  variant: "square",
};

export const LetterRounded = TemplateLetter.bind({});
LetterRounded.args = {
  variant: "rounded",
};

export const Grouped = TemplateGrouped.bind({});
Grouped.args = {};

export const WithBadge = TemplateBadge.bind({});
WithBadge.args = {};

export default {
  component: Avatar,
  title: "Components/Data Display/Avatar",
} as ComponentMeta<typeof Avatar>;
