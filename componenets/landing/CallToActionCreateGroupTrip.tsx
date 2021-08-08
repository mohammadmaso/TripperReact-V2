import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Wrap,
} from '@chakra-ui/react';

export default function CallToActionCreateGroupTrip() {
  return (
    <Flex
      w={'full'}
      h={'30vh'}
      rounded="md"
      backgroundImage={
        'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        align="flex-start"
        bgGradient={'linear(to-l, blackAlpha.900, transparent)'}
        rounded="md"
      >
        <Stack
          align={'flex-start'}
          spacing={4}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Stack>
            <Text
              color={'white'}
              fontWeight={400}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            >
              دنبال همسفر می‌گردی؟
            </Text>
            <Text color={'white'}>
              اینجا می‌تونی همراه‌‌های سفر بعدیت رو پیدا کنی..
            </Text>
          </Stack>
          <Wrap>
            <Button colorScheme="primary" rounded={'full'}>
              جستجو میان سفرهای گروهی
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
            >
              ساختن یک برنامه سفر
            </Button>
          </Wrap>
        </Stack>
      </VStack>
    </Flex>
  );
}
