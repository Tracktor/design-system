import { ElementType, isValidElement } from "react";
import worksiteCartoonImg from "@/assets/img/worksite-cartoon.png";
import { KanbanProps } from "@/components/DataDisplay/Kanban/Kanban";
import { Box, Button, Card, CardContent, Stack, Typography } from "@/main";

interface EmptyStateOverlayProps {
  Link: ElementType;
  emptyState?: KanbanProps["emptyState"];
}

const EmptyStateOverlay = ({ Link, emptyState }: EmptyStateOverlayProps) => {
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
          <Typography variant="h3">{emptyState?.title}</Typography>
          <Typography variant="body3">{emptyState?.description}</Typography>
          <Box textAlign="center" mt={3}>
            <Button variant="contained" to={emptyState?.buttonLink} component={Link}>
              {emptyState?.buttonText}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default EmptyStateOverlay;
