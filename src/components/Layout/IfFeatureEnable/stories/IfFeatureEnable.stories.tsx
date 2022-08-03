import { Box, Stack } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import IfFeatureEnable from "./IfFeatureEnable";

const Template: ComponentStory<typeof IfFeatureEnable> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <IfFeatureEnable {...args}>
      <code>
        <Box p={2}>If user has feature enable, children is rendered</Box>
      </code>
    </IfFeatureEnable>
  </Stack>
);

export const IfFeature = Template.bind({});
IfFeature.args = {
  features: ["test"],
  name: "test",
};

export const IfNotFeature = Template.bind({});
IfNotFeature.args = {};

export default {
  component: IfFeatureEnable,
  title: "Components/Layout/IfFeatureEnable",
} as ComponentMeta<typeof IfFeatureEnable>;
