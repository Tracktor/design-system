import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { getInitials } from "@tracktor/react-utils";
import { useState } from "react";
import Avatar from "@/components/DataDisplay/Avatar";
import type { ChatConversationListProps } from "@/components/DataDisplay/Chat/types";
import ensureUtc from "@/components/DataDisplay/Chat/utils/ensureUtc";
import formatParticipantNames from "@/components/DataDisplay/Chat/utils/formatParticipantNames";
import PenLineIcon from "@/components/DataDisplay/Icons/PenLineIcon";
import SearchIcon from "@/components/DataDisplay/Icons/SearchIcon";

const defaultFormatDate = (date: string): string => {
  const d = new Date(ensureUtc(date));
  const now = new Date();

  if (d.toDateString() === now.toDateString()) {
    return d.toLocaleTimeString(undefined, { hour: "2-digit", hour12: false, minute: "2-digit" });
  }

  if (d.getFullYear() === now.getFullYear()) {
    return d.toLocaleDateString(undefined, { day: "numeric", month: "long" });
  }

  return d.toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" });
};

const ChatConversationList = ({
  threads,
  isLoading,
  selectedThreadId,
  onSelectThread,
  onNewConversation,
  avatarSrcResolver,
  labels,
  formatDate,
}: ChatConversationListProps) => {
  const [search, setSearch] = useState("");
  const getDate = formatDate ?? defaultFormatDate;

  const filteredThreads = threads?.filter((thread) =>
    formatParticipantNames(thread?.participants).toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Stack
      sx={{
        backgroundColor: "grey.A100",
        borderRight: ({ palette }) => `1px solid ${palette.divider}`,
        height: "100%",
        minWidth: 300,
        width: 300,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" px={2} py={1.5}>
        <Typography variant="h3" fontWeight={600}>
          {labels?.messages ?? "Messages"}
        </Typography>
        <IconButton size="small" onClick={onNewConversation}>
          <PenLineIcon />
        </IconButton>
      </Stack>
      <Box px={2} pb={1.5}>
        <TextField
          size="xSmall"
          fullWidth
          placeholder={labels?.search ?? "Search"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
      <Divider />
      <List disablePadding sx={{ flex: 1, overflowY: "auto" }}>
        {isLoading &&
          Array.from({ length: 6 }, (_, i) => (
            <ListItemButton key={i} sx={{ px: 2, py: 1.5 }}>
              <ListItemAvatar>
                <Skeleton variant="circular" width={40} height={40} />
              </ListItemAvatar>
              <ListItemText primary={<Skeleton variant="text" width="60%" />} secondary={<Skeleton variant="text" width="40%" />} />
            </ListItemButton>
          ))}
        {filteredThreads?.map((thread) => {
          const participantNamesList = formatParticipantNames(thread?.participants);

          return (
            <ListItemButton
              key={thread.id}
              selected={thread.id === selectedThreadId}
              onClick={() => onSelectThread(thread.id)}
              sx={{ px: 2, py: 1.5 }}
            >
              <ListItemAvatar>
                <Avatar
                  src={avatarSrcResolver?.(thread.participants?.[0]?.avatar)}
                  secondarySrc={avatarSrcResolver?.(thread.participants?.slice(1).find((p) => p.avatar)?.avatar)}
                  showSecondaryAvatar={!!thread.participants && thread.participants.length > 1}
                  secondaryAvatarProps={{
                    sx: {
                      height: 25,
                      right: 6,
                      width: 25,
                    },
                  }}
                  sx={{
                    height: 40,
                    width: 40,
                  }}
                >
                  {getInitials({ firstName: thread.participants?.[0]?.firstName, lastName: thread.participants?.[0]?.lastName }, true)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                    <Typography noWrap variant="body2" fontWeight={thread.unreadCount ? 700 : 400}>
                      {participantNamesList}
                    </Typography>
                    <Typography noWrap variant="caption" color="text.secondary" flexShrink={0}>
                      {getDate(thread.updatedAt ?? thread.createdAt)}
                    </Typography>
                  </Stack>
                }
                secondary={
                  <Stack component="span" direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                    <Typography variant="caption" color="text.secondary" noWrap component="span" sx={{ flex: 1, minWidth: 0 }}>
                      {thread.lastMessagePreview}
                    </Typography>
                    {!!thread.unreadCount && (
                      <Box
                        component="span"
                        sx={{
                          alignItems: "center",
                          backgroundColor: "primary.main",
                          borderRadius: "50%",
                          color: "primary.contrastText",
                          display: "flex",
                          flexShrink: 0,
                          fontSize: 11,
                          fontWeight: 700,
                          height: 18,
                          justifyContent: "center",
                          lineHeight: 0,
                          minWidth: 18,
                          width: 18,
                        }}
                      >
                        {thread.unreadCount}
                      </Box>
                    )}
                  </Stack>
                }
              />
            </ListItemButton>
          );
        })}
      </List>
    </Stack>
  );
};

export default ChatConversationList;
