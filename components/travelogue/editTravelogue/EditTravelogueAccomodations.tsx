import {
  Flex,
  Stack,
  Wrap,
  Text,
  Center,
  useColorModeValue,
  SimpleGrid,
  Image,
  AlertDialog,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ButtonGroup,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { FaCampground } from 'react-icons/fa';
import { FiHome, FiPlusCircle } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import AddEditButton from './AddEditButton';
interface Props {
  residences: any[];
  onAddButtonClick: () => void;
  onDeleteClick: (id: string) => void;
}
export function EditTravelogueAccomodations({
  onAddButtonClick,
  onDeleteClick,
  residences,
}: Props) {
  const alert = useDisclosure();
  const cancelRef = React.useRef(null);
  return (
    <>
      <Stack>
        <Wrap align="center">
          <FiHome />
          <Text fontWeight="extrabold">اقامتگاه‌ها</Text>
          <AddEditButton onClick={onAddButtonClick} mode="add" />
        </Wrap>
        <Wrap>
          {residences?.map((item) => (
            <Flex
              key={item?.node.id}
              justifyContent="space-between"
              borderRadius="full"
              // bgColor={useColorModeValue('gray.100', 'gray.700')}
              fontSize="xs"
              h="2.7rem"
              align="center"
            >
              <Center
                h="2.6rem"
                w="2.6rem"
                borderRadius="full"
                bgColor="green.400"
              >
                <Image
                  filter={
                    'invert(99%) sepia(99%) saturate(2%) hue-rotate(123deg) brightness(108%) contrast(100%)'
                  }
                  src={item?.node.residenceType?.svg}
                  alt=""
                  h="15"
                  w="15"
                />
              </Center>
              <Wrap align="center">
                <Stack spacing={0} pl="5" pr="2" py="2">
                  <Text fontWeight="bold">{item?.node.name}</Text>
                  <Text fontSize="xs">{item?.node.stayDuration} روز</Text>
                </Stack>
                <IconButton
                  aria-label="حذف"
                  rounded="full"
                  variant="ghost"
                  colorScheme="red"
                  icon={<IoClose />}
                  onClick={alert.onOpen}
                />
              </Wrap>
              <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={alert.onClose}
                isOpen={alert.isOpen}
                isCentered
              >
                <AlertDialogOverlay />

                <AlertDialogContent rounded="none">
                  <AlertDialogHeader fontSize="md">
                    آیا می‌خواهید این آیتم اقامتگاه را حذف کنید؟
                  </AlertDialogHeader>
                  <AlertDialogCloseButton />

                  <AlertDialogFooter>
                    <ButtonGroup size="sm">
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          alert.onClose;
                          onDeleteClick(item.node?.id!);
                        }}
                      >
                        حذف
                      </Button>
                      <Button ref={cancelRef} onClick={alert.onClose}>
                        انصراف
                      </Button>
                    </ButtonGroup>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </Flex>
          ))}
        </Wrap>
      </Stack>
    </>
  );
}
