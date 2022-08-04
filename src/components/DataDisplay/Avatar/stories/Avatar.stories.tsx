import { Stack, AvatarGroup, Badge } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "./Avatar";

const avatarSrc = "https://avatars.githubusercontent.com/u/16801167?s=200&v=4";

const TemplateImage: ComponentStory<typeof Avatar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Avatar src={avatarSrc} sx={{ height: 24, width: 24 }} {...args} />
    <Avatar src={avatarSrc} {...args} />
    <Avatar src={avatarSrc} sx={{ height: 56, width: 56 }} {...args} />
  </Stack>
);

const TemplateLetter: ComponentStory<typeof Avatar> = (args) => (
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

const TemplateGrouped: ComponentStory<typeof Avatar> = (args) => (
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

const TemplateBadge: ComponentStory<typeof Avatar> = (args) => (
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
