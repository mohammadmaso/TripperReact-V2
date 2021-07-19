import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function TextLogo(props: any) {
  return (
    <Box {...props}>
      <Image
        src={!props.darkLogo ? '/HeaderLogo.svg' : '/HeaderLogo.svg'}
        height={props.height ?? 100}
        width={props.width ?? 100}
        layout="intrinsic"
      />
    </Box>
  );
}
