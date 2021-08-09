import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';

export function TravelogueHeader() {
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
    <Stack
      px={[4, 4, 120]}
      position={stickyHeader ? 'fixed' : undefined}
      pt={stickyHeader ? '4' : '2'}
      pb={stickyHeader ? '2' : '2'}
      boxShadow={stickyHeader ? 'md' : '0'}
      bgColor={stickyHeader ? 'white' : 'transparent'}
      zIndex="90"
      top={stickyHeader ? '60px' : undefined}
      w="full"
      transitionDuration="2"
    >
      <Text as="h1" fontSize="xl" fontWeight="semibold">
        گشت و گذار در شیراز
      </Text>
      <Wrap fontWeight="light" fontSize="sm">
        <HStack align={'center'} justify="space-between">
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
            size="sm"
            ml="2"
          />
          <Text fontWeight={300} fontSize="sm" dir="ltr">
            @mohammadmaso
          </Text>
        </HStack>
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
