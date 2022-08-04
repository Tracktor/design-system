import { Box, FormControl, FormControlLabel, FormLabel, RadioGroup } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Radio from "./Radio";

const TemplateVertical: ComponentStory<typeof Radio> = (args) => (
  <Box alignItems="center" justifyContent="center" height="100%" display="flex">
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
        <FormControlLabel value="female" control={<Radio {...args} />} label="Female" />
        <FormControlLabel value="male" control={<Radio {...args} />} label="Male" />
        <FormControlLabel value="other" control={<Radio {...args} />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio {...args} />} label="Disabled" />
      </RadioGroup>
    </FormControl>
  </Box>
);

const TemplateHorizontal: ComponentStory<typeof Radio> = (args) => (
  <Box alignItems="center" justifyContent="center" height="100%" display="flex">
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" row>
        <FormControlLabel value="female" control={<Radio {...args} />} label="Female" />
        <FormControlLabel value="male" control={<Radio {...args} />} label="Male" />
        <FormControlLabel value="other" control={<Radio {...args} />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio {...args} />} label="Disabled" />
      </RadioGroup>
    </FormControl>
  </Box>
);

const TemplateColor: ComponentStory<typeof Radio> = (args) => (
  <Box alignItems="center" justifyContent="center" height="100%" display="flex">
    <Radio defaultChecked color="default" {...args} />
    <Radio defaultChecked color="primary" {...args} />
    <Radio defaultChecked color="secondary" {...args} />
    <Radio defaultChecked color="error" {...args} />
    <Radio defaultChecked color="warning" {...args} />
    <Radio defaultChecked color="info" {...args} />
    <Radio defaultChecked color="success" {...args} />
  </Box>
);

export const Vertical = TemplateVertical.bind({});
Vertical.args = {};

export const Horizontal = TemplateHorizontal.bind({});
Horizontal.args = {};

export const Size = TemplateHorizontal.bind({});
Size.args = {
  sx: { "& .MuiSvgIcon-root": { fontSize: 36 } },
};

export const Color = TemplateColor.bind({});
Color.args = {};

export default {
  component: Radio,
  title: "Components/Inputs/Radio",
} as ComponentMeta<typeof Radio>;
