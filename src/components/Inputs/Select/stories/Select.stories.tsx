import { FormControl, InputLabel, MenuItem, SelectChangeEvent, Stack } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import Select from "./Select";

const Template: ComponentStory<typeof Select> = (args) => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange} {...args}>
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

export const Standard = Template.bind({});
Standard.args = {
  variant: "standard",
};
export const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
};

export default {
  component: Select,
  title: "Components/Inputs/Select",
} as ComponentMeta<typeof Select>;
