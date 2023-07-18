// ChatMessage.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface ChatMessageProps {
  message: string;
  timestamp: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, timestamp }) => {
  return (
    <Box mb={2}>
      <Text>{message}</Text>
      <Text fontSize="sm" color="gray.500">
        {timestamp}
      </Text>
    </Box>
  );
};

export default ChatMessage;
