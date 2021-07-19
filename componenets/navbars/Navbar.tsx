import React, { ReactElement, useState } from 'react';

import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useEventListener,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../logos/TextLogo';
import { IoMenuOutline as MenuIcon } from 'react-icons/io5';
import Link from 'next/link';
import useIsSignedIn from '../../hooks/useIsSignedIn';

import { HiOutlineLightBulb } from 'react-icons/hi';

import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
import NavProfile from './NavProfile';
import NavButtons from './NavButtons';

const NavBar = (props: any) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [stickyNav, setStickyNav] = useState(false);
  const isSignedIn = useIsSignedIn();

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      if (!stickyNav) {
        setStickyNav(true);
      }
    } else {
      if (stickyNav) {
        setStickyNav(false);
      }
    }
  };
  useEventListener('scroll', handleScroll);

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={[5, 124, 124]}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        position="fixed"
        w="100%"
        shadow="lg"
        zIndex={2}
      >
        <Flex
          flex={{ base: 'flex', md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href="/">
            <Box
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
            >
              <Logo
                darkLogo
                height={stickyNav ? 50 : 50}
                width={stickyNav ? 120 : 120}
              />
            </Box>
          </Link>

          <Flex
            align="center"
            justify="space-between"
            wrap="wrap"
            display={{ base: 'none', md: 'flex' }}
            mr={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>
        {props.children}
      </Flex>

      <MobileNav isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default NavBar;
