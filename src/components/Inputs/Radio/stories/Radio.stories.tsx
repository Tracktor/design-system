import { Box, FormControl, FormControlLabel, FormLabel, RadioGroup, Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import Radio from "./Radio";

const TemplateVertical: StoryFn<typeof Radio> = (args) => (
  <Box alignItems="center" justifyContent="center" height="100%" display="flex">
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
        <FormControlLabel value="female" control={<Radio {...args} />} label="Female" />
        <FormControlLabel value="male" control={<Radio {...args} />} label="Male" />
        <FormControlLabel value="other" control={<Radio {...args} />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio {...args} />} label="Disabled" />
      </RadioGroup>
    </FormControl>
  </Box>
);

const TemplateHorizontal: StoryFn<typeof Radio> = (args) => (
  <Box alignItems="center" justifyContent="center" height="100%" display="flex">
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" row>
        <FormControlLabel value="female" control={<Radio {...args} />} label="Female" />
        <FormControlLabel value="male" control={<Radio {...args} />} label="Male" />
        <FormControlLabel value="other" control={<Radio {...args} />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio {...args} />} label="Disabled" />
      </RadioGroup>
    </FormControl>
  </Box>
);

const TemplateColor: StoryFn<typeof Radio> = (args) => (
  <Box alignItems="center" justifyContent="center" height="100%" display="flex">
    <Radio defaultChecked color="default" {...args} />
    <Radio defaultChecked color="primary" {...args} />
    <Radio defaultChecked color="secondary" {...args} />
    <Radio defaultChecked color="error" {...args} />
    <Radio defaultChecked color="warning" {...args} />
    <Radio defaultChecked color="info" {...args} />
    <Radio defaultChecked color="success" {...args} />
  </Box>
);

const TemplateCard: StoryFn<any> = (args) => {
  const { direction, size } = args;

  return (
    <Box alignItems="center" justifyContent="center" height="100%" display="flex">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" sx={{ marginBottom: 1 }}>
          Rôle
        </FormLabel>
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="Gestionnaire" name="radio-buttons-group">
          <Stack spacing={2} direction={direction}>
            <FormControlLabel
              size={size}
              variant="card"
              value="Gestionnaire"
              control={<Radio />}
              label={
                <Stack>
                  <Typography>Gestionnaire</Typography>
                  <Typography color="textSecondary">Peut réserver du matériel et gérer toutes les locations</Typography>
                </Stack>
              }
            />
            <FormControlLabel variant="card" value="Membre" control={<Radio />} label="Membre" size={size} />
            <FormControlLabel variant="card" value="Comptable" control={<Radio />} label="Comptable" size={size} />
            <FormControlLabel variant="card" value="disabled" disabled control={<Radio />} label="Disabled" size={size} />
          </Stack>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export const Vertical = TemplateVertical.bind({});
Vertical.args = {};

export const Horizontal = TemplateHorizontal.bind({});
Horizontal.args = {};

export const Size = TemplateHorizontal.bind({});
Size.args = {
  sx: { "& .MuiSvgIcon-root": { fontSize: 36 } },
};

export const Color = TemplateColor.bind({});
Color.args = {};

export const CardVariant = TemplateCard.bind({});
CardVariant.args = {};

export const CardVariantHorizontal = TemplateCard.bind({});
CardVariantHorizontal.args = {
  direction: "row",
};

export const CardVariantSmall = TemplateCard.bind({});
CardVariantSmall.args = {
  size: "small",
};

export default {
  component: Radio,
  title: "Components/Inputs/Radio",
} as Meta<typeof Radio>;
