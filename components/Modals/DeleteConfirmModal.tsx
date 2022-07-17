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
} from '@chakra-ui/react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import { BiCommentAdd } from 'react-icons/bi';
import { useMeFollowingsQuery } from '../../graphql/generated/types';
import ApiLoading from '../ApiLoading';
import UserSimpleListCard from '../cards/UserSimpleListCard';

import * as Yup from 'yup';
import { FiTrash } from 'react-icons/fi';

interface Props {
  isOpen: boolean;
  onClose: any;
  deleteAction: any;
  title?: string;
  status: any;
}

const DeleteConfirmModal = (props: Props) => {
  const toast = useToast();

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
          {/* <Wrap align="center">
            <Icon as={FiTrash} />
            <Text>حذف سفرنامه؟</Text>
          </Wrap> */}
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Stack>
            <Text>آیا از حذف این سفر مطمعن هستید؟</Text>
            <Text fontWeight="semibold">{props?.title}</Text>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Wrap>
            <Button
              isLoading={props.status.loading}
              colorScheme="red"
              variant="solid"
              size="sm"
              onClick={() => props.deleteAction()}
            >
              بله، حذف کن
            </Button>
            <Button onClick={props.onClose} variant="ghost" size="sm">
              انصراف
            </Button>
          </Wrap>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteConfirmModal;
