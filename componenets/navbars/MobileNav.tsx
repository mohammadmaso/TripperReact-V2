import React from 'react';
import {
  DrawerCloseButton,
  DrawerOverlay,
  Divider,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  DrawerFooter,
  HStack,
  Button,
  Stack,
  Wrap,
} from '@chakra-ui/react';
import Image from 'next/image';
import {
  IoLogoInstagram,
  IoLogoSoundcloud,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io5';
import { MobileSubNav } from './MobileSubNav';
import { NAV_ITEMS } from './NAV_ITEMS';
import Logo from '../logos/TextLogo';
import { useAddToHomescreenPrompt } from '../../hooks/useAddToHomescreenPrompt';

export const MobileNav = ({
  onClose,
  isOpen,
}: {
  onClose: any;
  isOpen: any;
}) => {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <Logo darkLogo height={70} width={150} />
            <Divider />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={5} align="flex-start">
              {NAV_ITEMS.map((navItem) => (
                <MobileSubNav key={navItem.label} {...navItem} />
              ))}
            </VStack>
          </DrawerBody>
          <Divider />
          <Button
            rounded="none"
            colorScheme="primary"
            size="sm"
            onClick={promptToInstall}
          >
            نصب نسخه PWA
          </Button>
          <DrawerFooter textColor="primary" justifyContent="center">
            <Stack>
              <Wrap spacing="10px">
                <IoLogoSoundcloud />
                <IoLogoInstagram />
                <IoLogoSoundcloud />
                <IoLogoYoutube />
                <IoLogoTwitter />
              </Wrap>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
