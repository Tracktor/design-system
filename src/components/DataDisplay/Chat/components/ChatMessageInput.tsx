import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { type KeyboardEvent, useRef, useState } from "react";
import type { ChatMessageInputProps } from "@/components/DataDisplay/Chat/types";
import Button from "@/components/Inputs/Button";

const RADIUS = 15;

const ChatMessageInput = ({ onSend, labels, autoFocusKey }: ChatMessageInputProps) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (!message.trim()) {
      return;
    }
    onSend(message.trim());
    setMessage("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "grey.A100",
        borderTop: ({ palette }) => `1px solid ${palette.divider}`,
        p: 2,
      }}
    >
      <TextField
        fullWidth
        multiline
        autoFocus
        key={autoFocusKey}
        inputRef={inputRef}
        maxRows={4}
        placeholder={labels?.writeAMessage ?? "Write a message..."}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": { borderColor: "divider" },
            "&.Mui-focused fieldset": {
              borderBottomWidth: 0,
              borderColor: "divider",
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderTopWidth: 1,
            },
          },
          fieldset: {
            borderBottom: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderColor: "divider",
            borderTopLeftRadius: RADIUS,
            borderTopRightRadius: RADIUS,
          },
        }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          border: ({ palette }) => `1px solid ${palette.divider}`,
          borderBottomLeftRadius: RADIUS,
          borderBottomRightRadius: RADIUS,
          padding: 1,
        }}
      >
        <Stack direction="row" spacing={1} />
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button
            variant="contained"
            size="xSmall"
            endIcon={<SendOutlinedIcon sx={{ transform: "rotate(-35deg) scale(0.8)" }} />}
            onClick={handleSend}
            disabled={!message.trim()}
          >
            {labels?.send ?? "Send"}
          </Button>
        </Stack>
      </Stack>
      <Typography variant="caption" color="text.secondary" display="block" textAlign="center" mt={0.5}>
        {labels?.enterToSend ?? "Enter to Send"}
      </Typography>
    </Box>
  );
};

export default ChatMessageInput;
