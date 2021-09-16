import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Stack,
  Icon,
  Wrap,
  Center,
  FormControl,
  Input,
  FormErrorMessage,
  Textarea,
  Box,
  useToast,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  InputGroup,
  InputRightElement,
  Spinner,
  Divider,
  Flex,
  Avatar,
  IconButton,
} from '@chakra-ui/react';
import { BiBed } from 'react-icons/bi';
import { SelectPointMap } from './SelectPointMap';

interface Props {
  data: any;
  isOpen: boolean;
  onClose: any;
  actions: {};
  queries: {};
  onAddAccomodation: any;
}

const AddAccomodationsModal = (props: Props) => {
  const [location, setLocation] = useState<any>([]);

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size="lg"
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent rounded="none">
        <ModalHeader fontWeight="light">
          <Wrap align="center">
            <Icon as={BiBed} />
            <Text>افزودن اقامت</Text>
          </Wrap>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Tabs colorScheme="primary" size="sm">
            <TabList>
              <Tab>اقامت‌گاه</Tab>
              <Tab>کمپینگ</Tab>
            </TabList>

            <TabPanels>
              <TabPanel></TabPanel>
              <TabPanel>
                <SelectPointMap
                  setLocation={(location: any) => setLocation(location)}
                  initialLocation={{
                    longitude: props.data.province.longitude,
                    latitude: props.data.province.latitude,
                  }}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddAccomodationsModal;
