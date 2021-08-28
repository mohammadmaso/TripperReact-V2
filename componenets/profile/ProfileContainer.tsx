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
import Head from 'next/head';
interface Props {
  data: any;
  isSelf: boolean;
  actions: any;
  lazyQueries: any;
}

const ProfileContainer = (props: Props) => {
  return (
    <div>
      <Head>
        <meta
          property="og:image"
          content={
            props.isSelf ? props.data?.me.avatar : props.data?.user.avatar
          }
        />
        <meta property="og:title" content="پلتفرم گردشگری تریپر" />
        <meta property="og:type" content="profile:username" />{' '}
        <meta
          property="og:description"
          content={
            props.isSelf
              ? props.data?.me.profilemodel.about
              : props.data?.user.profilemodel.about
          }
        />
        <meta property="og:locale" content="fa_IR" />
      </Head>
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
          data={props.isSelf ? props.data?.me : props.data?.user}
          isFollowed={props.data?.followedUser}
          actions={props.actions}
          lazyQueries={props.lazyQueries}
        />
        <ProfileTabs
          trips={
            props.isSelf
              ? props.data?.me?.trips.edges
              : props.data?.user?.trips.edges
          }
          actions={props.actions}
          queries={props.lazyQueries}
          isSelf={props.isSelf}
        />
      </Box>
    </div>
  );
};

export default ProfileContainer;
