import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import FileViewer from "@/components/DataDisplay/FileViewer";

const testFilePDF = "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf";
const testImage = "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e";

const Template: StoryFn<typeof FileViewer> = (args) => (
  <Stack height="100%" alignItems="center" justifyContent="center">
    <FileViewer {...args} />
  </Stack>
);

export const Image = Template.bind({});
Image.args = {
  src: testImage,
  sx: { height: 200 },
};

export const PDF = Template.bind({});
PDF.args = {
  src: testFilePDF,
};

export const DisableLightboxImage = Template.bind({});
DisableLightboxImage.args = {
  disableLightbox: true,
  src: testImage,
  sx: { height: 200 },
};

export const DisableLightboxPDF = Template.bind({});
DisableLightboxPDF.args = {
  disableLightbox: true,
  src: testFilePDF,
};

export default {
  component: FileViewer,
  title: "Components/Data Display/FileViewer",
} as Meta<typeof FileViewer>;
