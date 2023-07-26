import { Button, CircularProgress, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import Backdrop from "./Backdrop";

const Template: StoryFn<typeof Backdrop> = (args) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Button onClick={handleToggle} variant="outlined">
        Click to show backdrop
      </Button>
      <Backdrop {...args} sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: Backdrop,
  title: "Components/Feedback/Backdrop",
} as Meta<typeof Backdrop>;
