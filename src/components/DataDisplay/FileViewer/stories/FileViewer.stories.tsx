import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import testImage from "@/assets/img/test-image.jpg";
import FileViewer from "@/components/DataDisplay/FileViewer";

const testFilePDF = "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf";

const Template: StoryFn<typeof FileViewer> = (args) => (
  <Stack height={200}>
    <FileViewer {...args} />
  </Stack>
);

export const RenderPDFWithViewer = Template.bind({});
RenderPDFWithViewer.args = {
  srcFileViewer: testFilePDF,
  srcThumbnail: testFilePDF,
};

export const RenderImageWithViewer = Template.bind({});
RenderImageWithViewer.args = {
  srcFileViewer: testImage,
  srcThumbnail: testImage,
};

export const RenderPDFWithNoViewer = Template.bind({});
RenderPDFWithNoViewer.args = {
  srcThumbnail: testFilePDF,
};

export const RenderImageWithNoViewer = Template.bind({});
RenderImageWithNoViewer.args = {
  srcThumbnail: testImage,
};

export default {
  component: FileViewer,
  title: "Components/Data Display/FileViewer",
} as Meta<typeof FileViewer>;
