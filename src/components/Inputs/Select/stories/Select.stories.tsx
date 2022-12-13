import { FormControl, MenuItem, SelectChangeEvent, Stack } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Select from "./Select";
import SelectInputLabel from "@/components/Inputs/SelectInputLabel";

const Template: ComponentStory<typeof Select> = (args) => {
  const [age, setAge] = useState("");
  const { variant } = args;

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl sx={{ width: 200 }}>
        <SelectInputLabel id="demo-simple-select-label-small" size="small" variant={variant}>
          Age (small)
        </SelectInputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (small)" onChange={handleChange} size="small" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ width: 200 }}>
        <SelectInputLabel id="demo-simple-select-label" variant={variant}>
          Age
        </SelectInputLabel>
        <Select labelId="demo-simple-select-label" value={age} label="Age" onChange={handleChange} {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ width: 200 }}>
        <SelectInputLabel id="demo-simple-select-label-large" variant={variant} size="large">
          Age (large)
        </SelectInputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (large)" onChange={handleChange} size="large" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};
export const Basic = Template.bind({});
Basic.args = {
  variant: "outlined",
};

export const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
};

export const Standard = Template.bind({});
Standard.args = {
  variant: "standard",
};

export default {
  component: Select,
  title: "Components/Inputs/Select",
} as ComponentMeta<typeof Select>;
