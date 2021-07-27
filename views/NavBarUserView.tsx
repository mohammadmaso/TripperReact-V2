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
} from '@chakra-ui/react';

import { FiLogOut, FiUser, FiBookOpen } from 'react-icons/fi';

import React from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import NavProfile from '../componenets/navbars/NavProfile';
import { useMeQuery } from '../graphql/generated/types';

interface Props {}

const NavBarUserView = (props: Props) => {
  const router = useRouter();

  const { loading, error, data } = useMeQuery();

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh-token');
    router.push('/');
  };

  if (loading) {
    return null;
  }

  return (
    <>
      <NavProfile user={data?.me} signOut={signOut} />
    </>
  );
};

export default NavBarUserView;
