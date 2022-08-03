import { AlertTitle, Stack } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "./Alert";

const Template: ComponentStory<typeof Alert> = (args) => (
  <Stack spacing={2} alignItems="stretch" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <Alert severity="error" {...args}>
      This is an error alert — check it out!
    </Alert>
    <Alert severity="warning" {...args}>
      This is a warning alert — check it out!
    </Alert>
    <Alert severity="info" {...args}>
      This is an info alert — check it out!
    </Alert>
    <Alert severity="success" {...args}>
      This is a success alert — check it out!
    </Alert>
  </Stack>
);

const TemplateWithTitle: ComponentStory<typeof Alert> = (args) => (
  <Stack spacing={2} alignItems="stretch" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <Alert severity="error" {...args}>
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
    <Alert severity="warning" {...args}>
      <AlertTitle>Warning</AlertTitle>
      This is a warning alert — <strong>check it out!</strong>
    </Alert>
    <Alert severity="info" {...args}>
      <AlertTitle>Info</AlertTitle>
      This is an info alert — <strong>check it out!</strong>
    </Alert>
    <Alert severity="success" {...args}>
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
    </Alert>
  </Stack>
);

export const Standard = Template.bind({});
Standard.args = {
  variant: "standard",
};

export const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Square = Template.bind({});
Square.args = {
  square: true,
};

export const WithTitle = TemplateWithTitle.bind({});
WithTitle.args = {};

export default {
  component: Alert,
  title: "Components/Feedback/Alert",
} as ComponentMeta<typeof Alert>;
