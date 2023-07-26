import { AccordionDetails, AccordionSummary, Stack, Typography, useTheme } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import Accordion from "./Accordion";

const ArrowIcon = () => {
  const { palette } = useTheme();

  return (
    <svg width="20" height="20" x="0" y="0" viewBox="0 0 128 128">
      <g>
        <path
          d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"
          fill={palette.text.primary}
        />
      </g>
    </svg>
  );
};

const Template: StoryFn<typeof Accordion> = (args) => (
  <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>
);

const TemplateRight: StoryFn<typeof Accordion> = (args) => (
  <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{ textAlign: "right" }}>
        <Typography variant="h6" width="100%" align="right" sx={{ textDecoration: "underline" }}>
          Accordion 1
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography variant="h6" width="100%" align="right" sx={{ textDecoration: "underline" }}>
          Accordion 2
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography variant="h6" width="100%" align="right" sx={{ textDecoration: "underline" }}>
          Disabled Accordion
        </Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Square = Template.bind({});
Square.args = {
  square: true,
};

export const SquareWithNoElevation = Template.bind({});
SquareWithNoElevation.args = {
  elevation: 0,
  square: true,
};

export const DisableGutters = Template.bind({});
DisableGutters.args = {
  disableGutters: true,
};

export const WithoutDivider = Template.bind({});
WithoutDivider.args = {
  disableGutters: true,
  elevation: 0,
  square: true,
  sx: {
    "&:before": {
      display: "none",
    },
  },
};

export const AlignRight = TemplateRight.bind({});
AlignRight.args = {};

export default {
  component: Accordion,
  title: "Components/Surface/Accordion",
} as Meta<typeof Accordion>;
