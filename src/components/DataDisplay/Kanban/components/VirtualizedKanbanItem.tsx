import { Box, Card, Stack, useTheme } from "@mui/material";
import { isString } from "@tracktor/react-utils";
import { CSSProperties, Fragment } from "react";
import ArticleImage from "@/components/DataDisplay/ArticleImage";
import Chip from "@/components/DataDisplay/Chip/Chip";
import { KanbanDataItemProps, KanbanProps } from "@/components/DataDisplay/Kanban/Kanban";
import { Tooltip } from "@/components/DataDisplay/Tooltip/stories/Tooltip";
import Typography from "@/components/DataDisplay/Typography/stories/Typography";
import Button from "@/components/Inputs/Button/stories/Button";

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

const TOOLTIP_DELAYS = { enterDelay: 300, enterNextDelay: 300 };

type KanbanItemProps = {
  index: number;
  style: CSSProperties;
  data: {
    previewBookingId: string;
    gutterSize: number;
    onClickItem: KanbanProps["onClickItem"];
    items: KanbanDataItemProps[];
  };
};

export const VirtualizedKanbanItem = ({ index, style, data }: KanbanItemProps) => {
  const { palette } = useTheme();
  const { items, onClickItem, previewBookingId, gutterSize } = data;
  const { title, subtitles, tag, image, id, Footer, Alert, RightFooter, secondaryImage, secondaryImageText, imageTitle, headerTitle } =
    items[index];

  const active = previewBookingId === id;

  const imageElement = (
    <Tooltip title={imageTitle} enterDelay={TOOLTIP_DELAYS.enterDelay} enterNextDelay={TOOLTIP_DELAYS.enterNextDelay}>
      <Box component="span">
        <ArticleImage
          src={image}
          secondarySrc={secondaryImage}
          secondaryAvatarProps={secondaryImageText ? { children: secondaryImageText, sx: { height: 24, width: 24 } } : undefined}
          alt={title}
          width={IMG_SIZE}
          height={IMG_SIZE}
        />
      </Box>
    </Tooltip>
  );

  const subtitleList = subtitles?.map(({ text, LeftIcon, onClick }, index) => {
    if (!isString(text)) {
      return <Fragment key={index}>{text}</Fragment>;
    }

    const content = (
      <Typography noWrap variant="body3" color={onClick ? "text.secondary" : "textSecondary"}>
        {text}
      </Typography>
    );

    return (
      <Stack
        key={text}
        direction="row"
        alignItems="center"
        spacing={0.5}
        overflow="hidden"
        onClick={onClick}
        sx={onClick ? { cursor: "pointer" } : undefined}
      >
        {LeftIcon}
        {onClick ? (
          <Button variant="link" sx={{ color: "text.secondary" }}>
            {content}
          </Button>
        ) : (
          content
        )}
      </Stack>
    );
  });

  const cardContent = (
    <Stack flex={1} overflow="hidden">
      <Tooltip
        title={title}
        enterDelay={TOOLTIP_DELAYS.enterDelay}
        enterNextDelay={TOOLTIP_DELAYS.enterNextDelay}
        slotProps={{ popper: POPPER_KANBAN }}
      >
        <Typography noWrap variant="h6">
          {title}
        </Typography>
      </Tooltip>

      {subtitleList}
    </Stack>
  );
  const footerElement = (Footer || RightFooter) && (
    <Stack spacing={1} direction="row" alignItems="center" mt={1}>
      {Footer && <Box flex={1}>{Footer}</Box>}
      {RightFooter}
    </Stack>
  );

  const tagsAlertElement = (
    <Stack spacing={1} direction="row" alignItems="center">
      {Alert}
      <Chip label={tag} variant="rounded" color="default" size="small" />
    </Stack>
  );

  return (
    <Box
      component="div"
      style={{
        ...style,
        paddingLeft: gutterSize,
        paddingRight: gutterSize,
      }}
    >
      <Card
        variant="elevation"
        elevation={palette.mode === "dark" ? 5 : 0}
        onClick={() => onClickItem?.(id)}
        sx={{
          ".grabbing &": {
            cursor: "grabbing",
            pointerEvents: "none",
          },
          "&:hover": {
            boxShadow: 8,
          },
          background: `${active ? palette.grey[50] : "none"}`,
          border: `1px solid ${active ? palette.action.active : palette.divider}`,
          boxShadow: "0px 0 8px 0 rgba(0, 0, 0, 0.10), 0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 1px 3px 0px rgba(0, 0, 0, 0.03)",
          cursor: "pointer",
          flexShrink: 0,
          p: 1.5,
          textDecoration: "none",
        }}
      >
        <Stack direction="row" spacing={1} flex={1} overflow="hidden">
          {headerTitle ? (
            <Stack spacing={1} flex={1} overflow="hidden">
              <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
                <Tooltip title={headerTitle}>
                  <Typography noWrap variant="body3" color="textSecondary" overflow="hidden" textOverflow="ellipsis">
                    {headerTitle}
                  </Typography>
                </Tooltip>

                <Stack spacing={0.5} direction="row" alignItems="stretch" justifyContent="flex-end" maxWidth={Alert ? "60%" : "100%"}>
                  {Alert && <Stack maxWidth="50%">{Alert}</Stack>}
                  <Chip label={tag} variant="rounded" color="default" size="small" sx={{ maxWidth: Alert ? "50%" : "100%" }} />
                </Stack>
              </Stack>

              <Stack direction="row" spacing={1} flex={1} overflow="hidden">
                {imageElement}
                <Stack sx={{ flex: 1, overflow: "hidden", position: "relative", whiteSpace: "nowrap" }}>
                  {cardContent}
                  {footerElement}
                </Stack>
              </Stack>
            </Stack>
          ) : (
            <>
              {imageElement}
              <Stack sx={{ flex: 1, overflow: "hidden", position: "relative", whiteSpace: "nowrap" }}>
                <Stack direction="row" spacing={1} flex={1}>
                  {cardContent}
                  <Stack alignItems="stretch" justifyContent="space-between">
                    {tagsAlertElement}
                  </Stack>
                </Stack>
                {footerElement}
              </Stack>
            </>
          )}
        </Stack>
      </Card>
    </Box>
  );
};

export default VirtualizedKanbanItem;
