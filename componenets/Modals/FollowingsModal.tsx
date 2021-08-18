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
} from '@chakra-ui/react';
import React from 'react';
import { useMeFollowingsQuery } from '../../graphql/generated/types';
import ApiLoading from '../ApiLoading';
import UserSimpleListCard from '../cards/UserSimpleListCard';

interface Props {
  isOpen: boolean;
  onClose: any;
  actions: any;
  queries: any;
}

const FollowingsModal = (props: Props) => {
  React.useEffect(() => {
    if (props.isOpen == true) {
      props.actions?.getFollowings();
    }
  }, [props.isOpen]);
  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>دنبال‌شده‌ها</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.queries?.followingsQuery?.loading ? (
              <ApiLoading />
            ) : props.queries?.followingsQuery?.data ? (
              <Stack spacing="3">
                {props.queries?.followingsQuery?.data.me?.followingUsers.edges.map(
                  (item: any) => (
                    <UserSimpleListCard
                      key={item?.node?.followed.id}
                      {...item?.node?.followed}
                    />
                  )
                )}
              </Stack>
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
