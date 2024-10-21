import { Stack, Button } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import FileViewer from "@/components/DataDisplay/FileViewer";

const Template: StoryFn<typeof FileViewer> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Stack height="100%" spacing={2}>
      <Button variant="contained" onClick={handleOpen}>
        open PDF
      </Button>

      <FileViewer {...args} open={isOpen} onClose={handleClose} />

      {isOpen && (
        <Button variant="contained" onClick={handleClose}>
          close PDF
        </Button>
      )}
    </Stack>
  );
};

export const PdfFileViewer = Template.bind({});
PdfFileViewer.args = {
  onClose: () => {},
  open: false,
  src: "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf",
};

export default {
  component: FileViewer,
  title: "Components/Data Display/FileViewer",
} as Meta<typeof FileViewer>;
