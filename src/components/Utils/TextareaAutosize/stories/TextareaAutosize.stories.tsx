import { Box } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import TextareaAutosize from "./TextareaAutosize";

const Template: ComponentStory<typeof TextareaAutosize> = (args) => (
  <Box display="flex" alignItems="center" justifyContent="center" height="100%">
    <TextareaAutosize aria-label="empty textarea" placeholder="Placeholder..." style={{ width: 200 }} {...args} />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {};

export const MinRows = Template.bind({});
MinRows.args = {
  minRows: 3,
};

export default {
  component: TextareaAutosize,
  title: "Components/Utils/TextareaAutosize",
} as ComponentMeta<typeof TextareaAutosize>;
