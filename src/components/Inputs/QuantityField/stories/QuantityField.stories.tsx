import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import QuantityField from "../QuantityField";

const Template: StoryFn<typeof QuantityField> = (args) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <QuantityField label="Small" size="small" value={quantity} setValue={setQuantity} {...args} />
      <QuantityField label="Medium" size="medium" value={quantity} setValue={setQuantity} {...args} />
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export default {
  component: QuantityField,
  title: "Components/Inputs/QuantityField",
} as Meta<typeof QuantityField>;
