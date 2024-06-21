import { Box, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import HasPermission from "../HasPermission";

const Template: StoryFn<typeof HasPermission> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>
);

export const IfWeHavePermission = Template.bind({});
IfWeHavePermission.args = {
  additionalPermissions: ["test"],
  name: "test",
};

export const IfWeHaveNotPermission = Template.bind({});
IfWeHaveNotPermission.args = {};

export const WithFallBack = Template.bind({});
WithFallBack.args = {
  fallback: (
    <code>
      <Box p={2}>If user has not permission, we display this fallback.</Box>
    </code>
  ),
};

export default {
  component: HasPermission,
  title: "Components/Utils/HasPermission",
} as Meta<typeof HasPermission>;
