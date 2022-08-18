import { Box, Button, Typography } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
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

const Template: ComponentStory<typeof Modal> = (args) => {
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

export const Basic = Template.bind({});
Basic.args = {};

export const KeepMounted = Template.bind({});
KeepMounted.args = {
  keepMounted: true,
};

export default {
  component: Modal,
  title: "Components/Utils/Modal",
} as ComponentMeta<typeof Modal>;
