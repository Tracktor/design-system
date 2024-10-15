import { FormControl, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import SelectMultiple, { SelectMultipleOption } from "@/components/Inputs/SelectMultiple";

const options = [
  { id: "1", label: "Oliver Hansen", value: "oliver-hansen" },
  { id: "2", label: "Van Henry", value: "van-henry" },
  { id: "3", label: "April Tucker", value: "april-tucker" },
  { id: "4", label: "Ralph Hubbard", value: "ralph-hubbard" },
  { id: "5", label: "Omar Alexander", value: "omar-alexander" },
  { id: "6", label: "Carlos Abbott", value: "carlos-abbott" },
  { id: "7", label: "Miriam Wagner", value: "miriam-wagner" },
  { id: "8", label: "Bradley Wilkerson", value: "bradley-wilkerson" },
  { id: "9", label: "Virginia Andrews", value: "virginia-andrews" },
  { id: "10", label: "Kelly Snyder", value: "kelly-snyder" },
];

const Template: StoryFn<typeof SelectMultiple> = (args) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectMultipleOption[]>([]);

  const handleChange = (value: SelectMultipleOption[]) => {
    setSelectedOptions(value);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl sx={{ m: 1, width: 300 }}>
        <SelectMultiple value={selectedOptions} options={options} onChange={handleChange} {...args} />
      </FormControl>
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: SelectMultiple,
  title: "Components/Inputs/SelectMultiple",
} as Meta<typeof SelectMultiple>;
