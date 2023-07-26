import { Box } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import NoSsr from "./NoSsr";

const Template: StoryFn<typeof NoSsr> = (args) => (
  <Box display="flex" alignItems="center" justifyContent="center" height="100%">
    <Box sx={{ bgcolor: "primary.main", color: "primary.contrastText", p: 2 }}>Server and Client</Box>
    <NoSsr {...args}>
      <Box sx={{ bgcolor: "secondary.main", color: "secondary.contrastText", p: 2 }}>Client only</Box>
    </NoSsr>
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: NoSsr,
  title: "Components/Utils/NoSsr",
} as Meta<typeof NoSsr>;
