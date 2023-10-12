import { Button, List, ListItem, ListItemIcon, ListItemText, MenuItem, Stack, SvgIcon, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { MouseEvent, useEffect, useRef, useState } from "react";
import Menu from "./Menu";

const OPTIONS = [
  "Show some love to MUI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];

const Template: StoryFn<typeof Menu> = (args, { parameters }) => {
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (_: MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  useEffect(() => {
    setAnchorEl(buttonRef.current);
  }, []);

  if (parameters.template === "selected") {
    return (
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <List component="nav" aria-label="Device settings" sx={{ backgroundColor: "background.paper" }}>
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            ref={buttonRef}
          >
            <ListItemText primary="When device is locked" secondary={OPTIONS[selectedIndex]} />
          </ListItem>
        </List>
        <Menu
          {...args}
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          transitionDuration={0}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {OPTIONS.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option} aa
            </MenuItem>
          ))}
        </Menu>
      </Stack>
    );
  }

  if (parameters.template === "icon") {
    return (
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          ref={buttonRef}
        >
          Dashboard
        </Button>
        <Menu
          {...args}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transitionDuration={0}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ContentCutIcon"
              >
                <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
              </SvgIcon>
            </ListItemIcon>
            Cut
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ContentCopyIcon"
              >
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </SvgIcon>
            </ListItemIcon>
            Copy
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ContentPasteIcon"
              >
                <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" />
              </SvgIcon>
            </ListItemIcon>
            <Typography variant="h5">Paste with custom typography (h5)</Typography>
          </MenuItem>
        </Menu>
      </Stack>
    );
  }

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        ref={buttonRef}
      >
        Dashboard
      </Button>
      <Menu
        {...args}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transitionDuration={0}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Positioned = Template.bind({});
Positioned.args = {
  anchorOrigin: {
    horizontal: "left",
    vertical: "top",
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {};
WithIcon.parameters = {
  template: "icon",
};

export const Selected = Template.bind({});
Selected.args = {};
Selected.parameters = {
  template: "selected",
};

export default {
  component: Menu,
  title: "Components/Navigation/Menu",
} as Meta<typeof Menu>;
