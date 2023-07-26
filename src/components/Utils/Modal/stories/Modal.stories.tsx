import { Box, Button, Fade, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import Modal from "./Modal";

const ModalStyle = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  boxShadow: 24,
  left: "50%",
  p: 4,
  position: "absolute" as "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
};

const Template: StoryFn<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button onClick={handleOpen} variant="outlined">
        Open modal
      </Button>
      <Modal {...args} open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={ModalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modal Title
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

const TransitionTemplate: StoryFn<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button onClick={handleOpen} variant="outlined">
        Open fade transition modal
      </Button>
      <Modal
        {...args}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open} timeout={1000}>
          <Box sx={ModalStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const KeepMounted = Template.bind({});
KeepMounted.args = {
  keepMounted: true,
};

export const Transition = TransitionTemplate.bind({});
Transition.args = {};

export default {
  component: Modal,
  title: "Components/Utils/Modal",
} as Meta<typeof Modal>;
