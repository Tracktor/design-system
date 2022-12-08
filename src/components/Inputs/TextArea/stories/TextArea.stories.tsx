import { Stack } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import TextArea from "../TextArea";

const Template: ComponentStory<typeof TextArea> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <TextArea placeholder="Saisissez votre text" {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: TextArea,
  title: "Components/Inputs/TextArea",
} as ComponentMeta<typeof TextArea>;
