import { Alert, Button, IconButton, SnackbarOrigin, Stack } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { SyntheticEvent, useState } from "react";
import Snackbar from "./Snackbar";

export interface State extends SnackbarOrigin {
  open: boolean;
}

const Template: ComponentStory<typeof Snackbar> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (_: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="info" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        X
      </IconButton>
    </>
  );

  return (
    <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
      <Button onClick={handleClick} variant="outlined">
        Open simple snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="Note archived" action={action} {...args} />
    </Stack>
  );
};

const CustomTemplate: ComponentStory<typeof Snackbar> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
      <Button onClick={handleClick} variant="outlined">
        Open custom snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} {...args}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }} variant="filled">
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

const PositionTemplate: ComponentStory<typeof Snackbar> = () => {
  const [state, setState] = useState<State>({
    horizontal: "center",
    open: false,
    vertical: "top",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
      <Button
        variant="outlined"
        onClick={handleClick({
          horizontal: "center",
          vertical: "top",
        })}
      >
        Top-Center
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          horizontal: "right",
          vertical: "top",
        })}
      >
        Top-Right
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          horizontal: "right",
          vertical: "bottom",
        })}
      >
        Bottom-Right
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          horizontal: "center",
          vertical: "bottom",
        })}
      >
        Bottom-Center
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          horizontal: "left",
          vertical: "bottom",
        })}
      >
        Bottom-Left
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          horizontal: "left",
          vertical: "top",
        })}
      >
        Top-Left
      </Button>
      <Snackbar
        anchorOrigin={{ horizontal, vertical }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Custom = CustomTemplate.bind({});
Custom.args = {};

export const Position = PositionTemplate.bind({});
Position.args = {};

export default {
  component: Snackbar,
  title: "Components/Feedback/Snackbar",
} as ComponentMeta<typeof Snackbar>;
