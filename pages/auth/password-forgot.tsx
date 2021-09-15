import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Center,
  Text,
  Box,
  useDisclosure,
  Link as ChakraLink,
  Image,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import TextLogo from '../../componenets/logos/TextLogo';
import { useRouter } from 'next/router';
import { useFormikContext, Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Head from 'next/head';
import TermOfUseModal from '../../componenets/Modals/TermOfUseModal';
import {
  useForgotPasswordSmsMutation,
  useRegisterSmsMutation,
} from '../../graphql/generated/types';
import CircleLogo from '../../componenets/logos/CircleLogo';

export default function SingUp() {
  const router = useRouter();

  const [phone, setPhone] = useState('');

  const modal = useDisclosure();

  const [forgorPassword, { loading, data }] = useForgotPasswordSmsMutation({
    onCompleted: (data) => {
      if (data && data.forgotPasswordSms?.success) {
        router.push({
          pathname: '/auth/password-reset',
          query: { phone: phone },
        });
      }
    },
  });

  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Head>
          <title> تریپر | فراموشی رمزعبور</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Flex p={8} flex={1} align={'center'} justify={'center'} zIndex={100}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            {/* <TextLogo height="100" width="200" /> */}
            <CircleLogo />
            <Heading fontWeight="medium" fontSize={'xl'}>
              فراموشی رمزعبور
            </Heading>

            <Formik
              initialValues={{
                phoneNumber: '',
              }}
              onSubmit={(values, { setSubmitting }) => {
                forgorPassword({
                  variables: {
                    forgotPasswordSmsPhoneNumber: values.phoneNumber,
                  },
                });
                setPhone(values.phoneNumber);
                if (data && data.forgotPasswordSms?.success) {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field name="phoneNumber">
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl>
                        <FormLabel>شماره موبایل</FormLabel>
                        <Input id="phoneNumber" {...field} type="phone" />
                        {data?.forgotPasswordSms?.errors.phoneNumber && (
                          <Text mt="1" color="red">
                            {
                              data?.forgotPasswordSms?.errors.phoneNumber[0]
                                .message
                            }
                          </Text>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  <Stack spacing={6} mt="2">
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'center'}
                      justify={'end'}
                    >
                      <Link color={'primary'} href="/auth/login">
                        ورود
                      </Link>
                    </Stack>
                    <Button
                      colorScheme="primary"
                      rounded="full"
                      variant={'solid'}
                      type="submit"
                      isLoading={loading}
                    >
                      ارسال کد تایید
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Stack>
        </Flex>
        <Flex flex="1">
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/images/angelo-pantazis-zXVk8mNl9M0-unsplash.jpg'}
          />
        </Flex>
      </Stack>
      <TermOfUseModal {...modal} />
    </>
  );
}
