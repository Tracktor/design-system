import { Alert, Card, CardContent, ChipProps, Skeleton, Stack, SxProps, Typography } from "@mui/material";
import { PropsWithChildren, ReactNode, useState } from "react";
import StatusIcon from "@/components/DataDisplay/StatusIcon";
import TimeLineEventItem from "@/components/DataDisplay/TimeLine/TimeLineEventItem";
import Lightbox from "@/components/Feedback/Lightbox";

export interface TimeLineCollapseItems {
  title?: string | null;
  subtitle?: string | null;
  image?: string | string[] | null;
  onClick?(): void;
  tag?: {
    label?: string | null;
    color?: ChipProps["color"];
  };
}

export interface TimeLineItem {
  /**
   * Callback to execute when the event is clicked.
   */
  onClick?(): void;
  /**
   * Custom collapse to display below the event.
   */
  Collapse?: ReactNode;
  /**
   * Custom icon to display on the left of the event.
   */
  Icon?: ReactNode;
  /**
   * Custom action to display on the right of the event.
   */
  Action?: ReactNode;
  /**
   * Custom footer to display below the event.
   */
  Footer?: ReactNode;
  /**
   * Unique key of the event.
   */
  key?: string;
  /**
   * Title of the event.
   */
  title?: string;
  /**
   * Subtitle of the event.
   */
  subtitle?: string;
  /**
   * If true, the event is the last element and the divider will not be displayed.
   */
  isLastElement: boolean;
  /**
   * If true, the event will be displayed as active.
   */
  active?: boolean;
  /**
   * Collapse items are displayed in a list below the main event.
   */
  collapseItems?: TimeLineCollapseItems[];
  /**
   * If true, the collapse will be open by default.
   */
  collapseDefaultOpen?: boolean;
  /**
   * Tag to display between the title and the subtitle.
   */
  tag?: {
    /**
     * Label of the tag.
     */
    label?: string | null;
    /**
     * Color of the tag.
     */
    color?: ChipProps["color"];
  };
}

export interface TimeLineProps {
  /**
   * Custom style for the container.
   */
  containerStyle?: SxProps;
  /**
   * If true, skeleton loading will be displayed.
   */
  isLoading?: boolean;
  /**
   * Message to display when there are no items.
   */
  emptyMessage?: string;
  /**
   * Variant of the timeline.
   * hover: Timeline action will be displayed when hovering the event.
   * @default default
   */
  variant?: "default" | "hover";
  /**
   * List of items to display in the timeline.
   */
  items?: TimeLineItem[];
}

const CardContainer = ({ children, sx }: PropsWithChildren & { sx?: SxProps }) => (
  <Card
    sx={{
      width: "100%",
      ...sx,
    }}
  >
    <CardContent>{children}</CardContent>
  </Card>
);

const TimeLine = ({ items, isLoading, emptyMessage, containerStyle, variant }: TimeLineProps) => {
  const [lightboxSrc, setLightboxSrc] = useState("");

  if (isLoading) {
    return (
      <CardContainer sx={containerStyle}>
        <Stack spacing={3}>
          <Stack spacing={2} pt={1} pl={0.5} direction="row">
            <StatusIcon />
            <Stack>
              <Typography>
                <Skeleton width={100} />
              </Typography>
              <Typography variant="body2">
                <Skeleton width={130} />
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} pt={1} pl={0.5} direction="row">
            <StatusIcon />
            <Stack>
              <Typography>
                <Skeleton width={150} />
              </Typography>
              <Typography variant="body2">
                <Skeleton width={100} height={20} />
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} pt={1} pl={0.5} direction="row">
            <StatusIcon />
            <Stack>
              <Typography>
                <Skeleton width={80} />
              </Typography>
              <Typography variant="body2">
                <Skeleton width={110} height={20} />
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContainer>
    );
  }

  if (!items?.length && !isLoading) {
    return (
      <CardContainer sx={containerStyle}>
        <Alert severity="info">{emptyMessage}</Alert>
      </CardContainer>
    );
  }

  return (
    <>
      <CardContainer sx={containerStyle}>
        {items?.map(
          (
            {
              Action,
              Collapse,
              collapseItems,
              collapseDefaultOpen,
              subtitle,
              key,
              active,
              Footer,
              Icon,
              isLastElement,
              onClick,
              tag,
              title,
            },
            index,
          ) => {
            const keyString = `${key}-${index}-${title}`;

            return (
              <TimeLineEventItem
                key={keyString}
                Action={Action}
                Footer={Footer}
                Collapse={Collapse}
                collapseDefaultOpen={collapseDefaultOpen}
                collapseItems={collapseItems}
                active={active}
                title={title}
                subtitle={subtitle}
                Icon={Icon}
                isLastElement={isLastElement}
                onClick={onClick}
                tag={tag}
                variant={variant}
                onClickImage={(imageSrc) => {
                  console.log(imageSrc);
                  setLightboxSrc(imageSrc);
                }}
              />
            );
          },
        )}
      </CardContainer>
      <Lightbox open={!!lightboxSrc} onClose={() => setLightboxSrc("")} src={lightboxSrc} />
    </>
  );
};
export default TimeLine;
