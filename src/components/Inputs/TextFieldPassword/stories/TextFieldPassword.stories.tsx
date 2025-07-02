import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import TextFieldPassword from "../TextFieldPassword";

const Template: StoryFn<typeof TextFieldPassword> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <TextFieldPassword id="xSmall" label="xSmall" size="xSmall" {...args} />
    <TextFieldPassword id="small" label="Small" size="small" {...args} />
    <TextFieldPassword id="medium" label="Medium" size="medium" {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  variant: "outlined",
};

export default {
  component: TextFieldPassword,
  title: "Components/Inputs/TextFieldPassword",
} as Meta<typeof TextFieldPassword>;
