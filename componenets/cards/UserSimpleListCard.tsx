import { Avatar, Box, Button, Flex, Text, Wrap } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const UserSimpleListCard = (props: any) => {
  return (
    <div>
      <Box rounded="md">
        <Flex justify="space-between">
          <Wrap>
            <Avatar src={props.avatar} />
            <Text>{props.username}</Text>
          </Wrap>
          <Button>دنبال کردن</Button>
        </Flex>
      </Box>
    </div>
  );
};

export default UserSimpleListCard;
