import {
  Box,
  Collapse as CollapseComponent,
  Fade as FadeComponent,
  FormControlLabel,
  Grow as GrowComponent,
  Paper,
  Slide as SlideComponent,
  Switch,
  Theme,
  Zoom as ZoomComponent,
} from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { ElementType, useState } from "react";

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ height: 100, width: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme: Theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

const getTransitionComponent = (name: string): ElementType => {
  switch (name) {
    case "Fade":
      return FadeComponent;
    case "Collapse":
      return CollapseComponent;
    case "Grow":
      return GrowComponent;
    case "Slide":
      return SlideComponent;
    case "Zoom":
      return ZoomComponent;
    default:
      return FadeComponent;
  }
};

const Template: ComponentStory<any> = (args, { name }) => {
  const Transition = getTransitionComponent(name);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{ height: 300 }}>
        <Box textAlign="center">
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        </Box>
        <Box
          sx={{
            "& > :not(style)": {
              display: "flex",
              height: 120,
              justifyContent: "space-around",
              width: 250,
            },
          }}
        >
          <div>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
          </div>
          <div>
            <Box sx={{ width: "50%" }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export const Fade = Template.bind({});
Fade.args = {};

export const Collapse = Template.bind({});
Collapse.args = {};

export const Grow = Template.bind({});
Grow.args = {};

export const Slide = Template.bind({});
Slide.args = {};

export const Zoom = Template.bind({});
Zoom.args = {};

export default {
  component: Template,
  title: "Components/Utils/Transition",
} as ComponentMeta<any>;
