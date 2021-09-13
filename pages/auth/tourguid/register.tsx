import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import CircleLogo from '../../../componenets/logos/CircleLogo';

export default function SimpleCard() {
  return (
    <Center minH={'100vh'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'2xl'} py={12} px={6}>
        <Stack align={'center'}>
          <CircleLogo />
          <Heading fontSize={'4xl'}>
            ثبت نام در اولین جامعه تورلیدر‌های ایران
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            تور خودت رو حرفه‌ای بساز
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          w="2xl"
          p={8}
          fontSize="sm"
        >
          <Stack spacing={4} fontSize="sm">
            <FormControl id="">
              <FormLabel fontSize="sm">نام و نام‌خانوادگی</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="">
              <FormLabel fontSize="sm">کد ملی</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="">
              <FormLabel fontSize="sm">کد گردشگری میراث فرهنگی</FormLabel>
              <Input type="email" />
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
                fontSize="sm"
              >
                <Checkbox fontSize="sm">پذیرش قوانین تریپر</Checkbox>
                <Link color={'blue.400'}>قوانین و مقررات</Link>
              </Stack>
              <Button colorScheme="primary">ثبت نام</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Center>
  );
}
