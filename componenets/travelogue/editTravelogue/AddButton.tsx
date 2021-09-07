import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { FiEdit2, FiEdit3, FiPlus } from 'react-icons/fi';

interface Props {
  onClick: () => void;
}
export default function AddButton(props: Props) {
  return (
    <IconButton
      onClick={props.onClick}
      aria-label="اضافه‌کردن"
      colorScheme="whatsapp"
      icon={<FiEdit3 />}
      rounded="full"
      size="xs"
    />
  );
}
