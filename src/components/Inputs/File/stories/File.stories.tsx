import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import Button from "@/components/Inputs/Button";
import File from "@/components/Inputs/File";

const Template: StoryFn<typeof File> = (args) => (
  <Stack
    spacing={2}
    height="100%"
    alignItems="center"
    justifyContent="center"
    component="form"
    onSubmit={(e) => {
      e.preventDefault();
      // eslint-disable-next-line no-alert
      alert("Submitted");
    }}
  >
    <File size="small" {...args} />
    <File size="medium" {...args} />
    {args?.required && (
      <Button type="submit" variant="contained">
        Submit
      </Button>
    )}
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  label: "Ajouter une photo ou un fichier",
};

export const FileMultiple = Template.bind({});
FileMultiple.args = {
  label: "Ajouter une photo ou un fichier",
  multiple: true,
};

export const Required = Template.bind({});
Required.args = {
  label: "Ajouter une photo ou un fichier",
  required: true,
};

export const WithLabelAndHelperText = Template.bind({});
WithLabelAndHelperText.args = {
  helperText: "SVG, PNG, JPG or GIF (max. 3MB)",
  label: "Ajouter une photo ou un fichier",
};

export const DirectionRow = Template.bind({});
DirectionRow.args = {
  label: "Ajouter une photo ou un fichier",
  variant: "horizontal",
};

export const DirectionRowMultiple = Template.bind({});
DirectionRowMultiple.args = {
  label: "Ajouter une photo ou un fichier",
  multiple: true,
  variant: "horizontal",
};

export const WithError = Template.bind({});
WithError.args = {
  error: true,
  helperText: "Fichier invalide",
  label: "Ajouter une photo ou un fichier",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  helperText: "SVG, PNG, JPG or GIF (max. 3MB)",
  label: "Ajouter une photo ou un fichier",
};

export default {
  component: File,
  title: "Components/Inputs/File",
} as Meta<typeof File>;
