import { Box } from "@mui/material";
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

const Template: StoryFn<typeof Backoffice> = (args) => (
  <Box sx={{ height: "100%", width: "100%" }}>
    <Backoffice AppBar={<AppBar />} Sidebar={<NavigationMenu items={menuItems} />} Main={<Box p={3}>This is main</Box>} {...args} />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: Backoffice,
  title: "Components/Layout/Backoffice",
} as Meta<typeof Backoffice>;
