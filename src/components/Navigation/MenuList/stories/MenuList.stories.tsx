import { Divider, ListItemIcon, ListItemText, MenuItem, Paper, Stack, SvgIcon, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import MenuList from "./MenuList";

const BasicTemplate: StoryFn<typeof MenuList> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Paper sx={{ maxWidth: "100%", width: 320 }}>
      <MenuList {...args}>
        <MenuItem>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  </Stack>
);

const IconTemplate: StoryFn<typeof MenuList> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Paper sx={{ maxWidth: "100%", width: 320 }}>
      <MenuList {...args}>
        <MenuItem>
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
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
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
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
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
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <SvgIcon
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CloudIcon"
            >
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  </Stack>
);

export const Basic = BasicTemplate.bind({});
Basic.args = {};

export const WithIcon = IconTemplate.bind({});
WithIcon.args = {};

export const Dense = IconTemplate.bind({});
Dense.args = {
  dense: true,
};

export default {
  component: MenuList,
  title: "Components/Navigation/MenuList",
} as Meta<typeof MenuList>;
