import { Box } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import Lightbox from "./Lightbox";

const IMG_SRC = "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e";

const Template: StoryFn<typeof Lightbox> = (args) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box
        component="img"
        src={IMG_SRC}
        alt="My image"
        width={200}
        height={200}
        sx={{ cursor: "pointer", objectFit: "cover" }}
        onClick={handleOpen}
      />
      <Lightbox {...args} open={open} onClose={handleClose} src={IMG_SRC} />
    </Box>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: Lightbox,
  title: "Components/Feedback/Lightbox",
} as Meta<typeof Lightbox>;
