import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import SelectMultiple, { SelectMultipleOption } from "@/components/Inputs/SelectMultiple";

const options = [
  { id: "1", label: "Oliver Hansen", value: "oliver-hansen" },
  { id: "2", label: "Van Henry", value: "van-henry" },
  { id: "3", label: "April Tucker", value: "april-tucker" },
];

const Template: StoryFn<typeof SelectMultiple> = (args) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectMultipleOption[]>([]);

  const handleChange = (value: SelectMultipleOption[]) => {
    setSelectedOptions(value);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <SelectMultiple value={selectedOptions} options={options} onChange={handleChange} {...args} />
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Select options...",
};

export default {
  component: SelectMultiple,
  title: "Components/Inputs/SelectMultiple",
} as Meta<typeof SelectMultiple>;
