import {
  Avatar,
  Collapse,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import List from "./List";

const Template: ComponentStory<typeof List> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{ backgroundColor: "info.main", maxWidth: 360, width: "100%" }} {...args}>
      <ListItem>
        <ListItemText primary="Bulldozer" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Mini-pelle" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Dumper" />
      </ListItem>
    </List>
  </Stack>
);

const TemplateSecondary: ComponentStory<typeof List> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{ backgroundColor: "secondary.main", maxWidth: 360, width: "100%" }} {...args}>
      <ListItem>
        <ListItemText primary="Bulldozer" secondary="Lorem Ipsum" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Mini-pelle" secondary="Lorem Ipsum" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Dumper" secondary="Lorem Ipsum" />
      </ListItem>
    </List>
  </Stack>
);

const TemplateAlignItemsList: ComponentStory<typeof List> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{ maxWidth: 360, width: "100%" }} {...args}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>RS</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography sx={{ display: "inline" }} component="span" variant="body2">
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>TH</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography sx={{ display: "inline" }} component="span" variant="body2">
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>SA</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography sx={{ display: "inline" }} component="span" variant="body2">
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </>
          }
        />
      </ListItem>
    </List>
  </Stack>
);

const TemplateNested: ComponentStory<typeof List> = (args) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <List
        sx={{ backgroundColor: "error.main", maxWidth: 360, width: "100%" }}
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
        {...args}
      >
        <ListItemButton>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Inbox" />
          {open ? "-" : "+"}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Dense = Template.bind({});
Dense.args = {
  dense: true,
};

export const WithTextSecondary = TemplateSecondary.bind({});
WithTextSecondary.args = {};

export const AlignItemsList = TemplateAlignItemsList.bind({});
TemplateAlignItemsList.args = {};

export const NestedList = TemplateNested.bind({});
NestedList.args = {};

export default {
  component: List,
  title: "Components/Data Display/List",
} as ComponentMeta<typeof List>;
