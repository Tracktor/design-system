import { Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import CardModal from "../CardModal";

const Template: StoryFn<typeof CardModal> = (args) => (
  <Stack spacing={0} alignItems="center" justifyContent="center" height="100%">
    <CardModal {...args}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        Hello
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />a benevolent smile
      </Typography>
    </CardModal>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export default {
  component: CardModal,
  title: "Components/Surface/CardModal",
} as Meta<typeof CardModal>;
