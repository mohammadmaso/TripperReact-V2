import { Center, Text, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { HiSupport } from 'react-icons/hi';
import Lottie from 'react-lottie';
import * as animationData from '../../public/animations/lf20_imrP4H.json';

interface Props {}

const fail = (props: Props) => {
  return (
    <div>
      <Center minHeight="100vh">
        <Stack spacing="3" height="fit-content" justify="center" align="center">
          <Lottie
            options={{
              animationData: animationData,
              autoplay: true,
              loop: false,
            }}
            height={300}
            width={300}
          />
          <Text fontWeight="extrabold">
            متأسفانه پرداخت شما با خطا مواجه شد.
          </Text>
          <Text fontSize="lg">
            برای پیگیری بیشتر با پشتیبانی در تماس باشید.
          </Text>
          <Button
            href="tel:+989380374660"
            leftIcon={<BiSupport />}
            rounded="full"
          >
            09380374660
          </Button>
          <Button colorScheme="red" rounded="full">
            بازگشت به داشبورد
          </Button>
        </Stack>
      </Center>
    </div>
  );
};

export default fail;
