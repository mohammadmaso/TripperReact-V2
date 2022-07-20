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
import TextLogo from '../../components/logos/TextLogo';
import { useRouter } from 'next/router';
import { useFormikContext, Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Head from 'next/head';
import TermOfUseModal from '../../components/Modals/TermOfUseModal';
import { useRegisterSmsMutation } from '../../graphql/generated/types';
import { usernameRegex } from '../../utils/regex';
import CircleLogo from '../../components/logos/CircleLogo';

export default function SingUp() {
  const router = useRouter();

  const [phone, setPhone] = useState('');

  const modal = useDisclosure();

  const [signUp, { loading, data }] = useRegisterSmsMutation({
    onCompleted: (data) => {
      console.log(data.registerSms?.success);
      if (data && data.registerSms?.success) {
        router.push({
          pathname: '/auth/verify',
          query: { phone: phone },
        });
      }
    },
  });

  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Head>
          <title> تریپر | ثبت نام</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Flex
          p={8}
          flex={1}
          align={'center'}
          justifyContent={'center'}
          zIndex={100}
        >
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <CircleLogo />
            {/* <TextLogo height="100" width="200" /> */}
            {/* <Heading fontWeight="medium" fontSize={'xl'}>
              ثبت‌نام در تریپر
            </Heading> */}

            <Formik
              initialValues={{
                password1: '',
                password2: '',
                username: '',
                phoneNumber: '',
                acceptTerms: false,
              }}
              validationSchema={Yup.object().shape({
                acceptTerms: Yup.bool().oneOf(
                  [true],
                  'پذیرش قوانین برای ثبت‌نام اجباری است!'
                ),
                username: Yup.string().matches(
                  usernameRegex,
                  'نام کاربری باید تنها شامل حروف انگلیسی، اعداد، خط تیره و نقطه باشد.'
                ),
              })}
              onSubmit={(values, { setSubmitting, setFieldError }) => {
                signUp({
                  variables: {
                    registerSmsPhoneNumber: values.phoneNumber,
                    registerSmsUsername: values.username,
                    registerSmsPassword1: values.password1,
                    registerSmsPassword2: values.password2,
                  },
                });
                setPhone(values.phoneNumber);
                if (data && data.registerSms?.success) {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting, errors }) => (
                <Form>
                  <Stack>
                    <Field name="phoneNumber">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl>
                          <FormLabel>شماره موبایل</FormLabel>
                          <Input
                            id="phoneNumber"
                            required
                            {...field}
                            type="phone"
                          />
                          {/* {data?.registerSms?.errors.phoneNumber && (
                            <Text mt="1" color="red">
                              {data?.registerSms?.errors.phoneNumber[0].message}
                            </Text>
                          )} */}
                        </FormControl>
                      )}
                    </Field>
                    <Field name="username">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl>
                          <FormLabel>نام کاربری</FormLabel>
                          <Input
                            required
                            id="username"
                            {...field}
                            type="username"
                          />
                          {/* {data?.registerSms?.errors.username && (
                            <Text mt="1" color="red">
                              {data?.registerSms?.errors.username[0].message}
                            </Text>
                          )} */}
                          <Box textColor="red">
                            <ErrorMessage name="username" component="div" />
                          </Box>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password1">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl>
                          <FormLabel>رمزعبور</FormLabel>
                          <Input
                            required
                            {...field}
                            id="password1"
                            type="password"
                          />
                          {/* {data?.registerSms?.errors.password1 && (
                            <Text mt="1" color="red">
                              {data?.registerSms?.errors.password1[0].message}
                            </Text>
                          )} */}
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password2">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl>
                          <FormLabel>تکرار رمزعبور</FormLabel>
                          <Input
                            required
                            {...field}
                            id="password2"
                            type="password"
                          />
                          {/* {data?.registerSms?.errors.password2 && (
                            <Text mt="1" color="red">
                              {data?.registerSms?.errors.password2[0].message}
                            </Text>
                          )} */}
                        </FormControl>
                      )}
                    </Field>
                  </Stack>
                  <Stack spacing={6} mt="2">
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justifyContent={'space-between'}
                    >
                      <Field name="acceptTerms">
                        {({ field, form }: { field: any; form: any }) => (
                          <FormControl>
                            <Checkbox {...field} required>
                              پذیرش{' '}
                              <ChakraLink
                                textDecoration="underline"
                                onClick={modal.onOpen}
                              >
                                قوانین تریپر
                              </ChakraLink>
                            </Checkbox>
                            <Box textColor="red">
                              <ErrorMessage
                                name="acceptTerms"
                                component="div"
                              />
                            </Box>
                          </FormControl>
                        )}
                      </Field>

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
                      ثبت نام
                    </Button>
                    <Button
                      w={'full'}
                      maxW={'md'}
                      rounded="full"
                      variant={'outline'}
                      leftIcon={<FcGoogle />}
                      disabled
                    >
                      <Center>
                        <Text>ثبت‌نام با گوگل</Text>
                      </Center>
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
