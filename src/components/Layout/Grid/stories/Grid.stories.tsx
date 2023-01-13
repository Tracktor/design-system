import { Box, Paper } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "./Grid";

const PaperStyle = {
  p: 1,
  textAlign: "center",
};

const Template: ComponentStory<typeof Grid> = (args) => (
  <Box width="100%" display="flex" alignItems="center" justifyContent="center" height="100%">
    <Grid container {...args}>
      <Grid item xs={8}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=8
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=4
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=4
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=8
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

const MultipleBreakpointTemplate: ComponentStory<typeof Grid> = (args) => (
  <Box width="100%" display="flex" alignItems="center" justifyContent="center" height="100%">
    <Grid container {...args}>
      <Grid item xs={6} md={8}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=6 md=8
        </Paper>
      </Grid>
      <Grid item xs={6} md={4}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=6 md=4
        </Paper>
      </Grid>
      <Grid item xs={6} md={4}>
        <Paper variant="outlined" sx={PaperStyle}>
          s=6 md=4
        </Paper>
      </Grid>
      <Grid item xs={6} md={8}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=6 md=8
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

const RowAndColumnSpacingTemplate: ComponentStory<typeof Grid> = (args) => (
  <Box width="100%" display="flex" alignItems="center" justifyContent="center" height="100%">
    <Grid container {...args}>
      <Grid item xs={8}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=8
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=4
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=4
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=8
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

const AutoLayoutTemplate: ComponentStory<typeof Grid> = (args) => (
  <Box width="100%" display="flex" alignItems="center" justifyContent="center" height="100%">
    <Grid container {...args}>
      <Grid item xs>
        <Paper variant="outlined" sx={PaperStyle}>
          xs
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=6
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper variant="outlined" sx={PaperStyle}>
          xs
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

const VariableWidthContentTemplate: ComponentStory<typeof Grid> = (args) => (
  <Box width="100%" display="flex" alignItems="center" justifyContent="center" height="100%">
    <Grid container {...args}>
      <Grid item xs="auto">
        <Paper variant="outlined" sx={PaperStyle}>
          variable width content
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=6
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper variant="outlined" sx={PaperStyle}>
          xs
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

const CustomColumnsNumberTemplate: ComponentStory<typeof Grid> = (args) => (
  <Box width="100%" display="flex" alignItems="center" justifyContent="center" height="100%">
    <Grid container {...args}>
      <Grid item xs={8}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=8
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper variant="outlined" sx={PaperStyle}>
          xs=8
        </Paper>
      </Grid>
    </Grid>
  </Box>
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
} as ComponentMeta<typeof Grid>;
