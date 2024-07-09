import {
  Avatar,
  Box,
  Chip,
  ChipProps,
  List,
  ListItem,
  ListItemProps,
  ListItemText,
  Skeleton,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

interface ListAvatarProps {
  Empty?: ReactNode;
  sx?: SxProps;
  fullWidth?: boolean;
  alwaysDisplaySecondaryAction?: boolean;
  isLoading?: boolean;
  numberLoadingItems?: number;
  data?: {
    id?: string | number | null;
    title?: string | null;
    subtitle?: string | null;
    image?: string | null;
    icon?: ReactNode;
    chipLabel?: ReactNode;
    chipColor?: ChipProps["color"] | string;
    secondaryAction?: ReactNode;
    onClick?: ListItemProps["onClick"];
    Avatar?: ReactNode;
  }[];
}

const AVATAR_MARGIN_RIGHT = 1;

const isChipColor = (color: ChipProps["color"] | string): color is ChipProps["color"] => typeof color === "string";

const styles = {
  list: {
    marginLeft: ({ spacing }: Theme) => `-${spacing(0.5)} !important`,
    marginRight: ({ spacing }: Theme) => `-${spacing(0.5)} !important`,
    minWidth: 250,
  },
  listItem: {
    borderRadius: 1,
    padding: 0.5,
  },
};

export const ListAvatar = ({
  Empty,
  data,
  fullWidth,
  sx,
  alwaysDisplaySecondaryAction,
  isLoading,
  numberLoadingItems = 3,
}: ListAvatarProps) => {
  if (!data?.length && !isLoading) {
    return Empty || null;
  }

  if (isLoading) {
    return (
      <List
        sx={{
          ...styles.list,
          ...(fullWidth && { width: "100%" }),
        }}
      >
        {[...Array(numberLoadingItems).keys()].map((index) => (
          <ListItem key={index} sx={styles.listItem}>
            <Skeleton width={40} height={40} sx={{ marginRight: AVATAR_MARGIN_RIGHT }} variant="rounded" />
            <ListItemText
              primary={
                <Typography variant="h6">
                  <Skeleton width={90} />
                </Typography>
              }
              secondary={<Skeleton width={70} />}
              sx={{ marginY: 0 }}
            />
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <List
      sx={{
        ...styles.list,
        ...(fullWidth && { width: "100%" }),
        ...sx,
      }}
    >
      {data?.map(({ id, title, subtitle, image, secondaryAction, chipLabel, chipColor, onClick, icon, Avatar: AvatarComponent }, index) => {
        const key = id || `id-${index}-${title}`;

        return (
          <ListItem
            key={key}
            secondaryAction={secondaryAction}
            onClick={onClick}
            sx={{
              ...styles.listItem,
              "& .MuiListItemSecondaryAction-root": {
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                opacity: alwaysDisplaySecondaryAction ? 1 : 0,
              },
              "&:hover": {
                "& .MuiListItemSecondaryAction-root": {
                  opacity: 1,
                },
                backgroundColor: ({ palette }: Theme) => palette.action.hover,
              },
              cursor: onClick ? "pointer" : "default",
            }}
          >
            {AvatarComponent ? (
              <Box marginRight={AVATAR_MARGIN_RIGHT}>{AvatarComponent}</Box>
            ) : (
              <Avatar src={image || ""} variant="rounded" sx={{ marginRight: AVATAR_MARGIN_RIGHT }}>
                {icon || title?.charAt(0).toUpperCase()}
              </Avatar>
            )}
            <ListItemText
              primary={
                <Stack direction="row" alignItems="center" spacing={1}>
                  {title && <Typography variant="h6">{title}</Typography>}
                  {chipLabel && (
                    <Chip label={chipLabel} variant="rounded" size="xSmall" color={isChipColor(chipColor) ? chipColor : "default"} />
                  )}
                </Stack>
              }
              secondary={subtitle}
              sx={{ marginY: 0 }}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListAvatar;
