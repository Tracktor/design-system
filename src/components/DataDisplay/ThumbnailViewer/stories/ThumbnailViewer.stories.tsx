import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import ThumbnailViewer from "@/components/DataDisplay/ThumbnailViewer";

const Template: StoryFn<typeof ThumbnailViewer> = (args) => (
  <Stack height="100%">
    <ThumbnailViewer {...args} />
  </Stack>
);

export const PdfThumbnailViewer = Template.bind({});
PdfThumbnailViewer.args = {
  height: "40%",
  src: "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf",
  width: "40%",
};

export default {
  component: ThumbnailViewer,
  title: "Components/Data Display/ThumbnailViewer",
} as Meta<typeof ThumbnailViewer>;
