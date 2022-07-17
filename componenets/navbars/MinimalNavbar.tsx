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
  Wrap,
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
import { FiBookmark, FiSave } from 'react-icons/fi';
import { FaBookmark, FaDraft2Digital } from 'react-icons/fa';
import { MdDrafts } from 'react-icons/md';
import WizardNavIcons from './WizardNavIcons';

const MinimalNavBar = (props: any) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [stickyNav, setStickyNav] = useState(false);
  const { isSignedIn } = useIsSignedIn();

  // const handleScroll = () => {
  //   if (window.pageYOffset > 200) {
  //     if (!stickyNav) {
  //       setStickyNav(true);
  //     }
  //   } else {
  //     if (stickyNav) {
  //       setStickyNav(false);
  //     }
  //   }
  // };
  // useEventListener('scroll', handleScroll);

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'90px'}
        py={{ base: 2 }}
        px={[5, 124, 124]}
        borderBottom={1}
        align={'center'}
        position="fixed"
        justifyContent="space-between"
        w="100%"
      >
        <Wrap>
          <Flex ml={{ base: -2 }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          {props.children}
        </Wrap>

        <Box
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontFamily={'heading'}
          color={useColorModeValue('gray.800', 'white')}
        >
          <Stack justifyContent="center">
            <Link href="/" passHref>
              <Logo height={100} width={180} />
            </Link>
            <WizardNavIcons selected={props.selected} />
          </Stack>
        </Box>

        <Button
          colorScheme="primary"
          size="sm"
          fontWeight="md"
          rounded="full"
          leftIcon={<FiBookmark />}
        >
          ذخیره سفر
        </Button>
      </Flex>
      <MobileNav isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default MinimalNavBar;
