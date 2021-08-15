import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

interface Props {}

const ProfileEditModal = (props: any) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ویرایش پروفایل</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>

        <ModalFooter>
          <Button colorScheme="primary" mr={3} onClick={props.onClose}>
            ثبت
          </Button>
          <Button colorScheme="red" mr={3} onClick={props.onClose}>
            انصراف
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProfileEditModal;
