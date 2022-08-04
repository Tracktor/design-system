import { FormControlLabel, FormGroup, Stack } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Checkbox {...label} defaultChecked {...args} />
    <Checkbox {...label} {...args} />
    <Checkbox {...label} disabled {...args} />
    <Checkbox {...label} disabled checked {...args} />
  </Stack>
);

const TemplateLabel: ComponentStory<typeof Checkbox> = (args) => (
  <Stack alignItems="center" justifyContent="center" height="100%">
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked {...args} />} label="Label" />
      <FormControlLabel disabled control={<Checkbox {...args} />} label="Disabled" />
    </FormGroup>
  </Stack>
);

const TemplateColor: ComponentStory<typeof Checkbox> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Checkbox {...label} defaultChecked {...args} />
    <Checkbox {...label} defaultChecked color="secondary" {...args} />
    <Checkbox {...label} defaultChecked color="info" {...args} />
    <Checkbox {...label} defaultChecked color="success" {...args} />
    <Checkbox {...label} defaultChecked color="warning" {...args} />
    <Checkbox {...label} defaultChecked color="default" {...args} />
    <Checkbox {...label} defaultChecked color="error" {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Label = TemplateLabel.bind({});
Label.args = {};

export const Color = TemplateColor.bind({});
Color.args = {};

export default {
  component: Checkbox,
  title: "Components/Inputs/Checkbox",
} as ComponentMeta<typeof Checkbox>;
