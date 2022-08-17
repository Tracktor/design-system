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
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Underline = UnderlineTemplate.bind({});
Underline.args = {};

export default {
  component: Link,
  title: "Components/Navigation/Link",
} as ComponentMeta<typeof Link>;
