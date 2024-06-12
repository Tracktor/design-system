import { Box, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import Backoffice from "../Backoffice";
import NavigationMenu from "@/components/Navigation/NavigationMenu";
import AppBar from "@/components/Surface/AppBar";

const menuItems = [
  {
    label: "Dashboard",
    url: "#",
  },
  {
    label: "Booking",
    url: "#",
  },
];

const secondaryMenuItems = [
  {
    label: "Restore",
    url: "#",
  },
  {
    active: true,
    label: "Favorite",
    url: "#",
  },
];

const Template: StoryFn<typeof Backoffice> = (args) => (
  <Box sx={{ height: "100%", width: "100%" }}>
    <Backoffice
      AppBar={<AppBar />}
      Sidebar={
        <NavigationMenu
          items={menuItems}
          secondaryMenu={{
            items: secondaryMenuItems,
            label: "Settings",
            startIcon: "⚙️",
          }}
        />
      }
      Main={
        <Box p={3}>
          <Typography variant="h1">This is main</Typography>
        </Box>
      }
      {...args}
    />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: Backoffice,
  title: "Components/Layout/Backoffice",
} as Meta<typeof Backoffice>;
