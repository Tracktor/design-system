import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, SelectChangeEvent, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import Select from "./Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Template: StoryFn<typeof Select> = (args) => {
  const [age, setAge] = useState("");
  const { variant } = args;

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl sx={{ width: 150 }}>
        <InputLabel id="demo-simple-select-label-xsmall" size="xSmall" variant={variant}>
          Age (xSmall)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (xSmall)" onChange={handleChange} size="xSmall" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-simple-select-label-small" size="small" variant={variant}>
          Age (small)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (small)" onChange={handleChange} size="small" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-simple-select-label" variant={variant}>
          Age
        </InputLabel>
        <Select labelId="demo-simple-select-label" value={age} label="Age" onChange={handleChange} {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

const TemplateText: StoryFn<typeof Select> = (args) => {
  const [age, setAge] = useState("20");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl>
        <Select size="small" value={age} label="Age" onChange={handleChange} {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

const TemplateCheckmarks: StoryFn<typeof Select> = (args) => {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          {...args}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
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

export const Text = TemplateText.bind({});
Text.args = {
  disableUnderline: true,
  variant: "standard",
};

export const Checkmarks = TemplateCheckmarks.bind({});
Checkmarks.args = {};

export default {
  component: Select,
  title: "Components/Inputs/Select",
} as Meta<typeof Select>;
