import { CalendarIcon, ChevronDownIcon, TimeIcon } from '@chakra-ui/icons';
import {
  Stack,
  Wrap,
  Text,
  Tag,
  Divider,
  useEventListener,
  Avatar,
  HStack,
  useColorModeValue,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaHiking } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

export function TravelogueListHeader() {
  const [stickyHeader, setStickyHeader] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 120) {
      if (!stickyHeader) {
        setStickyHeader(true);
      }
    } else {
      if (stickyHeader) {
        setStickyHeader(false);
      }
    }
  };
  useEventListener('scroll', handleScroll);

  return (
    <Wrap
      px={[4, 4, 120]}
      position={stickyHeader ? 'fixed' : undefined}
      pt={stickyHeader ? '4' : '0'}
      pb={stickyHeader ? '2' : '2'}
      boxShadow={stickyHeader ? 'md' : '0'}
      bgColor={stickyHeader ? 'white' : 'transparent'}
      zIndex="90"
      top={stickyHeader ? '60px' : undefined}
      w="full"
      transitionDuration="2"
      justify="space-between"
    >
      <Wrap>
        <Menu closeOnSelect={false} isLazy>
          <MenuButton
            h="30px"
            fontSize="sm"
            fontWeight="light"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            دسته‌بندی
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuItemOption icon={<FaHiking />} value="desc">
              کوهنوردی
            </MenuItemOption>
            <MenuDivider />
            <MenuItemOption icon={<FaHiking />} value="desc">
              کوهنوردی
            </MenuItemOption>
          </MenuList>
        </Menu>
        <Menu closeOnSelect={false} isLazy>
          <MenuButton
            h="30px"
            fontSize="sm"
            fontWeight="light"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            شهر
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuItemOption icon={<FaHiking />} value="desc">
              کوهنوردی
            </MenuItemOption>
            <MenuDivider />
            <MenuItemOption icon={<FaHiking />} value="desc">
              کوهنوردی
            </MenuItemOption>
          </MenuList>
        </Menu>
      </Wrap>
      <Wrap>
        <Menu closeOnSelect={false} isLazy>
          <MenuButton
            fontWeight="light"
            as={Button}
            h="30px"
            fontSize="sm"
            rightIcon={<ChevronDownIcon />}
          >
            مرتب سازی
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuItemOption icon={<FaHiking />} value="desc">
              کوهنوردی
            </MenuItemOption>
            <MenuDivider />
            <MenuItemOption icon={<FaHiking />} value="desc">
              کوهنوردی
            </MenuItemOption>
          </MenuList>
        </Menu>
      </Wrap>
    </Wrap>
  );
}
