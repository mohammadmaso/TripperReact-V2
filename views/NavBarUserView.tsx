import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  Icon,
  Tooltip,
} from '@chakra-ui/react';

import { FiLogOut, FiUser, FiBookOpen } from 'react-icons/fi';

import React from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import NavProfile from '../componenets/navbars/NavProfile';
import { useMeQuery } from '../graphql/generated/types';
import { BeatLoader } from 'react-spinners';
import { fromPromise } from '@apollo/client';
import { getNewToken } from '../graphql/ApolloLink';
import { BiError } from 'react-icons/bi';

interface Props {
  minimal?: boolean;
}

const NavBarUserView = (props: Props) => {
  const router = useRouter();

  const { loading, error, data } = useMeQuery();

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh-token');

    if (router.pathname == '/') {
      router.push('/');
      router.reload();
    } else {
      router.push('/');
    }
  };

  if (loading) {
    return <BeatLoader size={8} color="#009d21" />;
  }

  if (error) {
    return (
      <Tooltip
        label="خطا در دریافت پروفایل/ ورود دوباره"
        aria-label="A tooltip"
        placement="bottom-end"
      >
        <Icon
          onClick={() => router.push('/auth/login')}
          as={BiError}
          color="red.300"
        />
      </Tooltip>
    );
  }

  return (
    <>
      <NavProfile minimal={props.minimal} user={data?.me} signOut={signOut} />
    </>
  );
};

export default NavBarUserView;
