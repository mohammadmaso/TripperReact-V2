import { Center, Spinner } from '@chakra-ui/react';
import React from 'react';
import LoadingWord from './loading-indicator';

interface Props {
  enhanced?: boolean;
}

const ApiLoading = (props: Props) => {
  return (
    <Center my="5">
      {props.enhanced == true ? (
        <LoadingWord />
      ) : (
        <Spinner p="3" color="green" />
      )}
    </Center>
  );
};

export default ApiLoading;
