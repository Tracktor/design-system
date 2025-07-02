import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import Divider from "./Divider";

const content = (
  <Typography variant="body2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada
    fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
  </Typography>
);

const Template: StoryFn<typeof Divider> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Box width="100%">
      <Divider {...args} />
    </Box>
  </Stack>
);

const TemplateWithText: StoryFn<typeof Divider> = (args) => (
  <Box display="flex" justifyContent="center">
    <Box maxWidth={500} sx={{ border: "solid 1px", borderColor: "divider", borderRadius: 2, p: 2 }}>
      {content}
      <Divider {...args}>CENTER</Divider>
      {content}
      <Divider textAlign="left" {...args}>
        LEFT
      </Divider>
      {content}
      <Divider textAlign="right" {...args}>
        RIGHT
      </Divider>
      {content}
      <Divider {...args}>
        <Chip label="CHIP" />
      </Divider>
      {content}
    </Box>
  </Box>
);

const TemplateVertical: StoryFn<typeof Divider> = (args) => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100%">
    <Box maxWidth={500} sx={{ border: "solid 1px", borderColor: "divider", borderRadius: 2, p: 2 }}>
      <Grid container>
        <Grid size="grow">{content}</Grid>
        <Divider orientation="vertical" flexItem {...args}>
          VERTICAL
        </Divider>
        <Grid size="grow">{content}</Grid>
      </Grid>
    </Box>
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {};

export const WithText = TemplateWithText.bind({});
WithText.args = {};

export const Vertical = TemplateVertical.bind({});
Vertical.args = {};

export default {
  component: Divider,
  title: "Components/Data Display/Divider",
} as Meta<typeof Divider>;
