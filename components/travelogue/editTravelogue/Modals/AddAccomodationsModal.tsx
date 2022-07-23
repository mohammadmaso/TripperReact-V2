import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Stack,
  Icon,
  Wrap,
  Center,
  FormControl,
  Input,
  FormErrorMessage,
  Textarea,
  Box,
  useToast,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  InputGroup,
  InputRightElement,
  Spinner,
  Divider,
  Flex,
  Avatar,
  IconButton,
  Radio,
  Image,
  RadioGroup,
  FormLabel,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { Form, Formik, ErrorMessage, Field } from 'formik';

import { BiBed } from 'react-icons/bi';
import { SelectPointMap } from './SelectPointMap';
import {
  Exact,
  GetAllResidenceTypesQuery,
} from '../../../../graphql/generated/types';
import { LazyQueryResult } from '@apollo/client/react/types/types';
import { FiMapPin } from 'react-icons/fi';
import { HiOutlineHome } from 'react-icons/hi';

interface Props {
  data: any;
  isOpen: boolean;
  onClose: any;
  actions: {
    getAllResidenceType: () => void;
  };
  queries: {
    allResidenceTypeQuery: LazyQueryResult<
      GetAllResidenceTypesQuery,
      Exact<{
        [key: string]: never;
      }>
    >;
  };
  onAddAccomodation: any;
}

const AddAccomodationsModal = (props: Props) => {
  const [location, setLocation] = useState<any>([]);

  useEffect(() => {
    if (props.isOpen == true) {
      props.actions?.getAllResidenceType();
    }
  }, [props.isOpen]);

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size="lg"
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent rounded="none">
        <ModalHeader fontWeight="light">
          <Wrap align="center">
            <Icon as={BiBed} />
            <Text>افزودن اقامت</Text>
          </Wrap>
        </ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{
            srcProvince: '',
            destProvince: '',
            destCity: '',
            srcCity: '',
            type: '',
          }}
          validationSchema={Yup.object().shape({
            srcProvince: Yup.string().required(
              'استان مبدا نمی‌تواند خالی باشد.'
            ),
            destProvince: Yup.string().required(
              'استان مقصد نمی‌تواند خالی باشد.'
            ),
            destCity: Yup.string().required('شهر مقصد نمی‌تواند خالی باشد.'),
            srcCity: Yup.string().required('شهر مبدا نمی‌تواند خالی باشد.'),
            type: Yup.string().required('نوع رفت آمد نمی تواند خالی باشد.'),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            // props.actions
            //   .createTransfer({
            //     src: values.srcCity,
            //     destination: values.destCity,
            //     transferType: values.type,
            //     transferInput: {
            //       startTime: null,
            //       duration: 0,
            //     },
            //   })
            //   .then((res) => {
            //     if (res.data?.createTransfer?.success === true) {
            //       props.onClose();
            //       props.onAddTransfer(res.data.createTransfer?.transfer);
            //     }
            //   });
          }}
        >
          {(formProps) => (
            <Form>
              <ModalBody>
                <Field name="name">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl isRequired>
                      <FormLabel>نام اقامتگاه</FormLabel>
                      <Input id="name" {...field} type="text" />
                      <Box textColor="red" fontSize="sm" my="2">
                        <ErrorMessage name="name" component="div" />
                      </Box>
                    </FormControl>
                  )}
                </Field>
                <Field name="titstayDurationle">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl>
                      <FormLabel>مدت روز اقامت</FormLabel>
                      <Input id="stayDuration" {...field} type="number" />
                      <Box textColor="red" fontSize="sm" my="2">
                        <ErrorMessage name="stayDuration" component="div" />
                      </Box>
                    </FormControl>
                  )}
                </Field>
                <SelectPointMap
                  setLocation={(location: any) => setLocation(location)}
                  initialLocation={{
                    longitude: props.data.province.longitude,
                    latitude: props.data.province.latitude,
                  }}
                />
                <Divider py="2" />
                <Wrap spacing="1" align="center" py="2">
                  <HiOutlineHome />
                  <Text fontWeight="extrabold">نوع اقامتگاه</Text>
                </Wrap>
                <RadioGroup
                  onChange={(value) => formProps.setFieldValue('type', value)}
                  value={formProps.values.type}
                >
                  <Wrap>
                    {props.queries.allResidenceTypeQuery.data?.allResidenceTypes?.edges.map(
                      (item) => (
                        <Radio key={item?.node?.id} value={item?.node?.id!}>
                          <Stack
                            justifyContent={'center'}
                            alignItems={'center'}
                          >
                            <Image
                              h="30"
                              src={item?.node?.svg!}
                              alt={item?.node?.name!}
                            />{' '}
                            <Text fontSize={'sm'}>{item?.node?.name!}</Text>
                          </Stack>
                        </Radio>
                      )
                    )}
                  </Wrap>
                </RadioGroup>
              </ModalBody>
              <ModalFooter>
                <Wrap>
                  <Button
                    isLoading={false}
                    colorScheme="primary"
                    variant="ghost"
                    size="sm"
                    type="submit"
                  >
                    اضافه کردن
                  </Button>
                  <Button
                    colorScheme="red"
                    variant="ghost"
                    size="sm"
                    onClick={props.onClose}
                  >
                    انصراف
                  </Button>
                </Wrap>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default AddAccomodationsModal;
