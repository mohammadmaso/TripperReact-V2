import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { appName } from '../../constants';

export default function TextLogo(props: any) {
  return (
    <Box {...props}>
      <Image
        src={!props.darkLogo ? '/logo-dark.svg' : '/logo-dark.svg'}
        height={props.height ?? 100}
        width={props.width ?? 100}
        layout="intrinsic"
        alt={appName}
      />
    </Box>
  );
}
