import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import {
  Stack,
  Wrap,
  Text,
  Tag,
  Divider,
  useEventListener,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';

export function Header() {
  //   const [stickyHeader, setStickyHeader] = useState(false);

  //   const handleScroll = () => {
  //     if (window.pageYOffset > 120) {
  //       if (!stickyHeader) {
  //         setStickyHeader(true);
  //       }
  //     } else {
  //       if (stickyHeader) {
  //         setStickyHeader(false);
  //       }
  //     }
  //   };
  //   useEventListener('scroll', handleScroll);

  return (
    <Stack
    //   position={stickyHeader ? 'fixed' : undefined}
    //   py={stickyHeader ? '4' : '0'}
    //   boxShadow={stickyHeader ? '0px 0 10px -5px #888' : '0'}
    //   bgColor={stickyHeader ? 'white' : 'transparent'}
    //   zIndex="90"
    //   top={stickyHeader ? '60px' : undefined}
    >
      <Text as="h1" fontSize="xl" fontWeight="semibold">
        گشت و گذار در شیراز
      </Text>
      <Wrap fontWeight="light" fontSize="sm">
        <Tag colorScheme="primary">خانوادگی</Tag>
        <Tag colorScheme="primary">ماجراجویی</Tag>
        <Divider orientation="vertical" />
        <Wrap align="center">
          <TimeIcon ml="1" />
          <Text>۲ روز</Text>
        </Wrap>
        <Divider orientation="vertical" />
        <Wrap align="center">
          <CalendarIcon ml="1" />
          <Text>۱۴۰۰ پاییز</Text>
        </Wrap>
        <Divider orientation="vertical" />
        <Wrap align="center">
          <HiLocationMarker />
          <Text>شیراز - ایران</Text>
        </Wrap>
      </Wrap>
    </Stack>
  );
}
