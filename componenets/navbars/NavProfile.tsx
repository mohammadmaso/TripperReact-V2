import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';

import { FiLogOut, FiUser, FiBookOpen } from 'react-icons/fi';

import React from 'react';

import Link from 'next/link';

interface Props {}

const NavProfile = (props: any) => {
  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          bgColor="transparent"
          rightIcon={<ChevronDownIcon />}
        >
          <Flex direction="row-reverse" alignItems="center">
            <Avatar
              shadow="lg"
              // name={data.me.firstName + data.me.lastName}
              src={props.me.avatar}
            />
            <Text
              display={{ base: 'none', md: 'unset' }}
              fontSize={{ base: '12px', md: '14px' }}
              pl={2}
            >
              {props.me.firstName} {props.me.lastName}
            </Text>
          </Flex>
        </MenuButton>
        <MenuList>
          <Link href="/me/profile">
            <MenuItem icon={<FiUser />}>حساب کاربری</MenuItem>
          </Link>
          <MenuItem icon={<FiBookOpen />}>دوره‌های من</MenuItem>
          <MenuItem onClick={props.signOut} icon={<FiLogOut />}>
            خروج
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default NavProfile;
