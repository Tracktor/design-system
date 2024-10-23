import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import FileViewer from "@/components/DataDisplay/FileViewer";

const Template: StoryFn<typeof FileViewer> = (args) => (
  <Stack height={200}>
    <FileViewer {...args} />
  </Stack>
);

export const PdfThumbnailViewer = Template.bind({});
PdfThumbnailViewer.args = {
  srcThumbnail: "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf",
};

export const PdfFileViewer = Template.bind({});
PdfFileViewer.args = {
  srcFileViewer: "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf",
  srcThumbnail: "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf",
};

export const ImageThumbnailViewer = Template.bind({});
ImageThumbnailViewer.args = {
  srcThumbnail: "https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png",
};

export const ImageFileViewer = Template.bind({});
ImageFileViewer.args = {
  srcFileViewer: "https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png",
  srcThumbnail: "https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png",
};

export default {
  component: FileViewer,
  title: "Components/Data Display/FileViewer",
} as Meta<typeof FileViewer>;
