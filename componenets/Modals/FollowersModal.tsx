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

const FollowersModal = (props: Props) => {
  React.useEffect(() => {
    if (props.isOpen == true) {
      props.actions?.getFollowers();
    }
  }, [props.isOpen]);
  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>دنبال کننده‌ها</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.queries?.followersQuery?.loading ? (
              <ApiLoading />
            ) : props.queries?.followersQuery?.data ? (
              <Stack spacing="3">
                {props.queries?.followersQuery?.data.me?.followerUsers.edges.map(
                  (item: any) => (
                    <UserSimpleListCard
                      key={item?.node?.follower.id}
                      {...item?.node?.follower}
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

export default FollowersModal;
