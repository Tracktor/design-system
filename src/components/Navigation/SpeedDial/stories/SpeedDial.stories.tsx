import { Box, SpeedDialAction, SpeedDialIcon, SvgIcon } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import SpeedDial from "./SpeedDial";

const actions = [
  {
    icon: (
      <SvgIcon>
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="SaveIcon"
        >
          <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
        </svg>
      </SvgIcon>
    ),
    name: "Save",
  },
  {
    icon: (
      <SvgIcon>
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="FileCopyOutlinedIcon"
        >
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z" />
        </svg>
      </SvgIcon>
    ),
    name: "Copy",
  },
];

const Template: ComponentStory<typeof SpeedDial> = (args) => {
  const { openIcon } = args;

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%" position="relative">
      <SpeedDial
        sx={{ bottom: 16, position: "absolute", right: 16 }}
        {...args}
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon openIcon={openIcon} />}
      >
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
        ))}
      </SpeedDial>
    </Box>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Direction = Template.bind({});
Direction.args = {
  direction: "left",
  sx: undefined,
};
Direction.argTypes = {
  direction: {
    control: { type: "select" },
    options: ["up", "right", "down", "left"],
  },
};

export const ToggleHidden = Template.bind({});
ToggleHidden.args = {
  hidden: false,
};

export const CustomOpenIcon = Template.bind({});
CustomOpenIcon.args = {
  openIcon: actions[0].icon,
};

export default {
  component: SpeedDial,
  title: "Components/Navigation/SpeedDial",
} as ComponentMeta<typeof SpeedDial>;
