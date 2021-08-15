import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Tag,
  Wrap,
} from '@chakra-ui/react';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import { MeDetailQuery, UserNode } from '../../graphql/generated/types';
interface Props {
  data: any;
  isSelf: boolean;
}

const ProfileContainer = (props: Props) => {
  return (
    <div>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'lg'}
        rounded={'md'}
        overflow={'hidden'}
        mb="8"
      >
        <ProfileHeader isSelf={props.isSelf} data={props.data?.me} />
        <ProfileTabs trips={props.data?.me?.trips.edges} />
      </Box>
    </div>
  );
};

export default ProfileContainer;
