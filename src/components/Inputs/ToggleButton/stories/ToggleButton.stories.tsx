import { Stack, ToggleButtonGroup } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { MouseEvent, useState } from "react";
import ToggleButton from "./ToggleButton";

const TemplateExclusive: StoryFn<typeof ToggleButton> = (args) => {
  const [value, setValue] = useState<string | null>("b");

  const handleAlignment = (_: MouseEvent<HTMLElement>, newValue: string | null) => {
    setValue(newValue);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor" exclusive>
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b" color="secondary">
          is
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

const TemplateMultiple: StoryFn<typeof ToggleButton> = (args) => {
  const [value, setValue] = useState<string[] | null>(() => ["a", "c"]);

  const handleAlignment = (_: MouseEvent<HTMLElement>, newValue: string[] | null) => {
    setValue(newValue);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor">
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b" color="secondary">
          is
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export const ExclusiveSelection = TemplateExclusive.bind({});
ExclusiveSelection.args = {};

export const MultipleSelection = TemplateMultiple.bind({});
MultipleSelection.args = {};

export default {
  component: ToggleButton,
  title: "Components/Inputs/ToggleButton",
} as Meta<typeof ToggleButton>;
