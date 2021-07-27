import { ChevronDownIcon, MoonIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorMode,
  Switch,
} from '@chakra-ui/react';

import { FiLogOut, FiUser, FiBookOpen } from 'react-icons/fi';

import React from 'react';

import Link from 'next/link';
import { MdCardTravel } from 'react-icons/md';

interface Props {
  signOut: () => void;
  user: any;
}

const NavProfile = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

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
              src={props.user?.avatar}
            />
            <Text
              display={{ base: 'none', md: 'unset' }}
              fontSize={{ base: '12px', md: '14px' }}
              pl={2}
            >
              {props.user?.username}
            </Text>
          </Flex>
        </MenuButton>
        <MenuList>
          <Link href="/me" passHref>
            <MenuItem icon={<FiUser />}>پروفایل من</MenuItem>
          </Link>
          <MenuItem icon={<MdCardTravel />}>سفرهای من</MenuItem>
          <MenuItem onClick={toggleColorMode} icon={<MoonIcon />}>
            حالت شب
          </MenuItem>
          <MenuItem onClick={props.signOut} icon={<FiLogOut />}>
            خروج
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default NavProfile;
