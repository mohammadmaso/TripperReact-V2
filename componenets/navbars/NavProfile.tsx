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
          leftIcon={<ChevronDownIcon />}
          size="sm"
          rounded="full"
        >
          {props.minimal ? (
            <FiUser />
          ) : (
            <Flex direction="row-reverse" alignItems="center">
              <Avatar
                shadow="lg"
                size="md"
                h="8"
                w="8"
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
          <Link href="/me" passHref>
            <MenuItem fontSize="sm" icon={<AtSignIcon />} fontWeight="light">
              {props.user?.username}
            </MenuItem>
          </Link>
          <Divider />
          <Link href="/travelogues/new/init" passHref>
            <MenuItem fontSize="sm" fontWeight="semibold" icon={<FiFeather />}>
              سفرنامه جدید
            </MenuItem>
          </Link>
          {/* <Link href="/wizard/" passHref>
            <MenuItem icon={<BiListPlus />}>برنامه‌ریزی سفر</MenuItem>
          </Link> */}

          {/* <MenuItem icon={<FiUser />}>پروفایل من</MenuItem> */}

          <Link href="/me" passHref>
            <MenuItem
              fontSize="sm"
              fontWeight="semibold"
              icon={<MdCardTravel />}
            >
              سفرهای من
            </MenuItem>
          </Link>
          <MenuItem
            fontSize="sm"
            fontWeight="semibold"
            onClick={toggleColorMode}
            icon={<MoonIcon />}
          >
            حالت شب
          </MenuItem>
          <MenuItem
            fontSize="sm"
            fontWeight="semibold"
            onClick={props.signOut}
            icon={<FiLogOut />}
          >
            خروج
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default NavProfile;
