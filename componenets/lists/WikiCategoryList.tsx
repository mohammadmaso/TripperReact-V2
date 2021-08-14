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
  SimpleGrid,
} from '@chakra-ui/react';
import {
  ArticleCategoryType,
  ArticleCategoryTypeConnection,
  ArticleCategoryTypeEdge,
} from '../../graphql/generated/types';

interface Props {
  categories: any;
}

export const WikiCategoryList = (props: Props) => {
  return (
    <>
      <Wrap spacing="4">
        {props.categories.map((item: any) => (
          <WikiCategoryBox key={item.node.id} name={item.node.title} />
        ))}
      </Wrap>
    </>
  );
};

const WikiCategoryBox = (props: any) => {
  return (
    <div>
      <Center>
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
