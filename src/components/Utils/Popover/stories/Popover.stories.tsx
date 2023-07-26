import { Box, Button, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { MouseEvent, useState } from "react";
import Popover from "./Popover";

const Template: StoryFn<typeof Popover> = (args) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover id={id} anchorEl={anchorEl} onClose={handleClose} {...args} open={open}>
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </Box>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const CustomPosition = Template.bind({});
CustomPosition.args = {
  anchorOrigin: {
    horizontal: "center",
    vertical: "bottom",
  },
  transformOrigin: {
    horizontal: "center",
    vertical: "top",
  },
};

export default {
  component: Popover,
  title: "Components/Utils/Popover",
} as Meta<typeof Popover>;
