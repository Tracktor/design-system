import { Alert, Card, CardContent, ChipProps, Skeleton, Stack, SxProps, Typography } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";
import StatusIcon from "@/components/DataDisplay/StatusIcon";
import TimeLineEventItem from "@/components/DataDisplay/TimeLine/TimeLineEventItem";

export interface TimeLineProps {
  containerStyle?: SxProps;
  isLoading?: boolean;
  emptyMessage?: string;
  data?: {
    Icon?: ReactNode;
    Action?: ReactNode;
    Footer?: ReactNode;
    key?: string;
    title?: string;
    subtitle?: string;
    isLastElement: boolean;
    active?: boolean;
    onClick?(): void;
    tag?: {
      label: string;
      color?: ChipProps["color"];
    };
  }[];
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

const TimeLine = ({ data, isLoading, emptyMessage, containerStyle }: TimeLineProps) => {
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

  if (!data?.length && !isLoading) {
    return (
      <CardContainer sx={containerStyle}>
        <Alert severity="info">{emptyMessage}</Alert>
      </CardContainer>
    );
  }

  return (
    <CardContainer sx={containerStyle}>
      {data?.map(({ Action, subtitle, key, active, Footer, Icon, isLastElement, onClick, tag, title }) => (
        <TimeLineEventItem
          key={key}
          active={active}
          title={title}
          subtitle={subtitle}
          Footer={Footer}
          Icon={Icon}
          isLastElement={isLastElement}
          onClick={onClick}
          Action={Action}
          tag={tag}
        />
      ))}
    </CardContainer>
  );
};
export default TimeLine;
