import { AlertTitle, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import Alert from "./Alert";

const Template: StoryFn<typeof Alert> = (args) => (
  <Stack spacing={2} alignItems="stretch" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <Alert {...args}>
      This is an <strong>default</strong> severity alert — check it out!
    </Alert>
    <Alert severity="error" {...args}>
      This is an <strong>error</strong> severity alert — check it out!
    </Alert>
    <Alert severity="warning" {...args}>
      This is a <strong>warning</strong> severity alert — check it out!
    </Alert>
    <Alert severity="info" {...args}>
      This is an <strong>info</strong> severity alert — check it out!
    </Alert>
    <Alert severity="success" {...args}>
      This is a <strong>success</strong> severity alert — check it out!
    </Alert>
    <Alert severity="primary" {...args}>
      This is a <strong>primary</strong> severity alert — check it out!
    </Alert>
    <Alert severity="secondary" {...args}>
      This is a <strong>secondary</strong> severity alert — check it out!
    </Alert>
  </Stack>
);

const TemplateWithTitle: StoryFn<typeof Alert> = (args) => (
  <Stack spacing={2} alignItems="stretch" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <Alert {...args}>
      <AlertTitle>Default</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
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
    <Alert severity="primary" {...args}>
      <AlertTitle>Primary</AlertTitle>
      This is a primary alert — <strong>check it out!</strong>
    </Alert>
    <Alert severity="secondary" {...args}>
      <AlertTitle>Primary</AlertTitle>
      This is a secondary alert — <strong>check it out!</strong>
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
} as Meta<typeof Alert>;
