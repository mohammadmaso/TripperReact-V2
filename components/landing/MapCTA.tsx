import { Button } from '@chakra-ui/button';
import { Box, Center, Heading, Text, Wrap, Flex } from '@chakra-ui/layout';
import Link from 'next/link';
import React from 'react';

interface Props {}

const MapCTA = (props: Props) => {
  return (
    <Box
      backgroundImage={'url(/images/LandingMap.svg)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      w="full"
      h={['20vh', '20vh', '30vh']}
      rounded="md"
    >
      <Flex
        rounded="md"
        dir="column"
        h="full"
        color="whiteAlpha.400"
        alignSelf="center"
        justifySelf="center"
        align="center"
        pr={[4, 4, 10, 10]}
        bgGradient={'linear(to-l, whiteAlpha.700, transparent)'}
      >
        <Wrap direction="column" justifyContent="flex-start" align="flex-start">
          <Heading
            w={['60%', '60%', '100%']}
            textColor="black"
            fontWeight="extrabold"
            fontSize={['lg', 'lg', '2xl']}
          >
            سفر خودت رو با دقیق‌ترین جزییات بساز
          </Heading>
          <Text
            // w="70%"
            textColor="black"
            fontWeight="light"
            fontSize={['sm', 'sm', 'md']}
          >
            جستجو میان سفرنامه‌‌های دیگران با دقیق‌ترین جزییات...
          </Text>
          {/* <Link href="/auth/tourguid/register" passHref>
            <Button rounded="sm" fontSize="sm" colorScheme="whiteAlpha">
              ثبت نام تور لیدر‌ها
            </Button>
          </Link> */}
        </Wrap>
      </Flex>
    </Box>
  );
};

export default MapCTA;
