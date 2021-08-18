import { Avatar, Box, Button, Flex, Text, Wrap } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const UserSimpleListCard = (props: any) => {
  return (
    <div>
      <Box rounded="md" shadow="md" p="2">
        <Flex justify="space-between">
          <Wrap align="center">
            <Avatar src={props.avatar} />
            <Text>{props.username}</Text>
          </Wrap>
        </Flex>
      </Box>
    </div>
  );
};

export default UserSimpleListCard;
