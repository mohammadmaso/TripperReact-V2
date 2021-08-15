import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: any;
}

const FollowingsModal = (props: any) => {
  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>دنبال‌شده‌ها</ModalHeader>
          <ModalCloseButton />
          <ModalBody>weff</ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FollowingsModal;
