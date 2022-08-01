import { AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Accordion from "./Accordion";

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon="+" aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon="+" aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon="+" aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  variant: "elevation",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Square = Template.bind({});
Square.args = {
  square: true,
};

export default {
  component: Accordion,
  title: "Components/Surface/Accordion",
} as ComponentMeta<typeof Accordion>;
