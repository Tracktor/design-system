import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import StatusIcon from "@/components/DataDisplay/StatusIcon";
import { TimeLineProps } from "@/components/DataDisplay/TimeLine/TimeLine";

type TimeLineEventItemProps = NonNullable<TimeLineProps["data"]>[number];

const TimeLineEventItem = ({ title, subtitle, isLastElement, active, onClick, Icon, tag, Action, Footer }: TimeLineEventItemProps) => (
  <Stack direction="row" alignItems="stretch" spacing={0} mt={0.5}>
    <Box mt={0.5} textAlign="center">
      <Stack spacing={1} alignItems="center" sx={{ height: "100%", width: 32 }}>
        <>
          {Icon || <StatusIcon color={active ? "secondary" : "primary"} />}
          <Box sx={{ flex: 1 }}>
            {!isLastElement && (
              <Divider
                sx={{
                  borderColor: ({ palette }) => (active ? palette.secondary.main : palette.divider),
                  borderStyle: active ? "solid" : "dashed",
                  height: "100%",
                  minHeight: 40,
                }}
                flexItem
                orientation="vertical"
              />
            )}
          </Box>
        </>
      </Stack>
    </Box>
    <Stack flex={1} pt={0.5} pl={1} mb={1}>
      <Stack spacing={1} justifyContent="space-between" direction="row">
        <Box>
          <Typography
            component="span"
            sx={{
              "&:hover": {
                opacity: onClick ? 0.9 : 1,
              },
              cursor: onClick ? "pointer" : "default",
              marginRight: 1,
              textDecoration: onClick ? "underline" : "none",
            }}
            onClick={onClick || (() => null)}
            variant="body1"
          >
            {title}
          </Typography>
          {tag && <Chip color={tag?.color || "default"} label={tag.label} size="xSmall" variant="rounded" />}
        </Box>
        {Action && Action}
      </Stack>

      {subtitle && (
        <Typography variant="body2" color="textSecondary">
          {subtitle}
        </Typography>
      )}
      {Footer}
    </Stack>
  </Stack>
);

export default TimeLineEventItem;
