import { Box, Card, CardContent, Stack } from "@mui/material";
import { isValidElement } from "react";
import worksiteCartoonImg from "@/assets/img/worksite-cartoon.png";
import { KanbanProps } from "@/components/DataDisplay/Kanban/Kanban";
import Typography from "@/components/DataDisplay/Typography/stories/Typography";
import Button from "@/components/Inputs/Button/stories/Button";

const EmptyStateOverlay = ({ emptyState }: { emptyState?: KanbanProps["emptyState"] }) => {
  if (isValidElement(emptyState)) {
    return (
      <Stack
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          backgroundColor: "background.default",
          zIndex: 10,
        }}
      >
        {emptyState}
      </Stack>
    );
  }

  return (
    <Stack
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        backgroundColor: "background.default",
        zIndex: 10,
      }}
    >
      <Card sx={{ maxWidth: 370 }}>
        <Box component="img" height={170} width="100%" src={worksiteCartoonImg} sx={{ objectFit: "cover", objectPosition: "top" }} />
        <CardContent>
          <Stack>
            <Typography variant="h3">{emptyState?.title}</Typography>
            {emptyState?.description && (
              <Stack mt={1} mb={1}>
                <Typography variant="body3">{emptyState.description}</Typography>
              </Stack>
            )}

            {emptyState?.buttonText && (
              <Box textAlign="center" mt={3}>
                <Button variant="contained" onClick={emptyState?.onButtonClick}>
                  {emptyState.buttonText}
                </Button>
              </Box>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default EmptyStateOverlay;
