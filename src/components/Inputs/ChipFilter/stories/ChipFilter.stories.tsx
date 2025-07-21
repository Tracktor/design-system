import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import ChipFilter from "@/components/Inputs/ChipFilter/ChipFilter";

const options = [
  { id: "1", label: "Filter 1", value: "filter-1" },
  { id: "2", label: "Filter 2", value: "filter-2" },
];

const Template: StoryFn<typeof ChipFilter> = (args) => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [value, setValue] = useState<string>();

  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };

  const handleChange = (newValue?: string) => {
    setValue(newValue);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter
        {...args}
        size="small"
        label="Small"
        onChange={handleChangeSmall}
        value={valueSmall}
        options={options}
        labelMenu="Make your choice"
      />
      <ChipFilter
        {...args}
        size="medium"
        label="Medium"
        onChange={handleChange}
        value={value}
        options={options}
        labelMenu="Make your choice"
      />
    </Stack>
  );
};

const ToggleTemplate: StoryFn<typeof ChipFilter> = (args) => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [value, setValue] = useState<string>();

  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };

  const handleChange = (newValue?: string) => {
    setValue(newValue);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter
        {...args}
        size="small"
        label="Small"
        onChange={handleChangeSmall}
        value={valueSmall}
        labelMenu="Make your choice"
        options={{ id: "1", label: "Filter 1", value: "filter-1" }}
      />
      <ChipFilter
        {...args}
        size="medium"
        label="Medium"
        onChange={handleChange}
        value={value}
        labelMenu="Make your choice"
        options={{ id: "1", label: "Filter 1", value: "filter-1" }}
      />
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Toggle = ToggleTemplate.bind({});
Toggle.args = {};

export default {
  component: ChipFilter,
  title: "Components/Inputs/ChipFilter",
} as Meta<typeof ChipFilter>;
