import { Avatar, Box, Chip, ChipProps, List, ListItem, ListItemProps, ListItemText, Stack, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

interface ListAvatarProps {
  sx?: SxProps;
  fullWidth?: boolean;
  alwaysDisplaySecondaryAction?: boolean;
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

export const ListAvatar = ({ data, fullWidth, sx, alwaysDisplaySecondaryAction }: ListAvatarProps) => (
  <List
    sx={{
      minWidth: 250,
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
              backgroundColor: ({ palette }) => palette.action.hover,
            },
            borderRadius: 1,
            cursor: onClick ? "pointer" : "default",
            padding: 0.5,
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

export default ListAvatar;
