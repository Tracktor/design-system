import { BottomNavigationAction, Box, SvgIcon } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import BottomNavigation from "./BottomNavigation";

const Template: StoryFn<typeof BottomNavigation> = (args) => {
  const [value, setValue] = useState(0);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box width={500}>
        <BottomNavigation showLabels value={value} onChange={(_, newValue) => setValue(newValue)} {...args}>
          <BottomNavigationAction
            label="Recents"
            icon={
              <SvgIcon>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="RestoreIcon"
                >
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
                </svg>
              </SvgIcon>
            }
          />
          <BottomNavigationAction
            label="Favorites"
            icon={
              <SvgIcon>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="FavoriteIcon"
                >
                  <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </SvgIcon>
            }
          />
          <BottomNavigationAction
            label="Nearby"
            icon={
              <SvgIcon>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LocationOnIcon"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </SvgIcon>
            }
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: BottomNavigation,
  title: "Components/Navigation/BottomNavigation",
} as Meta<typeof BottomNavigation>;
