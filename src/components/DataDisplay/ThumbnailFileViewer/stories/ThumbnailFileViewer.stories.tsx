import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import ThumbnailFileViewer from "@/components/DataDisplay/ThumbnailFileViewer";

const Template: StoryFn<typeof ThumbnailFileViewer> = (args) => (
  <Stack>
    <ThumbnailFileViewer {...args} />
  </Stack>
);

export const PdfThumbnailFileViewer = Template.bind({});
PdfThumbnailFileViewer.args = {
  src: "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf",
};

export const ImageThumbnailFileViewer = Template.bind({});
ImageThumbnailFileViewer.args = {
  src: "https://picsum.photos/536/354",
};

export default {
  component: ThumbnailFileViewer,
  title: "Components/Data Display/ThumbnailFileViewer",
} as Meta<typeof ThumbnailFileViewer>;
