import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import TextFieldAutosize from "./TextFieldAutosize";

const Template: StoryFn<typeof TextFieldAutosize> = (args) => {
  const [tiny, setTiny] = useState("Tiny text rendered");
  const [xSmall, setXSmall] = useState("xSmall text rendered");
  const [small, setSmall] = useState("Small field value rendered");
  const [medium, setMedium] = useState("Medium sized input rendered");

  return (
    <Stack direction="column" spacing={3} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={(e) => setTiny(e.target.value)} {...args} />
      <TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={(e) => setXSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Small" size="small" value={small} onChange={(e) => setSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={(e) => setMedium(e.target.value)} {...args} />
    </Stack>
  );
};

export const Autosize = Template.bind({});
Autosize.args = {
  variant: "outlined",
};

export const AutosizeEndAdornment = Template.bind({});
AutosizeEndAdornment.args = {
  InputProps: {
    endAdornment: <span style={{ backgroundColor: "blue" }}>USD</span>,
  },
  variant: "outlined",
};

export const AutosizeStartAdornment = Template.bind({});
AutosizeStartAdornment.args = {
  InputProps: {
    startAdornment: <span style={{ backgroundColor: "blue" }}>USD</span>,
  },
  variant: "outlined",
};

export default {
  component: TextFieldAutosize,
  title: "Components/Inputs/TextFieldAutosize",
} as Meta<typeof TextFieldAutosize>;
