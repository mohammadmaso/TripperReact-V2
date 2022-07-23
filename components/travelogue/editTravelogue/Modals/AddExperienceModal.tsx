import {
  LazyQueryResult,
  MutationResult,
} from '@apollo/client/react/types/types';
import {
  Modal,
  Input,
  Divider,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Wrap,
  Icon,
  Text,
  ModalCloseButton,
  ModalBody,
  Stack,
  InputGroup,
  InputRightElement,
  Spinner,
  ModalFooter,
  SimpleGrid,
  Box,
  Button,
  Checkbox,
  RadioGroup,
  Radio,
  Image,
  FormControl,
  FormLabel,
  Textarea,
  Center,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import Compressor from 'compressorjs';

import React, { useEffect, useState } from 'react';
import { BiTransfer } from 'react-icons/bi';
import { FiShoppingBag, FiActivity, FiMapPin, FiImage } from 'react-icons/fi';
import {
  AllActivitiesQueryResult,
  AllProvincesOfCountryQuery,
  Maybe,
  Exact,
  TripActivitieType,
  TripActivitieTypeEdge,
  AllCitiesOfProvinceQuery,
  AllTransferTypesQuery,
  CreateSinglTransferMutationVariables,
  CreateSinglTransferMutation,
  CreateExperinceMutationMutation,
  CreateExperinceMutationMutationVariables,
  CreateExperienceImageMutationVariables,
  CreateExperienceImageMutation,
} from '../../../../graphql/generated/types';
import { ActivityCard } from '../../../cards/ActivityCard';
import { createSelectorOptions } from '../../../../utils/selectOptions';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import { FetchResult } from '@apollo/client/link/core/types';
import { SelectPointMap } from './SelectPointMap';
import SelectForm from '../../../SelectForm';

interface Props {
  data: any;
  isOpen: boolean;
  onClose: any;
  actions: {
    createExperience: (
      inputs: CreateExperinceMutationMutationVariables
    ) => Promise<
      FetchResult<
        CreateExperinceMutationMutation,
        Record<string, any>,
        Record<string, any>
      >
    >;
    createExperienceImages: (
      inputs: CreateExperienceImageMutationVariables
    ) => Promise<
      FetchResult<
        CreateExperienceImageMutation,
        Record<string, any>,
        Record<string, any>
      >
    >;
    getAllActivitites: () => void;
  };
  queries: {
    createExperienceStatus: MutationResult<CreateExperinceMutationMutation>;
    createExperienceImagesStatus: MutationResult<CreateExperienceImageMutation>;
    allActivititesQuery: AllActivitiesQueryResult;
  };
  onAddExperience: any;
}

const AddExperienceModal = (props: Props) => {
  useEffect(() => {
    if (props.isOpen == true) {
      props.actions?.getAllActivitites();
    }
  }, [props.isOpen]);

  const inputFileImage = React.useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<any[]>([]);
  const [location, setLocation] = useState<any>([]);

  const [imagesUploadedId, setImagesUploadedId] = useState<any[]>([]);

  const [uploading, setUploading] = useState(false);

  const handleCompressedUpload = (e: any) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        setImages((prevState) => [...prevState, fileReader.result as string]);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
    const image = e.target.files[0];

    setUploading(true);
    new Compressor(image, {
      quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
      maxHeight: 1000,
      maxWidth: 1000,
      success: (res) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.

        props.actions
          .createExperienceImages({ imageList: [{ image: res }] })
          .then((res) => {
            if (res.data?.createExperienceImages?.success == true) {
              setUploading(false);
              let id = res.data?.createExperienceImages?.images?.map(
                (item) => item?.id
              ) as string[];
              if (id != undefined) {
                setImagesUploadedId((prevState) => [...prevState, id[0]]);
              }
            }
          });
      },
      error(err) {
        console.log(err.message);
      },
    });
  };

  const onImageButtonClick = () => {
    inputFileImage?.current?.click();
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size="3xl"
      motionPreset="slideInBottom"
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent rounded="none">
        <ModalHeader fontWeight="light">
          <Wrap align="center">
            <Icon as={BiTransfer} />
            <Text>افزودن تجربه</Text>
          </Wrap>
        </ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{
            title: '',
            description: '',
            // images: [], //hndle by imageState
            activities: [],
          }}
          validationSchema={Yup.object().shape({
            title: Yup.string().required('عنوان نمی‌تواند خالی باشد.'),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            props.actions
              .createExperience({
                experienceInput: {
                  title: values?.title,
                  description: values.description,
                  longitude: location.longitude,
                  latitude: location.latitude,
                },
                experienceRelatedInput: {
                  images: imagesUploadedId,
                  activities: values.activities,
                },
              })
              .then((res) => {
                if (res.data?.createExperience?.success === true) {
                  props.onClose();
                  props.onAddExperience(res.data.createExperience.experience);
                }
              });
          }}
        >
          {(formProps) => (
            <Form>
              <ModalBody>
                <Stack>
                  <Divider />

                  <Wrap direction="column" p="2">
                    <Field name="title">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl isRequired>
                          <FormLabel>عنوان تجربه</FormLabel>
                          <Input
                            placeholder="مثلا: پیمایش خلخال به اسالم"
                            id="title"
                            {...field}
                            type="text"
                          />
                          <Box textColor="red" fontSize="sm" my="2">
                            <ErrorMessage name="title" component="div" />
                          </Box>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="description">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl>
                          <FormLabel>توضیحات</FormLabel>
                          <Textarea
                            placeholder="توضیات مختصر راجع به تجربه شما"
                            id="description"
                            {...field}
                            type="text"
                          />
                          <Box textColor="red" my="2">
                            <ErrorMessage name="description" component="div" />
                          </Box>
                        </FormControl>
                      )}
                    </Field>
                    <Stack>
                      <SelectForm
                        name="فعالیت‌ها"
                        options={
                          !props.queries.allActivititesQuery?.data
                            ? [{ label: '...', value: null }]
                            : createSelectorOptions(
                                'titleFa',
                                props.queries.allActivititesQuery?.data
                                  .allActivities?.edges
                              )
                        }
                        isMulti={true}
                        inputChange={(inputValue: any) => {
                          console.log(inputValue);
                          let a = inputValue.map((item: any) => item.value);
                          formProps.setFieldValue('activities', a);
                        }}
                        loading={props.queries?.allActivititesQuery?.loading}
                      />
                      <Box textColor="red" my="2">
                        <ErrorMessage name="province" component="div" />
                      </Box>
                    </Stack>
                  </Wrap>

                  <Divider />
                  <Box
                    flexDirection={'column'}
                    // direction="column"
                    p="2"
                    borderWidth="2px"
                    borderRadius="md"
                    borderStyle="dashed"
                  >
                    <input
                      type="file"
                      id="file"
                      ref={inputFileImage}
                      style={{ display: 'none' }}
                      accept="image/*"
                      onChange={(e) => handleCompressedUpload(e)}
                    />
                    <Stack
                      align="center"
                      justifyContent="center"
                      h="100px"
                      bgColor="gray.100"
                      borderRadius="md"
                      onClick={onImageButtonClick}
                      cursor="pointer"
                      mb="3"
                    >
                      <Icon
                        as={FiImage}
                        h="1.5rem"
                        w="1.5rem"
                        color="gray.400"
                      />
                      <Text color="gray.400">تصویر را انتخاب کنید.</Text>
                    </Stack>
                    <Wrap
                      //   columns={{ base: 1, sm: 2, md: 4 }}
                      justifyContent="center"
                    >
                      {images.map((item) => (
                        <Image
                          key={item}
                          id={item}
                          src={item}
                          alt=""
                          h="100px"
                          borderRadius="md"
                        />
                      ))}
                    </Wrap>
                  </Box>
                  <SelectPointMap
                    setLocation={(location: any) => setLocation(location)}
                    initialLocation={{
                      longitude: props.data.province.longitude,
                      latitude: props.data.province.latitude,
                    }}
                  />
                </Stack>
              </ModalBody>
              <ModalFooter>
                <Wrap>
                  <Button
                    isLoading={props.queries?.createExperienceStatus?.loading}
                    isDisabled={uploading}
                    colorScheme="primary"
                    variant="ghost"
                    size="sm"
                    type="submit"
                  >
                    {uploading ? 'در حال اپلود تصاویر' : 'اضافه کردن'}
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

export default AddExperienceModal;
