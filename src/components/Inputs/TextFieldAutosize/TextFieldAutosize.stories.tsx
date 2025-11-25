import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import TextField from "@/components/Inputs/TextField/stories/TextField";
import TextFieldAutosize from "./TextFieldAutosize";

const Template: StoryFn<typeof TextFieldAutosize> = (args) => {
  const [tiny, setTiny] = useState("Tiny");
  const [xSmall, setXSmall] = useState("xSmall text");
  const [small, setSmall] = useState("Small field value");
  const [medium, setMedium] = useState("Medium sized input");

  return (
    <Stack direction="column" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={(e) => setTiny(e.target.value)} {...args} />
      {/*<TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={(e) => setXSmall(e.target.value)} {...args} />*/}
      {/*<TextFieldAutosize label="Small" size="small" value={small} onChange={(e) => setSmall(e.target.value)} {...args} />*/}
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={(e) => setMedium(e.target.value)} {...args} />
    </Stack>
  );
};

export const Autosize = Template.bind({});
Autosize.args = {
  variant: "outlined",
};

export default {
  component: TextFieldAutosize,
  title: "Components/Inputs/TextFieldAutosize",
} as Meta<typeof TextFieldAutosize>;
