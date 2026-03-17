import { Box, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useCallback, useState } from "react";
import Chat from "@/components/DataDisplay/Chat/Chat";
import type { ChatMessage, ChatParticipant, ChatSearchUser, ChatThread } from "@/components/DataDisplay/Chat/types";

const now = new Date();
const yesterday = new Date(now.getTime() - 86400000);
const twoDaysAgo = new Date(now.getTime() - 172800000);

const participants: ChatParticipant[] = [
  { avatar: null, firstName: "Alice", lastName: "Martin", userId: "user-1" },
  { avatar: null, firstName: "Bob", lastName: "Dupont", userId: "user-2" },
  { avatar: null, firstName: "Claire", lastName: "Bernard", userId: "user-3" },
];

const searchUsers: ChatSearchUser[] = [
  { avatar: null, email: "david.leroy@example.com", firstName: "David", id: "user-4", lastName: "Leroy" },
  { avatar: null, email: "emma.moreau@example.com", firstName: "Emma", id: "user-5", lastName: "Moreau" },
  { avatar: null, email: "francois.petit@example.com", firstName: "François", id: "user-6", lastName: "Petit" },
];

const threads: ChatThread[] = [
  {
    createdAt: twoDaysAgo.toISOString(),
    id: "thread-1",
    lastMessagePreview: "Sure, I'll send you the details right away!",
    participants: [participants[0], participants[1]],
    unreadCount: 2,
    updatedAt: now.toISOString(),
  },
  {
    createdAt: twoDaysAgo.toISOString(),
    id: "thread-2",
    lastMessagePreview: "The worksite visit is confirmed for tomorrow",
    participants: [participants[2]],
    unreadCount: 0,
    updatedAt: yesterday.toISOString(),
  },
  {
    createdAt: twoDaysAgo.toISOString(),
    id: "thread-3",
    lastMessagePreview: "Thanks for the update",
    participants: [participants[0], participants[1], participants[2]],
    unreadCount: 0,
    updatedAt: twoDaysAgo.toISOString(),
  },
];

const messagesThread1: ChatMessage[] = [
  { authorId: "user-1", body: "Hey! How's the project going?", createdAt: yesterday.toISOString(), id: "msg-1" },
  { authorId: "current-user", body: "Going well! We're on track for delivery.", createdAt: yesterday.toISOString(), id: "msg-2" },
  { authorId: "user-1", body: "Great to hear. Can you send me the latest report?", createdAt: now.toISOString(), id: "msg-3" },
  {
    authorId: "current-user",
    body: "Sure, I'll send you the details right away!",
    createdAt: now.toISOString(),
    id: "msg-4",
  },
  {
    authorId: "user-1",
    body: "Also check this link: https://example.com/booking/123",
    createdAt: now.toISOString(),
    id: "msg-5",
  },
];

const CURRENT_USER_ID = "current-user";

const FullExample: StoryFn = () => {
  const [selectedThreadId, setSelectedThreadId] = useState("thread-1");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [localMessages, setLocalMessages] = useState<ChatMessage[]>(messagesThread1);

  const handleSendMessage = useCallback((_threadId: string, body: string) => {
    setLocalMessages((prev) => [
      ...prev,
      { authorId: CURRENT_USER_ID, body, createdAt: new Date().toISOString(), id: `msg-${Date.now()}` },
    ]);
  }, []);

  return (
    <Chat height="100vh">
      <Chat.Body>
        <Chat.ConversationList
          threads={threads}
          selectedThreadId={selectedThreadId}
          onSelectThread={setSelectedThreadId}
          onNewConversation={() => setDialogOpen(true)}
        />
        <Chat.ConversationDetail
          threadId={selectedThreadId}
          participants={threads.find((t) => t.id === selectedThreadId)?.participants}
          messages={selectedThreadId === "thread-1" ? localMessages : []}
          currentUserId={CURRENT_USER_ID}
          onDeleteConversation={() => {}}
          onNewConversation={() => setDialogOpen(true)}
          onSendMessage={handleSendMessage}
          onAddParticipants={() => {}}
          onSearchParticipants={() => {}}
          searchResults={searchUsers}
        />
      </Chat.Body>
      <Chat.ParticipantDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={() => setDialogOpen(false)}
        onSearch={() => {}}
        searchResults={searchUsers}
      />
    </Chat>
  );
};

export const Default = FullExample.bind({});

const ConversationListTemplate: StoryFn = (args) => (
  <Chat height="100vh">
    <Chat.ConversationList threads={threads} selectedThreadId="thread-1" onSelectThread={() => {}} onNewConversation={() => {}} {...args} />
  </Chat>
);

export const ConversationList = ConversationListTemplate.bind({});

export const ConversationListLoading = ConversationListTemplate.bind({});
ConversationListLoading.args = {
  isLoading: true,
  threads: undefined,
};

const FIRST_NAMES = ["Alice", "Bob", "Claire", "David", "Emma", "François", "Gabriel", "Hélène", "Ivan", "Julie"];
const LAST_NAMES = ["Martin", "Dupont", "Bernard", "Leroy", "Moreau", "Petit", "Roux", "Simon", "Laurent", "Michel"];
const PREVIEWS = [
  "Sure, I'll send you the details!",
  "The worksite visit is confirmed",
  "Thanks for the update",
  "Can we reschedule?",
  "I'll check and get back to you",
  "Sounds good, let's proceed",
  "Please review the document",
  "Meeting moved to 3pm",
];

const generateThreads = (count: number, startIndex: number): ChatThread[] =>
  Array.from({ length: count }, (_, i) => {
    const idx = startIndex + i;
    const date = new Date(now.getTime() - idx * 3600000);
    return {
      createdAt: date.toISOString(),
      id: `thread-${idx}`,
      lastMessagePreview: PREVIEWS[idx % PREVIEWS.length],
      participants: [
        {
          avatar: null,
          firstName: FIRST_NAMES[idx % FIRST_NAMES.length],
          lastName: LAST_NAMES[idx % LAST_NAMES.length],
          userId: `user-${idx}`,
        },
        {
          avatar: null,
          firstName: FIRST_NAMES[(idx + 3) % FIRST_NAMES.length],
          lastName: LAST_NAMES[(idx + 3) % LAST_NAMES.length],
          userId: `user-${idx}-2`,
        },
      ],
      unreadCount: idx % 4 === 0 ? idx % 5 : 0,
      updatedAt: date.toISOString(),
    };
  });

const PAGE_SIZE = 10;
const TOTAL_ITEMS = 80;

const ConversationListInfiniteScrollTemplate: StoryFn = () => {
  const [allThreads, setAllThreads] = useState<ChatThread[]>(() => generateThreads(PAGE_SIZE, 0));
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const hasMore = allThreads.length < TOTAL_ITEMS;

  const handleLoadMore = useCallback(() => {
    if (isLoadingMore) {
      return;
    }

    setIsLoadingMore(true);

    // Simulate API delay
    setTimeout(() => {
      setAllThreads((prev) => [...prev, ...generateThreads(PAGE_SIZE, prev.length)]);
      setIsLoadingMore(false);
    }, 800);
  }, [isLoadingMore]);

  return (
    <Chat height="100vh">
      <Chat.ConversationList
        threads={allThreads}
        selectedThreadId="thread-0"
        onSelectThread={() => {}}
        onNewConversation={() => {}}
        onLoadMore={handleLoadMore}
        hasMore={hasMore}
      />
    </Chat>
  );
};

export const ConversationListInfiniteScroll = ConversationListInfiniteScrollTemplate.bind({});

export const ConversationListFirstNameOnly = ConversationListTemplate.bind({});
ConversationListFirstNameOnly.args = {
  formatParticipantName: (p: ChatParticipant) => p.firstName,
};

const ConversationDetailTemplate: StoryFn = (args) => (
  <Chat height="100vh">
    <Chat.ConversationDetail
      threadId="thread-1"
      participants={[participants[0], participants[1]]}
      messages={messagesThread1}
      currentUserId={CURRENT_USER_ID}
      onDeleteConversation={() => {}}
      onNewConversation={() => {}}
      onSendMessage={() => {}}
      onAddParticipants={() => {}}
      {...args}
    />
  </Chat>
);

export const ConversationDetail = ConversationDetailTemplate.bind({});

export const ConversationDetailLoading = ConversationDetailTemplate.bind({});
ConversationDetailLoading.args = {
  isLoading: true,
  messages: undefined,
};

export const ConversationDetailEmpty: StoryFn = () => (
  <Chat height="100vh">
    <Chat.ConversationDetail
      participants={null}
      messages={undefined}
      currentUserId={CURRENT_USER_ID}
      onDeleteConversation={() => {}}
      onNewConversation={() => {}}
      onSendMessage={() => {}}
      onAddParticipants={() => {}}
    />
  </Chat>
);

const MessageInputTemplate: StoryFn = () => (
  <Box maxWidth={500}>
    <Chat.MessageInput onSend={() => {}} />
  </Box>
);

export const MessageInput = MessageInputTemplate.bind({});

const MessageBubbleTemplate: StoryFn = () => (
  <Stack spacing={3} maxWidth={500} p={3}>
    <Chat.MessageBubble
      isOwn={false}
      message={{ authorId: "user-1", body: "Hello! How are you doing today?", createdAt: now.toISOString(), id: "1" }}
      participants={[participants[0]]}
    />
    <Chat.MessageBubble
      isOwn
      message={{ authorId: CURRENT_USER_ID, body: "I'm doing great, thanks for asking!", createdAt: now.toISOString(), id: "2" }}
    />
    <Chat.MessageBubble
      isOwn={false}
      message={{
        authorId: "user-1",
        body: "Check out this link: https://example.com/some-page",
        createdAt: now.toISOString(),
        id: "3",
      }}
      participants={[participants[0]]}
    />
  </Stack>
);

export const MessageBubble = MessageBubbleTemplate.bind({});

export default {
  parameters: {
    layout: "fullscreen",
  },
  title: "Components/Data Display/Chat",
} as Meta;
