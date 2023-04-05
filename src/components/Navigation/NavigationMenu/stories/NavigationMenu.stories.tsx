import type { ComponentMeta, ComponentStory } from "@storybook/react";
import NavigationMenu from "./NavigationMenu";
import Logo from "@/components/DataDisplay/Logo";

const viewports = {
  mobile: {
    name: "Mobile",
    styles: {
      height: "963px",
      width: "480px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      height: "980px",
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

const ITEMS_BOTTOM = [
  {
    label: "Lien 1",
    url: "#",
  },
  {
    label: "Lien 2",
    url: "#",
  },
  {
    label: "Lien 3",
    url: "#",
  },
];

const Template: ComponentStory<typeof NavigationMenu> = (args, { parameters }) => (
  <NavigationMenu {...args} items={ITEMS} itemsMobile={ITEMS_BOTTOM} Logo={parameters.logo && <Logo color="white" />} />
);

export const Basic = Template.bind({});
Basic.args = {};

export const WithLogo = Template.bind({});
WithLogo.args = {};
WithLogo.parameters = {
  logo: true,
};

export const WithoutSearch = Template.bind({});
WithoutSearch.args = {
  disableSearch: true,
};
WithoutSearch.parameters = {
  logo: true,
};

export const Mobile = Template.bind({});
Mobile.args = {};
Mobile.parameters = {
  logo: true,
  viewport: {
    defaultViewport: "mobile",
    viewports,
  },
};

export const Tablet = Template.bind({});
Tablet.args = {};
Tablet.parameters = {
  logo: true,
  viewport: {
    defaultViewport: "tablet",
    viewports,
  },
};

export default {
  component: NavigationMenu,
  title: "Components/Navigation/NavigationMenu",
} as ComponentMeta<typeof NavigationMenu>;
