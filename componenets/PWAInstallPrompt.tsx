import {
  Box,
  Slide,
  useDisclosure,
  Button,
  Stack,
  Image,
  Heading,
  Text,
  CloseButton,
} from '@chakra-ui/react';
import * as React from 'react';
import { useAddToHomescreenPrompt } from '../hooks/useAddToHomescreenPrompt';

export function PWAInstallPrompt() {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);

  const hide = () => setVisibleState(false);
  const { isOpen, onToggle } = useDisclosure();

  React.useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
  }, [prompt]);

  if (!isVisible) {
    return <div />;
  }

  return (
    <>
      {/* <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}> */}
      <Box
        roundedTop="md"
        bgColor="#009d21"
        boxShadow="inner"
        bottom="0"
        zIndex="overlay"
        position="fixed"
        //   h="26vh"
        w="full"
        p="3"
      >
        <Stack justify="center" textAlign="center" textColor="white">
          <CloseButton mb="-40px" onClick={hide} />
          <Image src="/CircleLogo.svg" h="5rem" alt="Logo" onClick={hide} />
          <Heading fontWeight="bold" fontSize="lg">
            تجربه سریع‌تر و امکان مرور آفلاین
          </Heading>
          <Text fontWeight="light" fontSize="lg">
            با نصب نسخه وب تریپر
          </Text>
          <Button
            onClick={promptToInstall}
            variant="outline"
            fontWeight="light"
            rounded="full"
          >
            نصب سریع
          </Button>
        </Stack>
      </Box>
      {/* </Slide> */}
    </>
  );
}
