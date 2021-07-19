import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { NavItem } from './NavItem';

export const DesktopSubNav = ({ label, href, subLabel, icon }: NavItem) => {
  return (
    <ChakraLink
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        {icon}
        <Box>
          <Flex align="center">
            <Link href={href ?? '#'}>
              <Text
                transition={'all .3s ease'}
                _groupHover={{ color: 'green.400' }}
                fontWeight={500}
              >
                {label}
              </Text>
            </Link>
          </Flex>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'green.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </ChakraLink>
  );
};
