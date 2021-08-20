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
} from '@chakra-ui/react';
import React from 'react';
import { BiCommentAdd } from 'react-icons/bi';
import { useMeFollowingsQuery } from '../../graphql/generated/types';
import ApiLoading from '../ApiLoading';
import UserSimpleListCard from '../cards/UserSimpleListCard';

interface Props {
  isOpen: boolean;
  onClose: any;
  actions: any;
}

const AddReviewModal = (props: Props) => {
  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Wrap align="center">
              <Icon as={BiCommentAdd} />
              <Text>افزودن نظر</Text>
            </Wrap>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Wrap>
              <Button colorScheme="primary" variant="outline" size="sm">
                ثبت
              </Button>
              <Button colorScheme="red" variant="outline" size="sm">
                انصراف
              </Button>
            </Wrap>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddReviewModal;
