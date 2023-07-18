// ChatScreen.tsx

import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import ChatMessage from './chatMessage';
import axios from 'axios';

const ChatScreen: React.FC = () => {
  const [chatData, setChatData] = useState<any[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchChatData();
  }, []);

  const fetchChatData = async () => {
    try {
      const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${page}`);
      const data = response.data;
      setChatData((prevData) => [...prevData, ...data]);
    } catch (error) {
      console.error('Error fetching chat data:', error);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Box p={4}>
      <Flex direction="column" align="center">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Chat Screen
        </Text>

        {chatData.map((chat) => (
          <ChatMessage key={chat.id} message={chat.message} timestamp={chat.timestamp} />
        ))}

        <Button onClick={handleLoadMore} mt={4}>
          Load More
        </Button>
      </Flex>
    </Box>
  );
};

export default ChatScreen;
