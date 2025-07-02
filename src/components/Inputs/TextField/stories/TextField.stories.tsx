import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import TextField from "./TextField";

const Template: StoryFn<typeof TextField> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <TextField id="xSmall" label="xSmall" size="xSmall" {...args} />
    <TextField id="small" label="Small" size="small" {...args} />
    <TextField id="medium" label="Medium" size="medium" {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  variant: "outlined",
};

export const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
};

export const Standard = Template.bind({});
Standard.args = {
  variant: "standard",
};

export const Search = Template.bind({});
Search.args = {
  type: "search",
};

export const TypeFile = Template.bind({});
TypeFile.args = {
  label: "",
  type: "file",
};

export const TypeFileWithHelperText = Template.bind({});
TypeFileWithHelperText.args = {
  helperText: "Helper text",
  label: "",
  type: "file",
};

export const Multiline = Template.bind({});
Multiline.args = {
  minRows: 3,
  multiline: true,
};

export const MultilineFilled = Template.bind({});
MultilineFilled.args = {
  minRows: 3,
  multiline: true,
  variant: "filled",
};

export const Date = Template.bind({});
Date.args = {
  label: "",
  type: "date",
};

export const Time = Template.bind({});
Time.args = {
  label: "",
  type: "time",
};

export default {
  component: TextField,
  title: "Components/Inputs/TextField",
} as Meta<typeof TextField>;
