import { Stack } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "./Link";

const Template: ComponentStory<typeof Link> = () => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Link>Basic</Link>
    <Link color="inherit">color=&quot;inherit&quot;</Link>
    <Link variant="body2">variant=&quot;body2&quot;</Link>
  </Stack>
);

const UnderlineTemplate: ComponentStory<typeof Link> = () => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Link underline="none">underline=&quot;none&quot;</Link>
    <Link underline="hover">underline=&quot;hover&quot;</Link>
    <Link underline="always">underline=&quot;always&quot;</Link>
    <Link underline="always">underline=&quot;always&quot;</Link>
  </Stack>
);

const VariantTemplate: ComponentStory<typeof Link> = () => (
  <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Link variant="h1">h1</Link>
    <Link variant="h2">h2</Link>
    <Link variant="h3">h3</Link>
    <Link variant="h4">h4</Link>
    <Link variant="h5">h5</Link>
    <Link variant="h6">h6</Link>
    <Link variant="subtitle1">subtitle1</Link>
    <Link variant="subtitle2">subtitle2</Link>
    <Link variant="body1">body1</Link>
    <Link variant="body2">body2</Link>
    <Link variant="button">button</Link>
    <Link variant="caption">caption</Link>
    <Link variant="overline">overline</Link>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Underline = UnderlineTemplate.bind({});
Underline.args = {};

export const Variant = VariantTemplate.bind({});
Underline.args = {};

export default {
  component: Link,
  title: "Components/Navigation/Link",
} as ComponentMeta<typeof Link>;
