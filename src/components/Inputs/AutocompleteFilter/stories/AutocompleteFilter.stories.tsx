import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { SyntheticEvent, useState } from "react";
import AutocompleteFilter, { AutocompleteFilterOption } from "@/components/Inputs/AutocompleteFilter";

const data = [
  { id: "1", label: "Oliver Hansen", value: "oliver-hansen" },
  { id: "2", label: "Van Henry", value: "van-henry" },
  { id: "3", label: "April Tucker", value: "april-tucker" },
  { id: "4", label: "April Tucker with very long label already", value: "april-tucker" },
];

const dataWithImage = [
  { id: "1", image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", label: "Oliver Hansen", value: "oliver-hansen" },
  { id: "2", image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", label: "Van Henry", value: "van-henry" },
  { id: "3", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4", label: "April Tucker", value: "april-tucker" },
];

const Template: StoryFn<typeof AutocompleteFilter> = (args) => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);

  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };

  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };

  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{ width: 300 }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{ width: 300 }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{ width: 300 }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>
  );
};

const TemplateUniqueSelection: StoryFn<typeof AutocompleteFilter> = (args) => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption | null>(null);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption | null>(null);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption | null>(null);

  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption | null) => {
    setSelectedOptionsXSmall(value);
  };

  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption | null) => {
    setSelectedOptionsSmall(value);
  };

  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption | null) => {
    setSelectedOptionsMedium(value);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter
        {...args}
        size="xSmall"
        sx={{ width: 300 }}
        onChange={handleChangeXSmall}
        value={selectedOptionsXSmall}
        multiple={false}
      />
      <AutocompleteFilter
        {...args}
        size="small"
        sx={{ width: 300 }}
        onChange={handleChangeSmall}
        value={selectedOptionsSmall}
        multiple={false}
      />
      <AutocompleteFilter
        {...args}
        size="medium"
        sx={{ width: 300 }}
        onChange={handleChangeMedium}
        value={selectedOptionsMedium}
        multiple={false}
      />
    </Stack>
  );
};

const TemplateChip: StoryFn<typeof AutocompleteFilter> = (args) => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);

  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };

  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };

  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  options: data,
};

export const WithImage = Template.bind({});
WithImage.args = {
  options: dataWithImage,
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  options: [
    { id: "1", image: "avatar", label: "Oliver Hansen", value: "oliver-hansen" },
    { id: "2", image: "avatar", label: "Van Henry", value: "van-henry" },
    { id: "3", image: "avatar", label: "April Tucker", value: "april-tucker" },
  ],
};

export const WithAvatarLetter = Template.bind({});
WithAvatarLetter.args = {
  options: [
    { id: "1", image: "letter", label: "Oliver Hansen", value: "oliver-hansen" },
    { id: "2", image: "letter", label: "Van Henry", value: "van-henry" },
    { id: "3", image: "letter", label: "April Tucker", value: "april-tucker" },
  ],
};

export const DisableSelectAll = Template.bind({});
DisableSelectAll.args = {
  disableSelectAll: true,
  options: dataWithImage,
};

export const WithHeaderOptions = Template.bind({});
WithHeaderOptions.args = {
  options: [
    ...data,
    {
      id: "my-worksite",
      isHeader: true,
      label: "Mes chantiers",
      value: "my-worksite",
    },
  ],
};

export const WithoutReset = Template.bind({});
WithoutReset.args = {
  disableReset: true,
  options: data,
};

export const CheckboxDisabled = Template.bind({});
CheckboxDisabled.args = {
  disableCheckbox: true,
  options: data,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  options: data,
  placeholder: "Search...",
};

export const ResetInputValueOnSelect = Template.bind({});
ResetInputValueOnSelect.args = {
  options: data,
  resetInputValueOnSelectOption: true,
};

export const DisableClearable = Template.bind({});
DisableClearable.args = {
  disableClearable: true,
  options: data,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const UniqueSelection = TemplateUniqueSelection.bind({});
UniqueSelection.args = {
  multiple: false,
  options: data,
};

export const ChipVariant = TemplateChip.bind({});
ChipVariant.args = {
  options: data,
  placeholder: "Search",
  variant: "chip",
};

export default {
  component: AutocompleteFilter,
  title: "Components/Inputs/AutocompleteFilter",
} as Meta<typeof AutocompleteFilter>;
