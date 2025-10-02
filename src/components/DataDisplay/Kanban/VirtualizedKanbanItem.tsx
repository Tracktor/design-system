import { CSSProperties, ElementType } from "react";
import ArticleImage from "@/components/DataDisplay/ArticleImage";
import { computeKanbanCardHeight, KanbanDataItemProps, KanbanProps } from "@/components/DataDisplay/Kanban/Kanban";
import { Typography, Box, Card, Chip, Stack, Tooltip, useTheme } from "@/main";

const IMG_SIZE = 40;

// Avoid body scrollbar appearing when tooltip is displayed and user scrolls
const POPPER_KANBAN = {
  sx: {
    "&[data-popper-reference-hidden]": {
      display: "none",
      pointerEvents: "none",
    },
  },
};

type KanbanItemProps = {
  index: number;
  style: CSSProperties;
  data: {
    previewBookingId: string;
    gutterSize: number;
    onClickItem: KanbanProps["onClickItem"];
    items: KanbanDataItemProps[];
    Link: ElementType;
  };
};

const VirtualizedKanbanItem = ({ index, style, data }: KanbanItemProps) => {
  const { palette } = useTheme();
  const { items, onClickItem, previewBookingId, gutterSize, Link } = data;

  const { title, subtitles, tag, image, id, link, Footer, Alert, RightFooter, secondaryImage, secondaryImageText, imageTitle } =
    items[index];

  const active = previewBookingId === id;

  return (
    <div
      style={{
        ...style,
        paddingLeft: gutterSize,
        paddingRight: gutterSize,
      }}
    >
      <Card
        component={link ? Link : "div"}
        variant="elevation"
        elevation={palette.mode === "dark" ? 5 : 0}
        to={link || "#"}
        onClick={() => onClickItem?.(id)}
        sx={{
          "&:hover": {
            boxShadow: 8,
          },
          ".grabbing &": {
            cursor: "grabbing",
            pointerEvents: "none",
          },
          background: `${active ? palette.grey[50] : "none"}`,
          border: `1px solid ${active ? palette.action.active : palette.divider}`,
          boxShadow: "0px 0 8px 0 rgba(0, 0, 0, 0.10), 0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 1px 3px 0px rgba(0, 0, 0, 0.03)",
          cursor: "pointer",
          flexShrink: 0,
          height: computeKanbanCardHeight({ Footer, RightFooter, subtitles } as KanbanDataItemProps),
          p: 1.5,
          textDecoration: "none",
        }}
      >
        <Stack direction="row" spacing={1} flex={1} overflow="hidden">
          <Box>
            <Tooltip title={imageTitle} enterDelay={300} enterNextDelay={300}>
              <span>
                <ArticleImage
                  src={image}
                  secondarySrc={secondaryImage}
                  secondaryAvatarProps={
                    secondaryImageText
                      ? {
                          children: secondaryImageText,
                          sx: {
                            height: 24,
                            width: 24,
                          },
                        }
                      : undefined
                  }
                  alt={title}
                  width={IMG_SIZE}
                  height={IMG_SIZE}
                />
              </span>
            </Tooltip>
          </Box>

          <Stack sx={{ flex: 1, overflow: "hidden", position: "relative", whiteSpace: "nowrap" }}>
            <Stack direction="row" spacing={1} flex={1}>
              <Stack flex={1} overflow="hidden">
                <Tooltip title={title} enterDelay={300} enterNextDelay={300} slotProps={{ popper: POPPER_KANBAN }}>
                  <Typography variant="h6" noWrap>
                    {title}
                  </Typography>
                </Tooltip>

                {subtitles?.map(({ text, LeftIcon }) => (
                  <Tooltip key={text} title={text} enterDelay={300} enterNextDelay={300} slotProps={{ popper: POPPER_KANBAN }}>
                    <Stack direction="row" alignItems="center" spacing={0.5} overflow="hidden">
                      {LeftIcon}
                      <Typography variant="body3" color="textSecondary" noWrap>
                        {text}
                      </Typography>
                    </Stack>
                  </Tooltip>
                ))}
              </Stack>

              <Stack alignItems="stretch" justifyContent="space-between">
                <Stack spacing={1} direction="row" alignItems="center">
                  {Alert && Alert}
                  <Chip label={tag} variant="rounded" color="default" size="small" />
                </Stack>
              </Stack>
            </Stack>

            {(Footer || RightFooter) && (
              <Stack spacing={1} direction="row" alignItems="center" mt={1}>
                {Footer && <Box flex={1}>{Footer}</Box>}
                {RightFooter}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};

export default VirtualizedKanbanItem;
