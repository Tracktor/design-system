import { Box, Button, Fade } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { MouseEvent, useState } from "react";
import Popper from "./Popper";

const Template: StoryFn<typeof Popper> = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button variant="outlined" onClick={handleClick}>
        Toggle Popper
      </Button>
      <Popper id={id} anchorEl={anchorEl} {...args} open={open}>
        <Box sx={{ bgcolor: "background.paper", border: 1, p: 1 }}>The content of the Popper.</Box>
      </Popper>
    </Box>
  );
};

const TransitionTemplate: StoryFn<typeof Popper> = (args) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button variant="outlined" onClick={handleClick}>
        Toggle fade transition Popper
      </Button>
      <Popper id={id} anchorEl={anchorEl} transition {...args} open={open}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={1000}>
            <Box sx={{ bgcolor: "background.paper", border: 1, p: 1 }}>The content of the Popper.</Box>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Transition = TransitionTemplate.bind({});
Transition.args = {};

export default {
  component: Popper,
  title: "Components/Utils/Popper",
} as Meta<typeof Popper>;
