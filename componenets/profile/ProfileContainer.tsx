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
  actions: any;
  lazyQueries: any;
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
        <ProfileHeader
          isSelf={props.isSelf}
          data={props.data?.me}
          actions={props.actions}
          lazyQueries={props.lazyQueries}
        />
        <ProfileTabs
          trips={props.data?.me?.trips.edges}
          actions={props.actions}
          queries={props.lazyQueries}
        />
      </Box>
    </div>
  );
};

export default ProfileContainer;
