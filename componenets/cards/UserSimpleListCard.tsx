import { Avatar, Box, Button, Flex, Text, Wrap } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface Props {}

const UserSimpleListCard = (props: any) => {
  return (
    <div>
      <Link href={`/profile/${props.id}`} passHref>
        <Box rounded="md" shadow="md" p="2" cursor="pointer">
          <Flex justify="space-between">
            <Wrap align="center">
              <Avatar src={props.avatar} />
              <Text>{props.username}</Text>
            </Wrap>
          </Flex>
        </Box>
      </Link>
    </div>
  );
};

export default UserSimpleListCard;
