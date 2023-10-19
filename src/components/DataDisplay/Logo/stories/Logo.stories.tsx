import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import Logo from "./Logo";

const Template: StoryFn<typeof Logo> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Logo {...args} />
  </Stack>
);

export const AutoColorFromTheme = Template.bind({});
AutoColorFromTheme.args = {};

export const Black = Template.bind({});
Black.args = {
  color: "black",
  component: "img",
};

export const White = Template.bind({});
White.args = {
  color: "white",
  component: "img",
};

export const RenderAsSvgBlack = Template.bind({});
RenderAsSvgBlack.args = {
  color: "black",
  component: "svg",
};

export const RenderAsSvgWhite = Template.bind({});
RenderAsSvgWhite.args = {
  color: "white",
  component: "svg",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  height: 50,
  width: 404,
};

export const Ops = Template.bind({});
Ops.args = {
  variant: "ops",
};

export const OpsBlack = Template.bind({});
OpsBlack.args = {
  color: "black",
  component: "svg",
  variant: "ops",
};

export const Pricing = Template.bind({});
Pricing.args = {
  variant: "pricing",
};

export const PricingBlack = Template.bind({});
PricingBlack.args = {
  color: "black",
  component: "svg",
  variant: "pricing",
};

export const Supplier = Template.bind({});
Supplier.args = {
  variant: "supplier",
};

export const SupplierBlack = Template.bind({});
SupplierBlack.args = {
  color: "black",
  component: "svg",
  variant: "supplier",
};

export default {
  component: Logo,
  title: "Components/Data Display/Logo",
} as Meta<typeof Logo>;
