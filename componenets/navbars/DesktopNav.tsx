import React from 'react';
import {
  Box,
  Flex,
  Stack,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { DesktopSubNav } from './DesktopSubNav';
import { NAV_ITEMS } from './NAV_ITEMS';

export const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Flex align="center">
                {navItem.icon}
                <ChakraLink
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color="primary"
                >
                  <Link href={navItem.href ?? '#'}>{navItem.label}</Link>
                </ChakraLink>
              </Flex>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg="white"
                p={4}
                rounded={'md'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
