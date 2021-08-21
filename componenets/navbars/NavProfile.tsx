import { AtSignIcon, ChevronDownIcon, MoonIcon } from '@chakra-ui/icons';
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
  Divider,
} from '@chakra-ui/react';

import { FiLogOut, FiUser, FiBookOpen, FiFeather } from 'react-icons/fi';

import React from 'react';

import Link from 'next/link';
import { MdCardTravel } from 'react-icons/md';
import { BiListPlus } from 'react-icons/bi';
import { HiUser } from 'react-icons/hi';

interface Props {
  signOut: () => void;
  user: any;
  minimal?: boolean;
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
          size="sm"
        >
          {props.minimal ? (
            <FiUser />
          ) : (
            <Flex direction="row-reverse" alignItems="center">
              <Avatar
                shadow="lg"
                size="md"
                h="10"
                w="10"
                // name={data.me.firstName + data.me.lastName}
                src={props.user?.avatar}
              />
              {/* <Text
                display={{ base: 'none', md: 'unset' }}
                fontSize={{ base: '12px', md: '14px' }}
                pl={2}
              >
                {props.user?.username}
              </Text> */}
            </Flex>
          )}
        </MenuButton>
        <MenuList>
          <MenuItem icon={<AtSignIcon />} fontWeight="light">
            {props.user?.username}
          </MenuItem>
          <Divider />
          <Link href="/travelogue/new" passHref>
            <MenuItem icon={<FiFeather />}>سفرنامه جدید</MenuItem>
          </Link>
          {/* <Link href="/wizard/" passHref>
            <MenuItem icon={<BiListPlus />}>برنامه‌ریزی سفر</MenuItem>
          </Link> */}
          <Link href="/me" passHref>
            <MenuItem icon={<FiUser />}>پروفایل من</MenuItem>
          </Link>
          <Link href="/me" passHref>
            <MenuItem icon={<MdCardTravel />}>سفرهای من</MenuItem>
          </Link>
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
