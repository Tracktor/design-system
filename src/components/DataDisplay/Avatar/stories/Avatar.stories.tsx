import { AvatarGroup, Badge, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import Avatar from "../Avatar";

const avatarSrc = "https://avatars.githubusercontent.com/u/16801167?s=200&v=4";

const TemplateSize: StoryFn<typeof Avatar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar size="small" {...args}>
      S
    </Avatar>
    <Avatar size="medium" {...args}>
      M
    </Avatar>
    <Avatar size="large" {...args}>
      L
    </Avatar>
  </Stack>
);

const TemplateDouble: StoryFn<typeof Avatar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar src={args?.src || avatarSrc} size="small" {...args} />
    <Avatar src={args?.src || avatarSrc} size="medium" {...args} />
    <Avatar src={args?.src || avatarSrc} size="large" {...args} />
  </Stack>
);

const TemplateImage: StoryFn<typeof Avatar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar src={args?.src || avatarSrc} sx={{ height: 24, width: 24 }} {...args} />
    <Avatar src={args?.src || avatarSrc} {...args} />
    <Avatar src={args?.src || avatarSrc} sx={{ height: 56, width: 56 }} {...args} />
  </Stack>
);

const TemplateLetter: StoryFn<typeof Avatar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar sx={{ height: 24, width: 24 }} {...args}>
      T
    </Avatar>
    <Avatar {...args}>T</Avatar>
    <Avatar sx={{ height: 56, width: 56 }} {...args}>
      T
    </Avatar>
  </Stack>
);

const TemplateGrouped: StoryFn<typeof Avatar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <AvatarGroup max={4}>
      <Avatar alt="Tracktor" src={avatarSrc} {...args} />
      <Avatar alt="Tracktor" src={avatarSrc} {...args} />
      <Avatar alt="Tracktor" src={avatarSrc} {...args} />
      <Avatar alt="Tracktor" src={avatarSrc} {...args} />
      <Avatar alt="Tracktor" src={avatarSrc} {...args} />
    </AvatarGroup>
  </Stack>
);

const TemplateBadge: StoryFn<typeof Avatar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Badge
      overlap="circular"
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      badgeContent={<Avatar src={avatarSrc} sx={{ height: 20, width: 20 }} {...args} />}
    >
      <Avatar alt="Travis Howard" src={avatarSrc} {...args} />
    </Badge>
  </Stack>
);

export const Image = TemplateImage.bind({});
Image.args = {};

export const Size = TemplateSize.bind({});
Image.args = {};

export const WithoutImage = TemplateImage.bind({});
WithoutImage.args = {
  src: "null",
};

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

export const Double = TemplateDouble.bind({});
Double.args = {
  secondarySrc: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  src: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
};

export const DoubleRounded = TemplateDouble.bind({});
DoubleRounded.args = {
  secondaryAvatarProps: {
    variant: "rounded",
  },
  secondarySrc: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  src: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
  variant: "rounded",
};

export const DoubleMixed = TemplateDouble.bind({});
DoubleMixed.args = {
  secondarySrc: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  src: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
  variant: "rounded",
};

export default {
  component: Avatar,
  title: "Components/Data Display/Avatar",
} as Meta<typeof Avatar>;
