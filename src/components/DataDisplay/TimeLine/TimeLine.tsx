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
  onClick?(): void;
  Collapse?: ReactNode;
  Icon?: ReactNode;
  Action?: ReactNode;
  Footer?: ReactNode;
  key?: string;
  title?: string;
  subtitle?: string;
  isLastElement: boolean;
  active?: boolean;
  collapseItems?: TimeLineCollapseItems[];
  tag?: {
    label?: string | null;
    color?: ChipProps["color"];
  };
}

export interface TimeLineProps {
  containerStyle?: SxProps;
  isLoading?: boolean;
  emptyMessage?: string;
  variant?: "default" | "hover";
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
          ({ Action, Collapse, collapseItems, subtitle, key, active, Footer, Icon, isLastElement, onClick, tag, title }, index) => {
            const keyString = `${key}-${index}-${title}`;

            return (
              <TimeLineEventItem
                key={keyString}
                Action={Action}
                Footer={Footer}
                Collapse={Collapse}
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
