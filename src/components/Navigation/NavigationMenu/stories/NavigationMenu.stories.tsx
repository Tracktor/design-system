import { Alert, Box, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, SvgIcon } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import NavigationMenu from "./NavigationMenu";
import Logo from "@/components/DataDisplay/Logo";

const RestoreIcon = () => (
  <SvgIcon>
    <svg viewBox="0 0 24 24">
      <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
    </svg>
  </SvgIcon>
);

const FavoriteIcon = () => (
  <SvgIcon>
    <svg viewBox="0 0 24 24">
      <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  </SvgIcon>
);

const LocationIcon = () => (
  <SvgIcon>
    <svg viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  </SvgIcon>
);

const VIEWPORTS = {
  mobile: {
    name: "Mobile",
    styles: {
      height: "500px",
      width: "480px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      height: "500px",
      width: "768px",
    },
  },
};

const ITEMS = [
  {
    active: true,
    label: "Lien 1",
    url: "#",
  },
  {
    label: "Lien 2",
    url: "#",
  },
  {
    count: 2,
    label: "Lien 3",
    url: "#",
  },
];

const ITEMS_WITH_ICON = [
  {
    active: true,
    icon: <RestoreIcon />,
    label: "Restore",
    url: "#",
  },
  {
    icon: <FavoriteIcon />,
    label: "Favorite",
    url: "#",
  },
  {
    count: 2,
    icon: <LocationIcon />,
    label: "Location",
    url: "#",
  },
];

const ITEMS_WITH_CUSTOM_NODE = [
  {
    active: true,
    label: "Lien 1",
    url: "#",
  },
  {
    label: "Lien 2",
    url: "#",
  },
  <Alert key={1}>Custom Node</Alert>,
];

const ITEMS_MOBILE = [
  {
    label: "Lien 1",
    url: "lien-1",
  },
  {
    label: "Lien 2",
    url: "lien-2",
  },
  {
    label: "Lien 3",
    url: "lien-3",
  },
];

const ITEMS_MOBILE_WITH_ICON = [
  {
    icon: <RestoreIcon />,
    label: "Lien 1",
    url: "#",
  },
  {
    icon: <FavoriteIcon />,
    label: "Lien 2",
    url: "#",
  },
  {
    icon: <LocationIcon />,
    label: "Lien 3",
    url: "#",
  },
];

const ITEMS_SECONDARY = [
  <Box key="company" p={1}>
    <FormControl sx={{ px: 1 }}>
      <FormLabel>Company</FormLabel>
      <RadioGroup defaultValue="a">
        <FormControlLabel value="a" control={<Radio />} label="Company A" />
        <FormControlLabel value="b" control={<Radio />} label="Company B" />
      </RadioGroup>
    </FormControl>
    <Divider sx={{ my: 1 }} />
  </Box>,
  {
    icon: <RestoreIcon />,
    label: "Restore",
    url: "#",
  },
  {
    active: true,
    icon: <FavoriteIcon />,
    label: "Favorite",
    url: "#",
  },
];

const getItem = (item: string) => {
  switch (item) {
    case "customNode":
      return ITEMS_WITH_CUSTOM_NODE;
    case "icon":
      return ITEMS_WITH_ICON;
    default:
      return ITEMS;
  }
};

const Template: ComponentStory<typeof NavigationMenu> = (args, { parameters }) => {
  const items = getItem(parameters.item);

  return (
    <NavigationMenu
      {...args}
      items={items}
      itemsMobile={parameters.icons || ITEMS_MOBILE}
      Logo={parameters.logo && <Logo color="white" />}
      secondaryMenu={
        parameters.secondary && {
          avatar: {
            name: "Mickaël",
          },
          items: ITEMS_SECONDARY,
          label: "Menu label",
        }
      }
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const WithIcon = Template.bind({});
WithIcon.args = {};
WithIcon.parameters = {
  item: "icon",
};

export const WithLogo = Template.bind({});
WithLogo.args = {};
WithLogo.parameters = {
  logo: true,
};

export const WithoutSearch = Template.bind({});
WithoutSearch.args = {
  disableSearch: true,
};

export const Mobile = Template.bind({});
Mobile.args = {};
Mobile.parameters = {
  logo: true,
  viewport: {
    defaultViewport: "mobile",
    viewports: VIEWPORTS,
  },
};

export const MobileWithIcon = Template.bind({});
MobileWithIcon.args = {};
MobileWithIcon.parameters = {
  icons: ITEMS_MOBILE_WITH_ICON,
  logo: true,
  viewport: {
    defaultViewport: "mobile",
    viewports: VIEWPORTS,
  },
};

export const Tablet = Template.bind({});
Tablet.args = {};
Tablet.parameters = {
  logo: true,
  viewport: {
    defaultViewport: "tablet",
    viewports: VIEWPORTS,
  },
};

export const WithTranslation = Template.bind({});
WithTranslation.args = {
  translations: {
    search: "Rechercher",
  },
};

export const CustomNode = Template.bind({});
CustomNode.args = {};
CustomNode.parameters = {
  item: "customNode",
};

export const WithSecondaryMenu = Template.bind({});
WithSecondaryMenu.args = {};
WithSecondaryMenu.parameters = {
  secondary: true,
};

export default {
  component: NavigationMenu,
  title: "Components/Navigation/NavigationMenu",
} as ComponentMeta<typeof NavigationMenu>;
