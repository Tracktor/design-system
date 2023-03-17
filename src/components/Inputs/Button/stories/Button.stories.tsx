import { IconButton, Stack, SvgIcon } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

const AddShoppingCartIcon = () => (
  <SvgIcon
    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="AddShoppingCartIcon"
  >
    <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />
  </SvgIcon>
);

const AlarmIcon = () => (
  <SvgIcon
    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="AlarmIcon"
  >
    <path d="m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
  </SvgIcon>
);

const Template: ComponentStory<typeof Button> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" height="100%" paddingY={5}>
    <Button size="small" color="inherit" {...args}>
      Small inherit
    </Button>
    <Button color="primary" {...args}>
      Medium primary
    </Button>
    <Button size="medium" color="secondary" {...args}>
      Medium secondary
    </Button>
    <Button size="medium" color="success" {...args}>
      Medium success
    </Button>
    <Button size="medium" color="error" {...args}>
      Medium error
    </Button>
    <Button size="medium" color="info" {...args}>
      Medium info
    </Button>
    <Button size="medium" color="warning" {...args}>
      Medium warning
    </Button>
    <Button size="large" {...args}>
      Large
    </Button>
    <Button size="large" disabled css {...args}>
      Large Disabled
    </Button>
  </Stack>
);

const IconTemplate: ComponentStory<typeof Button> = () => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%" paddingY={5}>
    <IconButton color="primary" aria-label="upload picture" component="label">
      <input hidden accept="image/*" type="file" />
      <AddShoppingCartIcon />
    </IconButton>
    <IconButton color="primary" aria-label="upload picture" component="label">
      <input hidden accept="image/*" type="file" />
      <AlarmIcon />
    </IconButton>
  </Stack>
);

const IconWithLabelTemplate: ComponentStory<typeof Button> = () => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%" paddingY={5}>
    <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
      Add to cart
    </Button>
    <Button variant="contained" endIcon={<AlarmIcon />}>
      Alarm
    </Button>
  </Stack>
);

const TemplateLoading: ComponentStory<typeof Button> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%" paddingY={5}>
    <Stack spacing={2} alignItems="center">
      <Button size="small" variant="outlined" {...args}>
        S outlined
      </Button>
      <Button size="medium" variant="outlined" {...args}>
        M outlined
      </Button>
      <Button size="large" variant="outlined" {...args}>
        L outlined
      </Button>
      <Button variant="outlined" loadingIndicator="Loading..." {...args}>
        Loading indicator outlined
      </Button>
      <Button variant="outlined" loading fullWidth {...args}>
        Full Width outlined
      </Button>
      <Button variant="outlined" loading loadingIndicator="Loading..." fullWidth {...args}>
        Full Width indicator outlined
      </Button>
      <Button variant="outlined" loading loadingPosition="start" {...args}>
        Loading start
      </Button>
      <Button variant="outlined" loading loadingPosition="end" {...args}>
        Loading end
      </Button>
    </Stack>

    <Stack spacing={2} alignItems="center">
      <Button size="small" variant="text" {...args}>
        S text
      </Button>
      <Button size="medium" variant="text" {...args}>
        M text
      </Button>
      <Button size="large" variant="text" {...args}>
        L text
      </Button>
      <Button variant="text" loadingIndicator="Loading..." {...args}>
        Loading indicator text
      </Button>
      <Button variant="text" loading fullWidth {...args}>
        Full Width text
      </Button>
      <Button variant="text" loading loadingIndicator="Loading..." fullWidth {...args}>
        Full Width indicator text
      </Button>
      <Button variant="text" loading loadingPosition="start" {...args}>
        Loading start text
      </Button>
      <Button variant="text" loading loadingPosition="end" {...args}>
        Loading end text
      </Button>
    </Stack>

    <Stack spacing={2} alignItems="center">
      <Button variant="contained" size="small" {...args}>
        S contained
      </Button>
      <Button size="medium" variant="contained" {...args}>
        M contained
      </Button>
      <Button variant="contained" size="large" {...args}>
        L contained
      </Button>
      <Button variant="contained" loadingIndicator="Loading..." {...args}>
        Loading indicator contained
      </Button>
      <Button variant="contained" loading fullWidth {...args}>
        Full Width contained
      </Button>
      <Button variant="contained" loading loadingIndicator="Loading..." fullWidth {...args}>
        Full Width indicator contained
      </Button>
      <Button variant="text" loading loadingPosition="start" {...args}>
        Loading start contained
      </Button>
      <Button variant="text" loading loadingPosition="end" {...args}>
        Loading end contained
      </Button>
    </Stack>
  </Stack>
);

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export const Icon = IconTemplate.bind({});
Icon.args = {};

export const IconWithLabel = IconWithLabelTemplate.bind({});
IconWithLabel.args = {};

export const Loading = TemplateLoading.bind({});
Loading.args = {
  loading: true,
};

export default {
  component: Button,
  title: "Components/Inputs/Button",
} as ComponentMeta<typeof Button>;
