import { Stack } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import TextField from "./TextField";

const Template: ComponentStory<typeof TextField> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <TextField id="outlined-basic" label="Small" size="small" {...args} />
    <TextField id="outlined-basic" label="Medium" size="medium" {...args} />
  </Stack>
);

const TemplatePicture: ComponentStory<typeof TextField> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <TextField id="outlined-basic" label="Outlined" className="picture" {...args} />
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

export const TypeFilePicture = TemplatePicture.bind({});
TypeFilePicture.args = {
  label: "Ajouter une photo ou un fichier",
  type: "file",
};

export default {
  component: TextField,
  title: "Components/Inputs/TextField",
} as ComponentMeta<typeof TextField>;
