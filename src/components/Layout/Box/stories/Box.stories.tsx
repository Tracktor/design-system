import { Stack } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Box from "./Box";

const Template: ComponentStory<typeof Box> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <Box
      sx={{
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
        backgroundColor: "primary.dark",
        height: 150,
        width: 150,
      }}
      {...args}
    />
  </Stack>
);

const TemplateDashed: ComponentStory<typeof Box> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <Box component="span" sx={{ border: "1px dashed grey", borderColor: "primary.main", height: 150, width: 150 }} {...args} />
  </Stack>
);

export const PrimaryBackground = Template.bind({});
PrimaryBackground.args = {};

export const Dashed = TemplateDashed.bind({});
Dashed.args = {};

export default {
  component: Box,
  title: "Components/Layout/Box",
} as ComponentMeta<typeof Box>;
