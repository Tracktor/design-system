import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import TextField from "./TextField";

const Template: StoryFn<typeof TextField> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <TextField id="small" label="Small" size="small" {...args} />
    <TextField id="medium" label="Medium" size="medium" {...args} />
  </Stack>
);

const TemplateFile: StoryFn<typeof TextField> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <TextField size="small" {...args} />
    <TextField size="medium" {...args} />
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

export const File = Template.bind({});
File.args = {
  label: "",
  type: "file",
};

export const FileWithLabel = TemplateFile.bind({});
FileWithLabel.args = {
  label: "Ajouter une photo ou un fichier",
  type: "file",
};

export const FileWithLabelDirectionColumn = TemplateFile.bind({});
FileWithLabelDirectionColumn.args = {
  dir: "column",
  label: "Ajouter une photo ou un fichier",
  type: "file",
};

export const FileLabelDirectionColumnRequired = TemplateFile.bind({});
FileLabelDirectionColumnRequired.args = {
  dir: "column",
  label: "Ajouter une photo ou un fichier",
  required: true,
  type: "file",
};

export const FileWithHelperText = Template.bind({});
FileWithHelperText.args = {
  helperText: "Helper text",
  label: "",
  type: "file",
};

export const FileWithLabelAndHelperText = Template.bind({});
FileWithLabelAndHelperText.args = {
  helperText: "Helper text",
  label: "Ajouter une photo ou un fichier",
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

export default {
  component: TextField,
  title: "Components/Inputs/TextField",
} as Meta<typeof TextField>;
