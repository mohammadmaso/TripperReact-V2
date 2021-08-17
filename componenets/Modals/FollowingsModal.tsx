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
} from '@chakra-ui/react';
import React from 'react';
import { useMeFollowingsQuery } from '../../graphql/generated/types';
import ApiLoading from '../ApiLoading';
import UserSimpleListCard from '../cards/UserSimpleListCard';

interface Props {
  isOpen: boolean;
  onClose: any;
}

const FollowingsModal = (props: Props) => {
  const { data, loading, error } = useMeFollowingsQuery();
  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>دنبال‌شده‌ها</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {loading ? (
              <ApiLoading />
            ) : data ? (
              data.me?.followingUsers.edges.map((item) => (
                <UserSimpleListCard
                  key={item?.node?.followed.id}
                  {...item?.node?.followed}
                />
              ))
            ) : (
              <Text>موردی یافت نشد!</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FollowingsModal;
