import { Box, Divider, Paper } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import Stack from "./Stack";

const PaperStyle = {
  p: 1,
  textAlign: "center",
};

const Template: StoryFn<typeof Stack> = (args) => (
  <Box alignItems="center" justifyContent="center" height="100%" display="flex">
    <Stack spacing={2} {...args}>
      <Paper variant="outlined" sx={PaperStyle}>
        Item 1
      </Paper>
      <Paper variant="outlined" sx={PaperStyle}>
        Item 2
      </Paper>
      <Paper variant="outlined" sx={PaperStyle}>
        Item 3
      </Paper>
    </Stack>
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Direction = Template.bind({});
Direction.args = {
  direction: "row",
};
Direction.argTypes = {
  direction: {
    control: { type: "radio" },
    options: ["row", "column"],
  },
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  direction: "row",
  divider: <Divider orientation="vertical" flexItem />,
};

export const ResponsiveValue = Template.bind({});
ResponsiveValue.args = {
  direction: { sm: "row", xs: "column" },
  spacing: { md: 4, sm: 2, xs: 1 },
};

export default {
  component: Stack,
  title: "Components/Layout/Stack",
} as Meta<typeof Stack>;
