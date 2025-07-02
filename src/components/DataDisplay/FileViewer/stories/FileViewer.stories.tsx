import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import FileViewer from "@/components/DataDisplay/FileViewer";
import Button from "@/components/Inputs/Button";

const testFilePDF = "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf";
const testImage = "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e";

const Template: StoryFn<typeof FileViewer> = (args) => {
  const { width, disableLightbox } = args;

  return (
    <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
      <FileViewer src={testFilePDF} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>
  );
};

const TemplateNoThumb: StoryFn<typeof FileViewer> = (args) => {
  const [pathFile, setPathFile] = useState<string>("");
  const [openLightBox, setOpenLightBox] = useState<boolean>(false);

  const handleOpenLightBoxPDF = () => {
    setPathFile(testFilePDF);
    setOpenLightBox(!openLightBox);
  };

  const handleOpenLightBoxImage = () => {
    setPathFile(testImage);
    setOpenLightBox(!openLightBox);
  };

  const handleCloseLightBox = () => {
    setOpenLightBox(false);
  };

  return (
    <>
      <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
        <Button variant="contained" onClick={handleOpenLightBoxPDF}>
          Open PDF
        </Button>
        <Button variant="outlined" onClick={handleOpenLightBoxImage}>
          Open Image
        </Button>
      </Stack>
      <FileViewer {...args} src={pathFile} open={openLightBox} onClose={handleCloseLightBox} />
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  width: 220,
};

export const DisableLightbox = Template.bind({});
DisableLightbox.args = {
  disableLightbox: true,
  width: 220,
};

export const DisableThumb = TemplateNoThumb.bind({});
DisableThumb.args = {
  disableThumb: true,
  width: 220,
};

export const RoundedVariant = Template.bind({});
RoundedVariant.args = {
  variant: "rounded",
  width: 220,
};

export const Thumbnail = Template.bind({});
Thumbnail.args = {
  src: "https://placehold.co/1000",
  srcThumb: "https://placehold.co/500",
  variant: "rounded",
  width: 220,
};

export const Document = Template.bind({});
Document.args = {
  fileName: "Document CSV",
  height: 115,
  src: "https://app.api.dev.tracktor.fr/files/bookings/000039906/15ce1b4d-3da4-9543-2640-f267cd668130.csv",
  width: 174,
};

export const NotFound = Template.bind({});
NotFound.args = {
  src: "https://a.a/a.png",
};

export default {
  component: FileViewer,
  title: "Components/Data Display/FileViewer",
} as Meta<typeof FileViewer>;
