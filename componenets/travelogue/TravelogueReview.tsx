import {
  Avatar,
  Box,
  Divider,
  Text,
  Wrap,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { UserType } from '../../graphql/generated/types';

interface Props {
  author: Pick<UserType, 'id' | 'username' | 'avatar'> | undefined;
  createdAt: string | undefined;
  description: string;
}

const TravelogueReview = (props: Props) => {
  return (
    <div>
      <Box
        fontWeight="light"
        rounded="md"
        bgColor={useColorModeValue('gray.100', 'gray.900')}
        p="3"
      >
        <Stack>
          <Wrap align="center">
            <Avatar src={props.author?.avatar} />
            <Text>{props.author?.username}</Text>
          </Wrap>
          <Divider />
          <Text>{props.description}</Text>
        </Stack>
      </Box>
    </div>
  );
};

export default TravelogueReview;
