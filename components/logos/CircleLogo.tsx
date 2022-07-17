import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function CircleLogo(props: any) {
  return (
    <Box {...props}>
      <Image
        src={'/CircleLogo.svg'}
        height={props.height ?? 60}
        width={props.width ?? 60}
        layout="intrinsic"
      />
    </Box>
  );
}
