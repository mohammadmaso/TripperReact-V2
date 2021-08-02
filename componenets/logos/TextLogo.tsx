import React from 'react';
import { Box, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

export default function TextLogo(props: any) {
  return (
    <Box {...props}>
      <Image
        src={useColorModeValue('/HeaderLogo-fa.svg', '/HeaderLogo-fa-light.svg')}
        height={props.height ?? 100}
        width={props.width ?? 100}
        layout="intrinsic"
        alt="tripper-logo"
      />
    </Box>
  );
}
