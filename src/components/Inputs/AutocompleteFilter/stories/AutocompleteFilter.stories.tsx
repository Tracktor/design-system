import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { SyntheticEvent, useState } from "react";
import AutocompleteFilter, { AutocompleteFilterOption } from "@/components/Inputs/AutocompleteFilter";

const data = [
  { id: "1", label: "Oliver Hansen", value: "oliver-hansen" },
  { id: "2", label: "Van Henry", value: "van-henry" },
  { id: "3", label: "April Tucker", value: "april-tucker" },
  { id: "4", label: "April Tucker", value: "april-tucker" },
];

const dataWithImage = [
  { id: "1", image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", label: "Oliver Hansen", value: "oliver-hansen" },
  { id: "2", image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", label: "Van Henry", value: "van-henry" },
  { id: "3", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4", label: "April Tucker", value: "april-tucker" },
];

const Template: StoryFn<typeof AutocompleteFilter> = (args) => {
  const [selectedOptions, setSelectedOptions] = useState<AutocompleteFilterOption[]>([]);

  const handleChange = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptions(value);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{ width: 300 }} value={selectedOptions} onChange={handleChange} />
      <AutocompleteFilter {...args} size="small" sx={{ width: 300 }} value={selectedOptions} onChange={handleChange} />
      <AutocompleteFilter {...args} size="medium" sx={{ width: 300 }} value={selectedOptions} onChange={handleChange} />
    </Stack>
  );
};
export const Basic = Template.bind({});
Basic.args = {
  options: data,
  placeholder: "Search...",
};

export const WithImage = Template.bind({});
WithImage.args = {
  options: dataWithImage,
  placeholder: "Search...",
};

export default {
  component: AutocompleteFilter,
  title: "Components/Inputs/AutocompleteFilter",
} as Meta<typeof AutocompleteFilter>;
