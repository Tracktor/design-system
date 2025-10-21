import {
  Box,
  Chip,
  ChipProps,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemButtonProps,
  ListItemText,
  Skeleton,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { MouseEvent, ReactNode, useState } from "react";
import sheetsImage from "@/assets/img/sheets.png";
import Avatar from "@/components/DataDisplay/Avatar/Avatar";
import FileViewer from "@/components/DataDisplay/FileViewer";
import isDocumentType from "@/utils/isDocumentType";
import isValidUrl from "@/utils/isValidUrl";

interface ListAvatarItemBase {
  Avatar?: ReactNode;
  id?: string | number | null;
  title?: ReactNode;
  subtitle?: ReactNode;
  image?: string | null;
  thumbnail?: string | null;
  thumbnailSecondary?: string | null;
  icon?: ReactNode;
  chipLabel?: ReactNode;
  chipColor?: ChipProps["color"] | string;
  secondaryAction?: ReactNode;
  divider?: boolean;
}

export interface ListAvatarClickPayload {
  id?: string | number | null;
  image?: string | null;
  thumbnail?: string | null;
  subtitle?: ReactNode;
  title?: ReactNode;
  icon?: ReactNode;
  isFile: boolean;
  isPdf: boolean;
}

export interface ListAvatarAction {
  title?: string | null;
  subtitle?: string | null;
  image?: string | null;
  icon?: ReactNode;
  onClick?: ListItemButtonProps["onClick"];
}

export interface ListAvatarItem extends ListAvatarItemBase {
  onClick?: (event: MouseEvent<HTMLLIElement>, item: ListAvatarClickPayload) => void;
}

export interface ListAvatarProps {
  /**
   * Empty message
   */
  Empty?: ReactNode;
  /**
   * Custom style
   */
  sx?: SxProps;
  /**
   * Full width
   */
  fullWidth?: boolean;
  /**
   * Always display secondary action
   */
  alwaysDisplaySecondaryAction?: boolean;
  /**
   * If true, the list is loading state
   */
  isLoading?: boolean;
  /**
   * Number of items to display
   */
  numberLoadingItems?: number;
  /**
   * Disable lightbox only if the image list item is provided
   */
  disableLightbox?: boolean;
  /**
   * List items
   */
  items?: ListAvatarItem[];
  /**
   * Action
   */
  action?: ListAvatarAction;
}

const AVATAR_MARGIN_RIGHT = 1;

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

const isChipColor = (color: ChipProps["color"] | string): color is ChipProps["color"] => typeof color === "string";

export const ListAvatar = ({
  Empty,
  action,
  items,
  fullWidth,
  sx,
  alwaysDisplaySecondaryAction,
  isLoading,
  disableLightbox,
  numberLoadingItems = 3,
}: ListAvatarProps) => {
  const [openElement, setOpenElement] = useState("");

  if (!(items?.length || isLoading || action)) {
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
      {items?.map(
        (
          {
            id,
            title,
            subtitle,
            image,
            thumbnail,
            thumbnailSecondary,
            secondaryAction,
            chipLabel,
            chipColor,
            onClick,
            icon,
            divider,
            Avatar: AvatarComponent,
          },
          index,
        ) => {
          const key = `key-${index}-${title}-${id}`;
          const isPdf = !!image?.toLowerCase()?.endsWith(".pdf");
          const isValidImageUrl = isValidUrl(image);
          const isValidThumbnailUrl = isValidUrl(thumbnail);
          const isFile = isDocumentType(image);
          const userSelect = onClick ? "none" : undefined;
          const lightBoxDisabled = disableLightbox || !!icon || !isValidImageUrl || isFile;
          const clickable = !!onClick || !!(!(onClick || disableLightbox) && image);
          const open = openElement === key;
          const avatarThumb = isValidThumbnailUrl ? thumbnail : "";
          const avatarImage = isValidImageUrl ? image : "";
          const avatarSrc = avatarThumb || avatarImage || "";

          if (divider) {
            return (
              <ListItem disableGutters key={key}>
                <Divider flexItem sx={{ width: "100%" }} />
              </ListItem>
            );
          }

          return (
            <ListItem
              key={key}
              secondaryAction={secondaryAction}
              onClick={(event) => {
                onClick?.(event, {
                  ...(icon && { icon }),
                  ...(id && { id }),
                  ...(image && { image }),
                  ...(subtitle && { subtitle }),
                  ...(thumbnail && { thumbnail }),
                  ...(title && { thumbnail }),
                  isFile,
                  isPdf,
                });

                if (clickable && !open && !onClick) {
                  setOpenElement(key);
                }
              }}
              sx={{
                ...styles.listItem,
                "& .MuiListItemSecondaryAction-root": {
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  opacity: alwaysDisplaySecondaryAction ? 1 : 0,
                  position: "static",
                  right: ({ spacing }: Theme) => spacing(0.5),
                  transform: "none",
                },
                "&:hover": {
                  "& .MuiListItemSecondaryAction-root": {
                    opacity: 1,
                  },
                  backgroundColor: ({ palette }: Theme) => (clickable ? palette.action.hover : "transparent"),
                },
                cursor: clickable ? "pointer" : "default",
              }}
            >
              {/* Custom avatar */}
              {AvatarComponent !== undefined && <Box marginRight={AVATAR_MARGIN_RIGHT}>{AvatarComponent}</Box>}

              {/* PDF Thumb */}
              {!AvatarComponent && isPdf && (
                <FileViewer
                  src={image}
                  srcThumb={thumbnail}
                  width={40}
                  height={40}
                  sx={{ borderRadius: 1, marginRight: AVATAR_MARGIN_RIGHT }}
                  disableLightbox={disableLightbox}
                  open={open}
                  onClose={() => setOpenElement("")}
                />
              )}

              {/* Image or avatar */}
              {!(AvatarComponent || isPdf) && (
                <FileViewer
                  disableThumb
                  src={image}
                  srcThumb={thumbnail}
                  disableLightbox={lightBoxDisabled}
                  open={open}
                  onClose={() => setOpenElement("")}
                >
                  <Avatar
                    src={isFile ? sheetsImage : avatarSrc}
                    secondarySrc={thumbnailSecondary}
                    variant="rounded"
                    sx={{ marginRight: AVATAR_MARGIN_RIGHT }}
                    slotProps={{
                      img: {
                        sx: {
                          ...(isFile && { padding: "15%" }),
                        },
                      },
                    }}
                  >
                    {!isFile && (icon || (typeof title === "string" && (title || "")?.charAt(0).toUpperCase()))}
                  </Avatar>
                </FileViewer>
              )}

              <ListItemText
                primary={
                  <Stack direction="row" alignItems="center" spacing={1}>
                    {title && (
                      <Typography variant="h6" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        {title}
                      </Typography>
                    )}
                    {chipLabel && (
                      <Chip label={chipLabel} variant="rounded" size="xSmall" color={isChipColor(chipColor) ? chipColor : "default"} />
                    )}
                  </Stack>
                }
                secondary={subtitle}
                slotProps={{
                  primary: {
                    component: "div",
                  },
                  secondary: {
                    component: "div",
                  },
                }}
                sx={{ marginY: 0, userSelect }}
              />
            </ListItem>
          );
        },
      )}
      {action && (
        <ListItemButton
          onClick={action?.onClick}
          sx={{
            ...styles.listItem,
            "&:hover": {
              backgroundColor: ({ palette }: Theme) => palette.action.hover,
            },
          }}
        >
          <Avatar src={action?.image || ""} variant="rounded" sx={{ marginRight: AVATAR_MARGIN_RIGHT }}>
            {action?.icon || action?.title?.charAt(0).toUpperCase()}
          </Avatar>
          <ListItemText
            primary={action?.title && <Typography variant="h6">{action?.title}</Typography>}
            secondary={action?.subtitle}
            sx={{ marginY: 0 }}
          />
        </ListItemButton>
      )}
    </List>
  );
};

export default ListAvatar;
