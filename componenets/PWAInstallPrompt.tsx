import { Box, Slide, useDisclosure, Button } from '@chakra-ui/react';
import * as React from 'react';
import { useAddToHomescreenPrompt } from '../hooks/useAddToHomescreenPrompt';

export function PWAInstallPrompt() {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);

  const hide = () => setVisibleState(false);
  const { isOpen, onToggle } = useDisclosure();

  //   React.useEffect(() => {
  //     if (prompt) {
  //       setVisibleState(true);
  //     }
  //   }, [prompt]);

  // if (!isVisible) {
  //   return <div />;
  // }

  return (
    <>
      <Button zIndex="overlay" onClick={onToggle}>
        Click Me
      </Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          roundedTop="md"
          bgColor="gray.50"
          bottom="0"
          position="fixed"
          h="30vh"
          w="full"
        >
          <div>sgh</div>
        </Box>
      </Slide>
    </>
  );
}
