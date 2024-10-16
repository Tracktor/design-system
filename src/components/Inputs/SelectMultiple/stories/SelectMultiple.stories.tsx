import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import SelectMultiple, { SelectMultipleOption } from "@/components/Inputs/SelectMultiple";

const Template: StoryFn<typeof SelectMultiple> = (args) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectMultipleOption[]>([]);

  const handleChange = (value: SelectMultipleOption[]) => {
    setSelectedOptions(value);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <SelectMultiple value={selectedOptions} onChange={handleChange} {...args} />
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  options: [
    { id: "1", label: "Oliver Hansen", value: "oliver-hansen" },
    { id: "2", label: "Van Henry", value: "van-henry" },
    { id: "3", label: "April Tucker", value: "april-tucker" },
  ],
  placeholder: "Select options...",
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  options: [
    { id: "1", image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", label: "Oliver Hansen", value: "oliver-hansen" },
    { id: "2", image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", label: "Van Henry", value: "van-henry" },
    { id: "3", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4", label: "April Tucker", value: "april-tucker" },
  ],
  placeholder: "Select options...",
};

export default {
  component: SelectMultiple,
  title: "Components/Inputs/SelectMultiple",
} as Meta<typeof SelectMultiple>;
