import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Wrap,
  Divider,
  Stack,
  FormControl,
  FormLabel,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  InputRightAddon,
  useToast,
  Icon,
  Textarea,
  Switch,
  Text,
} from '@chakra-ui/react';

import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FetchResult } from '@apollo/client/link/core/types';
import {
  Exact,
  PasswordChangeMutation,
  UpdateProfileInput,
  UpdateProfileMutation,
  UpdateUserInput,
  UpdateUserMutation,
} from '../../graphql/generated/types';
import {
  MutationFunctionOptions,
  MutationResult,
} from '@apollo/client/react/types/types';
import { AtSignIcon } from '@chakra-ui/icons';
import { IoCheckmark } from 'react-icons/io5';
import { FiKey } from 'react-icons/fi';

interface Props {
  isOpen: boolean;
  onClose: any;
  actions?: {
    changeProfile: (
      updateProfileInput: UpdateProfileInput
    ) => Promise<
      FetchResult<
        UpdateProfileMutation,
        Record<string, any>,
        Record<string, any>
      >
    >;
    changeUser: (
      updateUserInput: UpdateUserInput
    ) => Promise<
      FetchResult<UpdateUserMutation, Record<string, any>, Record<string, any>>
    >;
    changePassword: (
      oldPassword: string,
      pnewPassword1: string,
      newPassword2: string
    ) => Promise<
      FetchResult<
        PasswordChangeMutation,
        Record<string, any>,
        Record<string, any>
      >
    >;
  };
  queries?: {
    changeProfileQuery: MutationResult<UpdateProfileMutation>;
    changeUserQuery: MutationResult<UpdateUserMutation>;
    changePasswordQuery: MutationResult<PasswordChangeMutation>;
  };
  username: string;
  about: string;
  tripStatus: boolean;
}

const ProfileEditModal = (props: Props) => {
  const [username, setUsername] = useState(props.username);
  const [tripStatus, setTripStatus] = useState(props.tripStatus);
  const [about, setAbout] = useState(props.about);

  const toast = useToast();

  const handleSwithTripStatus = () => {
    props.actions
      ?.changeProfile({ profile: { tripStatus: !tripStatus } })
      .then((res) => {
        toast({
          title: 'وضعیت سفر با موفقیت تغییر کرد',
          // description:
          //   'برای اضافه کردن نقد و بررسی باید کاربر سایت باشید، ثبت‌نام کنید یا وارد شوید.',
          status: 'success',
          duration: 6000,
          isClosable: true,
          position: 'top',
        });
        setTripStatus(!tripStatus);
      })
      .catch((err) => {
        toast({
          title: 'خطا در تغییر وضعیت سفر',
          // description:
          //   'برای اضافه کردن نقد و بررسی باید کاربر سایت باشید، ثبت‌نام کنید یا وارد شوید.',
          status: 'error',
          duration: 6000,
          isClosable: true,
          position: 'top',
        });
      });
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="sm">ویرایش پروفایل</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <Divider /> */}
          <Stack p="2">
            <Stack
              borderWidth="thin"
              borderColor="gray.300"
              borderRadius="md"
              p="2"
            >
              <Formik
                initialValues={{
                  username: username,
                }}
                validationSchema={Yup.object().shape({
                  username: Yup.string().required(
                    'یوزنیم نمی‌تواند خالی باشد!'
                  ),
                })}
                onSubmit={(values, { setSubmitting, setFieldError }) => {
                  props.actions
                    ?.changeUser({
                      userInputs: {
                        username: values.username,
                      },
                    })
                    .then((res) => {
                      if (res.data?.updateUser?.user?.username) {
                        setUsername(res.data?.updateUser?.user?.username);
                        toast({
                          title: 'یوزر نیم با موفقیت تغییر پیدا کرد',
                          // description:
                          //   'برای اضافه کردن نقد و بررسی باید کاربر سایت باشید، ثبت‌نام کنید یا وارد شوید.',
                          status: 'success',
                          duration: 6000,
                          isClosable: true,
                          position: 'top',
                        });
                      }
                    })
                    .catch((err) => {
                      setFieldError(
                        'username',
                        props.queries?.changeUserQuery.error?.message
                          ? 'نام‌کاربری تکراری است.'
                          : 'خطا'
                      );
                    });
                }}
              >
                {(formProps) => (
                  <Form>
                    <Field name="username">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl>
                          <FormLabel>نام کاربری</FormLabel>
                          <InputGroup>
                            <InputLeftElement pointerEvents="none">
                              <AtSignIcon color="gray.300" />
                            </InputLeftElement>

                            <Input
                              variant="filled"
                              placeholder={username}
                              id="username"
                              {...field}
                              type="text"
                            />
                            <InputRightAddon>
                              <Button
                                isLoading={
                                  props.queries?.changeUserQuery.loading
                                }
                                size="sm"
                                type="submit"
                                variant="ghost"
                                colorScheme={
                                  props.queries?.changeUserQuery.data
                                    ?.updateUser
                                    ? 'primary'
                                    : 'gray'
                                }
                              >
                                اعمال تغییر
                              </Button>
                            </InputRightAddon>
                          </InputGroup>
                          <Box textColor="red" my="2" fontSize="sm">
                            <ErrorMessage name="username" component="div" />
                          </Box>
                        </FormControl>
                      )}
                    </Field>
                  </Form>
                )}
              </Formik>
            </Stack>
            {/* ************************** CHANGE TRIP STATUS ************************ */}
            <Stack
              borderWidth="thin"
              borderColor="gray.300"
              borderRadius="md"
              p="2"
              align="center"
              alignItems="center"
              justify="center"
            >
              <FormControl
                display="flex"
                alignItems="center"
                alignContent="center"
              >
                <FormLabel htmlFor="tripStatus" mb="0">
                  وضعیت سفر
                </FormLabel>

                <Switch
                  mt="1"
                  defaultChecked={tripStatus}
                  colorScheme="primary"
                  id="tripStatus"
                  isChecked={tripStatus}
                  onChange={handleSwithTripStatus}
                  isDisabled={props.queries?.changeProfileQuery.loading}
                />
                <Text fontWeight="light"></Text>
              </FormControl>
            </Stack>
            {/* ************************** CHANGE PROFILE ************************ */}
            <Stack
              borderWidth="thin"
              borderColor="gray.300"
              borderRadius="md"
              p="2"
            >
              <Formik
                initialValues={{
                  about: about,
                }}
                // validationSchema={Yup.object().shape({
                //   username: Yup.string().required(
                //     'یوزنیم نمی‌تواند خالی باشد!'
                //   ),
                // })}
                onSubmit={(values, { setSubmitting, setFieldError }) => {
                  setAbout(values.about);
                  props.actions
                    ?.changeProfile({ profile: { about: values.about } })
                    .then((res) => {
                      if (res.data?.updateProfile?.profile?.about) {
                        toast({
                          title: 'پروفایل شما با موفقیت تغییر کرد',
                          // description:
                          //   'برای اضافه کردن نقد و بررسی باید کاربر سایت باشید، ثبت‌نام کنید یا وارد شوید.',
                          status: 'success',
                          duration: 6000,
                          isClosable: true,
                          position: 'top',
                        });
                      }
                    })
                    .catch((err) => {
                      setFieldError(
                        'about',
                        props.queries?.changeProfileQuery.error &&
                          'خطا در تغییر اطلاعات'
                      );
                    });
                }}
              >
                {(formProps) => (
                  <Form>
                    <Field name="about">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl>
                          <FormLabel>درباره شما</FormLabel>
                          <Stack>
                            <Textarea
                              variant="filled"
                              placeholder={about}
                              id="about"
                              {...field}
                            />
                            <Button
                              isLoading={props.queries?.changeUserQuery.loading}
                              size="sm"
                              type="submit"
                              variant="ghost"
                              colorScheme={
                                props.queries?.changeUserQuery.data?.updateUser
                                  ? 'primary'
                                  : 'gray'
                              }
                            >
                              اعمال تغییر
                            </Button>
                          </Stack>
                          <Box textColor="red" my="2" fontSize="sm">
                            <ErrorMessage name="about" component="div" />
                          </Box>
                        </FormControl>
                      )}
                    </Field>
                  </Form>
                )}
              </Formik>
            </Stack>
            {/* ************************** CHANGE PASSWORD ************************ */}
            <Stack
              borderWidth="thin"
              borderColor="gray.300"
              borderRadius="md"
              p="2"
            >
              <Formik
                initialValues={{
                  oldPassword: '',
                  newPassword1: '',
                  newPassword2: '',
                }}
                validationSchema={Yup.object().shape({
                  oldPassword: Yup.string().required(
                    'این فیلد نمی‌تواند خالی باشد.'
                  ),
                  newPassword1: Yup.string().required(
                    'این فیلد نمی‌تواند خالی باشد.'
                  ),
                  newPassword2: Yup.string()
                    .oneOf(
                      [Yup.ref('newPassword1'), null],
                      'تکرار پسورد با پسورد وارد شده برابر نیست!'
                    )
                    .required('این فیلد نمی‌تواند خالی باشد.'),
                })}
                onSubmit={(values, { setSubmitting, setFieldError }) => {
                  props.actions
                    ?.changePassword(
                      values.oldPassword,
                      values.newPassword1,
                      values.newPassword2
                    )
                    .then((res) => {
                      if (res.data?.passwordChange?.success) {
                        toast({
                          title: 'کلمه‌عبور با موفقیت تغییر پیدا کرد.',
                          // description:
                          //   'برای اضافه کردن نقد و بررسی باید کاربر سایت باشید، ثبت‌نام کنید یا وارد شوید.',
                          status: 'success',
                          duration: 6000,
                          isClosable: true,
                          position: 'top',
                        });
                      }
                      setFieldError(
                        'oldPassword',
                        res.data?.passwordChange?.errors.nonFieldErrors[0]
                          .message
                      );
                    })
                    .catch((err) => {
                      setFieldError('oldPassword', 'خطا');
                    });
                }}
              >
                {(formProps) => (
                  <Form>
                    <Field name="oldPassword">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl>
                          <FormLabel>کلمه‌ی عبور</FormLabel>

                          <InputGroup>
                            <InputLeftElement pointerEvents="none">
                              <Icon as={FiKey} color="gray.300" />
                            </InputLeftElement>

                            <Input
                              variant="filled"
                              placeholder="کلمه‌ی عبور قبلی"
                              id="oldPassword"
                              {...field}
                              type="password"
                            />
                          </InputGroup>

                          <Box textColor="red" my="2" fontSize="sm">
                            <ErrorMessage name="oldPassword" component="div" />
                          </Box>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="newPassword1">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl>
                          <InputGroup>
                            <InputLeftElement pointerEvents="none">
                              <Icon as={FiKey} color="gray.300" />
                            </InputLeftElement>

                            <Input
                              variant="filled"
                              placeholder="کلمه‌ی عبور جدید"
                              id="newPassword1"
                              {...field}
                              type="password"
                            />
                          </InputGroup>

                          <Box textColor="red" my="2" fontSize="sm">
                            <ErrorMessage name="newPassword1" component="div" />
                          </Box>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="newPassword2">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl>
                          <InputGroup>
                            <InputLeftElement pointerEvents="none">
                              <Icon as={FiKey} color="gray.300" />
                            </InputLeftElement>

                            <Input
                              variant="filled"
                              placeholder="تکرار کلمه‌عبور جدید"
                              id="newPassword2"
                              {...field}
                              type="password"
                            />
                            <InputRightAddon>
                              <Button
                                isLoading={
                                  props.queries?.changePasswordQuery.loading
                                }
                                size="sm"
                                type="submit"
                                variant="ghost"
                                colorScheme={
                                  props.queries?.changePasswordQuery.data
                                    ?.passwordChange
                                    ? 'primary'
                                    : 'gray'
                                }
                              >
                                اعمال تغییر
                              </Button>
                            </InputRightAddon>
                          </InputGroup>

                          <Box textColor="red" my="2" fontSize="sm">
                            <ErrorMessage name="newPassword2" component="div" />
                          </Box>
                        </FormControl>
                      )}
                    </Field>
                  </Form>
                )}
              </Formik>
            </Stack>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Wrap>
            {/* <Button
              colorScheme="primary"
              variant="ghost"
              mr={3}
              onClick={props.onClose}
            >
              ثبت
            </Button> */}
            <Button
              colorScheme="red"
              variant="ghost"
              mr={3}
              onClick={props.onClose}
            >
              انصراف
            </Button>
          </Wrap>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProfileEditModal;
