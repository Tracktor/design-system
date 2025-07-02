import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, SvgIcon } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { Fragment, KeyboardEvent, MouseEvent, useState } from "react";
import Drawer from "./Drawer";

type Anchor = "top" | "left" | "bottom" | "right";

const Template: StoryFn<typeof Drawer> = (args) => {
  const [state, setState] = useState({
    bottom: false,
    left: false,
    right: false,
    top: false,
  });

  const Icon = (
    <SvgIcon
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="FavoriteIcon"
    >
      <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </SvgIcon>
  );

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (event.type === "keydown" && ((event as KeyboardEvent).key === "Tab" || (event as KeyboardEvent).key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Stack direction="row" spacing={1} display="flex" alignItems="center" justifyContent="center" height="100%">
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} variant="outlined">
            {anchor}
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} {...args}>
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </Stack>
  );
};
export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: Drawer,
  title: "Components/Navigation/Drawer",
} as Meta<typeof Drawer>;
