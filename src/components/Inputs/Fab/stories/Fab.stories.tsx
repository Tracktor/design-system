import { Stack } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Fab from "./Fab";

const Template: ComponentStory<typeof Fab> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Fab color="primary" aria-label="add" {...args}>
      X
    </Fab>
    <Fab color="secondary" aria-label="edit" {...args}>
      Y
    </Fab>
    <Fab variant="extended" {...args}>
      Lorem Ipsum
    </Fab>
    <Fab disabled aria-label="like" {...args}>
      D
    </Fab>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: Fab,
  title: "Components/Inputs/Floating action button",
} as ComponentMeta<typeof Fab>;
