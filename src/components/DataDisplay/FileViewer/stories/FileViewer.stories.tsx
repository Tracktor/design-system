import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import testImage from "@/assets/img/test-image.jpg";
import FileViewer from "@/components/DataDisplay/FileViewer";

const testFilePDF = "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf";

const Template: StoryFn<typeof FileViewer> = (args) => (
  <Stack height="100%">
    <FileViewer {...args} />
  </Stack>
);

export const RenderPDFWithViewer = Template.bind({});
RenderPDFWithViewer.args = {
  src: testFilePDF,
};

export const RenderImageWithViewer = Template.bind({});
RenderImageWithViewer.args = {
  src: testImage,
  sx: { height: 200 },
};

export const RenderPDFWithoutViewer = Template.bind({});
RenderPDFWithoutViewer.args = {
  isViewerActive: false,
  src: testFilePDF,
};

export const RenderImageWithoutViewer = Template.bind({});
RenderImageWithoutViewer.args = {
  isViewerActive: false,
  src: testImage,
  sx: { height: 200 },
};

export default {
  component: FileViewer,
  title: "Components/Data Display/FileViewer",
} as Meta<typeof FileViewer>;
