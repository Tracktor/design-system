import { Box, Paper, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import Grid from "./Grid";

const PaperStyle = {
  p: 1,
  textAlign: "center",
};

const Template: StoryFn<typeof Grid> = (args) => (
  <Stack width="100%" alignItems="center" justifyContent="center" height="100%" flexDirection="row">
    <Box flex={1}>
      <Grid container {...args}>
        <Grid size={{ xs: 8 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=8
          </Paper>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=4
          </Paper>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=4
          </Paper>
        </Grid>
        <Grid size={{ xs: 8 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=8
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Stack>
);

const MultipleBreakpointTemplate: StoryFn<typeof Grid> = (args) => (
  <Stack width="100%" alignItems="center" justifyContent="center" height="100%" flexDirection="row">
    <Box flex={1}>
      <Grid container {...args}>
        <Grid size={{ md: 8, xs: 6 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=6 md=8
          </Paper>
        </Grid>
        <Grid size={{ md: 4, xs: 6 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=6 md=4
          </Paper>
        </Grid>
        <Grid size={{ md: 4, xs: 6 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            s=6 md=4
          </Paper>
        </Grid>
        <Grid size={{ md: 8, xs: 6 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=6 md=8
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Stack>
);

const RowAndColumnSpacingTemplate: StoryFn<typeof Grid> = (args) => (
  <Stack width="100%" alignItems="center" justifyContent="center" height="100%" flexDirection="row">
    <Box flex={1}>
      <Grid container {...args}>
        <Grid size={{ xs: 8 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=8
          </Paper>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=4
          </Paper>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=4
          </Paper>
        </Grid>
        <Grid size={{ xs: 8 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=8
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Stack>
);

const AutoLayoutTemplate: StoryFn<typeof Grid> = (args) => (
  <Stack width="100%" alignItems="center" justifyContent="center" height="100%" flexDirection="row">
    <Box flex={1}>
      <Grid container {...args}>
        <Grid size="grow">
          <Paper variant="outlined" sx={PaperStyle}>
            xs
          </Paper>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=6
          </Paper>
        </Grid>
        <Grid size="grow">
          <Paper variant="outlined" sx={PaperStyle}>
            xs
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Stack>
);

const VariableWidthContentTemplate: StoryFn<typeof Grid> = (args) => (
  <Stack width="100%" alignItems="center" justifyContent="center" height="100%" flexDirection="row">
    <Box flex={1}>
      <Grid container {...args}>
        <Grid size="auto">
          <Paper variant="outlined" sx={PaperStyle}>
            variable width content
          </Paper>
        </Grid>
        <Grid size={6}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=6
          </Paper>
        </Grid>
        <Grid size="grow">
          <Paper variant="outlined" sx={PaperStyle}>
            xs
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Stack>
);

const CustomColumnsNumberTemplate: StoryFn<typeof Grid> = (args) => (
  <Stack width="100%" alignItems="center" justifyContent="center" height="100%" flexDirection="row">
    <Box flex={1}>
      <Grid container {...args}>
        <Grid size={{ xs: 8 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=8
          </Paper>
        </Grid>
        <Grid size={{ xs: 8 }}>
          <Paper variant="outlined" sx={PaperStyle}>
            xs=8
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  spacing: 2,
};

export const MultipleBreakpoints = MultipleBreakpointTemplate.bind({});
MultipleBreakpoints.args = {
  spacing: 2,
};

export const Spacing = Template.bind({});
Spacing.args = {
  spacing: 2,
};
Spacing.argTypes = {
  spacing: {
    control: { type: "radio" },
    options: [0, 1, 2, 3, 4, 8, 12],
  },
};

export const RowAndColumnSpacing = RowAndColumnSpacingTemplate.bind({});
RowAndColumnSpacing.args = {
  columnSpacing: { md: 3, sm: 2, xs: 1 },
  rowSpacing: 1,
};

export const AutoLayout = AutoLayoutTemplate.bind({});
AutoLayout.args = {
  spacing: 3,
};

export const VariableWidthContent = VariableWidthContentTemplate.bind({});
VariableWidthContent.args = {
  spacing: 3,
};

export const CustomColumnsNumber = CustomColumnsNumberTemplate.bind({});
CustomColumnsNumber.args = {
  columns: 16,
  spacing: 2,
};

export default {
  component: Grid,
  title: "Components/Layout/Grid",
} as Meta<typeof Grid>;
