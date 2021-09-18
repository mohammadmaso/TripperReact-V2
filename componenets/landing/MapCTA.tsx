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
      h="30vh"
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
        pr={[2, 2, 10, 10]}
        bgGradient={'linear(to-l, whiteAlpha.600, transparent)'}
      >
        <Wrap direction="column" justify="flex-start" align="flex-start">
          <Text textColor="black" fontWeight="black" fontSize="2xl">
            تور بعدی خودت رو با دقت اتخاب کن
          </Text>
          <Text textColor="black" fontWeight="bold" fontSize="MD">
            جستجو میان تور‌ها با دقیق‌ترین جزییات...
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
