import { Button, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { ElementRef, useRef, useState } from "react";
import DialogValidation from "@/components/Feedback/Dialog/DialogValidation/DialogValidation";

const BasicTemplate: StoryFn<typeof DialogValidation> = ({ ...args }) => {
  const [open, setOpen] = useState(true);
  const anchorRef = useRef<ElementRef<"button">>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Button variant="outlined" onClick={handleClickOpen} ref={anchorRef}>
        Open dialog validation
      </Button>
      <DialogValidation
        {...args}
        open={open}
        onClose={handleClose}
        title="Your order has !"

        // subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed non risus."
      />
    </Stack>
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
  color: "secondary",
};

export const WithButton = BasicTemplate.bind({});
WithButton.args = {
  buttonPrimary: {
    text: "Continue",
  },
  buttonSecondary: {
    text: "All my orders",
  },
};

export const Warning = BasicTemplate.bind({});
Warning.args = {
  buttonPrimary: {
    text: "Continue",
  },
  buttonSecondary: {
    text: "All my orders",
  },
  color: "warning",
};

export const Info = BasicTemplate.bind({});
Info.args = {
  buttonPrimary: {
    text: "Continue",
  },
  buttonSecondary: {
    text: "All my orders",
  },
  color: "info",
};

export const Error = BasicTemplate.bind({});
Error.args = {
  buttonPrimary: {
    text: "Continue",
  },
  buttonSecondary: {
    text: "All my orders",
  },
  color: "error",
};

export const Success = BasicTemplate.bind({});
Success.args = {
  buttonPrimary: {
    text: "Continue",
  },
  buttonSecondary: {
    text: "All my orders",
  },
  color: "success",
};

export default {
  component: DialogValidation,
  title: "Components/Feedback/DialogValidation",
} as Meta<typeof DialogValidation>;
