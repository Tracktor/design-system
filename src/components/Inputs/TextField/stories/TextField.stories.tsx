import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import TextField from "./TextField";

const Template: StoryFn<typeof TextField> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <TextField id="tiny" label="Tiny" size="tiny" {...args} />
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

export const DateField = Template.bind({});
DateField.args = {
  label: "",
  type: "date",
};

export const Time = Template.bind({});
Time.args = {
  label: "",
  type: "time",
};

const TemplateAutoWidth: StoryFn<typeof TextField> = (args) => {
  const [tiny, setTiny] = useState("Tiny");
  const [xSmall, setXSmall] = useState("xSmall text");
  const [small, setSmall] = useState("Small field value");
  const [medium, setMedium] = useState("Medium sized input");

  return (
    <Stack direction="column" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <TextField label="Tiny" size="tiny" value={tiny} onChange={(e) => setTiny(e.target.value)} {...args} />
      <TextField label="xSmall" size="xSmall" value={xSmall} onChange={(e) => setXSmall(e.target.value)} {...args} />
      <TextField label="Small" size="small" value={small} onChange={(e) => setSmall(e.target.value)} {...args} />
      <TextField label="Medium" size="medium" value={medium} onChange={(e) => setMedium(e.target.value)} {...args} />
    </Stack>
  );
};

export const AutoSize = TemplateAutoWidth.bind({});
AutoSize.args = {
  autosize: true,
};

export default {
  component: TextField,
  title: "Components/Inputs/TextField",
} as Meta<typeof TextField>;
