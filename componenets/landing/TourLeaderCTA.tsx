import { Button } from '@chakra-ui/button';
import { Box, Center, Heading, Text, Wrap } from '@chakra-ui/layout';
import Link from 'next/link';
import React from 'react';

interface Props {}

const TourLeaderCTA = (props: Props) => {
  return (
    <Box
      backgroundImage={
        'url(/images/slider/nika-tchokhonelidze-Ms_p0I5DQSM-unsplash.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      w="full"
      h="30vh"
      rounded="md"
    >
      <Center rounded="md" flexDirection="column" h="full" bgColor="#00000040">
        <Wrap direction="column" justify="center" align="center">
          <Text
            textColor="white"
            fontWeight="black"
            fontSize={['2xl', '2xl', '3xl']}
          >
            تور لیدر هستی؟
          </Text>
          <Text textColor="white" fontWeight="bold" fontSize="MD">
            تور بعدی خودت رو اینجا حرفه‌ای بساز...
          </Text>
          <Link href="/auth/tourguid/register" passHref>
            <Button rounded="sm" fontSize="sm" colorScheme="whiteAlpha">
              ثبت نام تور لیدر‌ها
            </Button>
          </Link>
        </Wrap>
      </Center>
    </Box>
  );
};

export default TourLeaderCTA;
