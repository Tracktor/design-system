import { Box, Chip, emphasize, Link, styled, Typography } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import type { MouseEvent as ReactMouseEvent } from "react";
import Breadcrumbs from "./Breadcrumbs";

const handleClick = (event: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
};

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Box onClick={handleClick} display="flex" alignItems="center" justifyContent="center" height="100%">
    <Breadcrumbs aria-label="breadcrumb" {...args}>
      <Link underline="hover" color="inherit" href="/">
        Tracktor
      </Link>
      <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
        Catalog
      </Link>
      <Typography color="text.primary">Bulldozer</Typography>
    </Breadcrumbs>
  </Box>
);

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[800];
  return {
    "&:active": {
      backgroundColor: emphasize(backgroundColor, 0.12),
      boxShadow: theme.shadows[1],
    },
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    backgroundColor,
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    height: theme.spacing(3),
  };
}) as typeof Chip;

const CustomTemplate: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Box onClick={handleClick} display="flex" alignItems="center" justifyContent="center" height="100%">
    <Breadcrumbs aria-label="breadcrumb" {...args}>
      <StyledBreadcrumb component="a" href="#" label="Home" />
      <StyledBreadcrumb component="a" href="#" label="Catalog" />
      <StyledBreadcrumb label="Accessories" onDelete={handleClick} />
    </Breadcrumbs>
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {};

export const CustomSeparator = Basic.bind({});
CustomSeparator.args = {
  separator: ">",
};

export const Collapsed = Basic.bind({});
Collapsed.args = {
  maxItems: 1,
};

export const Custom = CustomTemplate.bind({});
Collapsed.args = {};

export default {
  component: Breadcrumbs,
  title: "Components/Navigation/Breadcrumbs",
} as ComponentMeta<typeof Breadcrumbs>;
