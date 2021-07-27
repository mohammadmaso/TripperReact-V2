import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Tag,
  HStack,
  Flex,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

interface Props {}

export const WikiCategoryList = (props: Props) => {
  return (
    <>
      <Wrap spacing="4">
        <WrapItem>
          <WikiCategoryBox name="سفر جاده‌ای" />
        </WrapItem>
        <WrapItem>
          <WikiCategoryBox name="هیچهایک" />
        </WrapItem>
        <WrapItem>
          <WikiCategoryBox name="غذا و نوشیدنی" />
        </WrapItem>
        <WrapItem>
          <WikiCategoryBox name="کوهنوردی" />
        </WrapItem>
        <WrapItem>
          <WikiCategoryBox name="طبیعت‌گردی" />
        </WrapItem>
      </Wrap>
    </>
  );
};

const WikiCategoryBox = (props: any) => {
  return (
    <div>
      <Center py={6}>
        <Box
          bg={useColorModeValue('green.100', 'green.900')}
          boxShadow={'sm'}
          rounded={'md'}
          overflow={'hidden'}
          w={'full'}
          position="relative"
          transition={'all .3s ease'}
          _hover={{ transform: 'scale(1.1,1.1)' }}
        >
          <Text
            width="full"
            fontWeight={500}
            color={useColorModeValue('green.600', 'green.100')}
            p="3"
          >
            {props.name}
          </Text>
        </Box>
      </Center>
    </div>
  );
};
