import { Box, Button, Stack, SxProps } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import ClickAwayListener from "./ClickAwayListener";

const Template: ComponentStory<typeof ClickAwayListener> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles: SxProps = {
    bgcolor: "background.paper",
    left: 0,
    p: 2,
    position: "absolute",
    right: 0,
    top: "100%",
    zIndex: 1,
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
      <ClickAwayListener {...args} onClickAway={handleClickAway}>
        <Box sx={{ position: "relative" }}>
          <Button type="button" variant="outlined" onClick={handleClick}>
            Open menu dropdown
          </Button>
          {open ? <Box sx={styles}>Click me, I will stay visible until you click outside.</Box> : null}
        </Box>
      </ClickAwayListener>
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export default {
  argTypes: {
    children: {
      description: "The wrapped element.",
    },
    disableReactTree: {
      description:
        "If true, the React tree is ignored and only the DOM tree is considered. This prop changes how portaled elements are handled.",
    },
    mouseEvent: {
      description: "The mouse event to listen to. You can disable the listener by providing false.",
    },
    onClickAway: {
      description: "Callback fired when a “click away” event is detected.",
    },
    touchEvent: {
      description: "The touch event to listen to. You can disable the listener by providing false.",
    },
  },
  component: ClickAwayListener,
  title: "Components/Utils/ClickAwayListener",
} as ComponentMeta<typeof ClickAwayListener>;
