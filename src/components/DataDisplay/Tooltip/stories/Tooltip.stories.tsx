import { Box, Button, Fade, Stack, styled, tooltipClasses, TooltipProps, Typography, Zoom } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Tooltip from "./Tooltip";

const CustomWidthTooltip = styled(({ children, className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }}>
    {children}
  </Tooltip>
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

const NoMaxWidthTooltip = styled(({ children, className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }}>
    {children}
  </Tooltip>
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none",
  },
});

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Hello Bro !">
      <Box
        sx={{ border: "1px dashed", borderColor: "primary.main", cursor: "default", p: 2 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography>Please, hover me !</Typography>
      </Box>
    </Tooltip>
  </Stack>
);

const TemplateVariableWidth: ComponentStory<typeof Tooltip> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title={longText}>
      <Button sx={{ m: 1 }}>Default Width [300px]</Button>
    </Tooltip>
    <CustomWidthTooltip title={longText}>
      <Button sx={{ m: 1 }}>Custom Width [500px]</Button>
    </CustomWidthTooltip>
    <NoMaxWidthTooltip title={longText}>
      <Button sx={{ m: 1 }}>No wrapping</Button>
    </NoMaxWidthTooltip>
  </Stack>
);

const TemplateTransition: ComponentStory<typeof Tooltip> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Add">
      <Button>Grow</Button>
    </Tooltip>
    <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Add">
      <Button>Fade</Button>
    </Tooltip>
    <Tooltip TransitionComponent={Zoom} title="Add">
      <Button>Zoom</Button>
    </Tooltip>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const WithArrow = Template.bind({});
WithArrow.args = {
  arrow: true,
};

export const WithPlacement = Template.bind({});
WithPlacement.args = {
  placement: "top",
};

export const VariableWidth = TemplateVariableWidth.bind({});
VariableWidth.args = {};

export const Transition = TemplateTransition.bind({});
Transition.args = {};

export const FollowCursor = Template.bind({});
FollowCursor.args = {
  followCursor: true,
};

export const WithEnterDelay = Template.bind({});
WithEnterDelay.args = {
  enterDelay: 500,
};

export const WithLeaveDelay = Template.bind({});
WithLeaveDelay.args = {
  leaveDelay: 500,
};

export default {
  // eslint-disable-next-line sort-keys
  args: {
    arrow: false,
  },

  argTypes: {
    placement: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
  },
  component: Tooltip,
  title: "Components/Data Display/Tooltip",
} as ComponentMeta<typeof Tooltip>;
