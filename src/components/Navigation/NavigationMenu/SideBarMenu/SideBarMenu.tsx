import { Box, Chip, List, Stack, Theme } from "@mui/material";
import { ReactElement, ReactNode, useContext } from "react";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu";
import TextFieldSearch from "@/components/Navigation/NavigationMenu/TextFieldSearch";

interface NavLinkLinkProps {
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string | undefined);
  onClick?: () => void;
  to: string;
  end?: boolean;
  children?: ReactNode | ((props: { isActive: boolean; isPending: boolean }) => ReactNode);
}

interface NavLinkItemProps {
  url: string;
  children?: ReactNode;
  NavLink: SideBarMenuProps["NavLink"];
  end?: boolean;
  active?: boolean;
}

export interface SideBarMenuProps {
  NavLink?: (props: NavLinkLinkProps) => ReactElement;
  SearchField?: ReactNode;
  translate?: (str: string) => string;
  disableSearch?: boolean;
  items?: {
    url: string;
    label: string;
    count?: number;
    icon?: ReactNode;
    active?: boolean;
  }[];
}

const styles = {
  list: {
    "& button": {
      background: "none !important",
    },
    "& button, & a": {
      "& svg": {
        marginRight: 1,
        transition: ".2s",
      },
      "&.active": {
        "& svg": {
          color: ({ palette }: Theme) => palette.primary.contrastText,
        },
        background: ({ palette }: any) => palette.primary.dark,
        borderRadius: "4px",
        color: ({ palette }: Theme) => palette.primary.contrastText,
      },
      "&:hover svg": {
        transform: "scale(1.2)",
      },
      alignItems: "center",
      color: ({ palette }: Theme) => palette.grey["200"],
      display: "flex",
      fontSize: 16,
      justifyContent: "flex-start",
      paddingX: 3,
      paddingY: 2,
      textAlign: "left",
      textDecoration: "none",
      textTransform: "capitalize",
      width: "100%",
    },
    mt: 3,
  },
};

const getActiveClass = ({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined);

const NavLinkItem = ({ url, end, children, active, NavLink }: NavLinkItemProps) => {
  const { closeDrawerMenu } = useContext(NavigationMenuContext);

  if (NavLink) {
    return (
      <NavLink to={url} className={getActiveClass} onClick={() => closeDrawerMenu()} end={end}>
        {children}
      </NavLink>
    );
  }

  return (
    <a href={url} onClick={() => closeDrawerMenu()} className={active ? getActiveClass({ isActive: true }) : ""}>
      {children}
    </a>
  );
};

const SideBarMenu = ({ items, ...props }: SideBarMenuProps) => {
  const {
    disableSearch = props.disableSearch,
    SearchField = props.SearchField,
    NavLink = props.NavLink,
  } = useContext(NavigationMenuContext);

  return (
    <Box px={2}>
      {!disableSearch && (SearchField || <TextFieldSearch fullWidth />)}
      <List sx={{ ...styles.list }}>
        {items?.map(({ count, url, label, icon, active }, index) => {
          const key = `${url}-${label}-${index}`;

          return (
            <NavLinkItem url={url} key={key} NavLink={NavLink} active={active}>
              {icon}
              <Stack direction="row" justifyContent="space-between" sx={{ flex: 1 }}>
                {label}
                {count && <Chip color="warning" size="small" label={count} variant="rounded" />}
              </Stack>
            </NavLinkItem>
          );
        })}
      </List>
    </Box>
  );
};
export default SideBarMenu;
