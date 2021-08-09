import { TimeIcon, CalendarIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Divider,
  HStack,
  Stack,
  Tag,
  Wrap,
  Text,
  Flex,
  Image,
  Center,
} from '@chakra-ui/react';
import React from 'react';
import { FaFire } from 'react-icons/fa';
import { FiBookmark, FiHeart, FiMoreHorizontal } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import TravelogueActivities from '../travelogue/TravelogueActivities';

interface Props {}

function ActivityCard() {
  return (
    <Center p="2" rounded="sm" shadow="sm">
      <Stack align="center">
        <FaFire />
        <Text fontSize="xs">آتش نشینی</Text>
      </Stack>
    </Center>
  );
}

const TripListCard = (props: Props) => {
  return (
    <Flex
      w="full"
      direction={{ base: 'column', md: 'row', lg: 'row' }}
      boxShadow="md"
      p="3"
      rounded="md"
      justify="center"
    >
      <Stack flex="3">
        <Wrap spacing="1">
          <Tag size="sm" variant="solid" colorScheme="primary">
            خانوادگی
          </Tag>
          <Tag size="sm" variant="solid" colorScheme="primary">
            ماجراجویی
          </Tag>
        </Wrap>
        <Text as="h2" fontSize="md" fontWeight="semibold">
          گشت و گذار در شیراز
        </Text>
        <Wrap fontSize="sm" spacing="1">
          <Wrap align="center">
            <TimeIcon ml="1" />
            <Text fontWeight="light">۲ روز</Text>
          </Wrap>
          <Divider orientation="vertical" />
          <Wrap align="center">
            <CalendarIcon ml="1" />
            <Text fontWeight="light">۱۴۰۰ پاییز</Text>
          </Wrap>
          <Divider orientation="vertical" />
          <Wrap align="center">
            <HiLocationMarker />
            <Text fontWeight="light">شیراز - ایران</Text>
          </Wrap>
          <Divider orientation="vertical" />
          <Wrap align="center" spacing="0.5">
            <Text fontWeight="extrabold">۱۲</Text>
            <Text fontWeight="light">تجربه</Text>
          </Wrap>
          <Divider orientation="vertical" />
          <Wrap align="center" spacing="0.5">
            <Text fontWeight="extrabold">۳۰</Text>
            <Text fontWeight="light">جاذبه</Text>
          </Wrap>
        </Wrap>
        <Wrap>
          <ActivityCard />
        </Wrap>
        <Text fontWeight="light" fontSize="sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
        </Text>

        <HStack align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
            size="sm"
            ml="2"
          />
          <Text fontWeight={300} fontSize="sm" dir="ltr">
            @mohammadmaso
          </Text>
        </HStack>
      </Stack>
      <Flex
        w="full"
        flex="2"
        direction={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <Wrap
          direction={{ base: 'row-reverse', md: 'column', lg: 'column' }}
          my={{ base: '3', md: '0', lg: '0' }}
          ml="2"
        >
          <Wrap
            spacing="1"
            direction={{ base: 'row-reverse', md: 'column', lg: 'column' }}
          >
            <FiHeart />
            <Text alignSelf="center" fontSize="xs">
              ۲۳۴
            </Text>
          </Wrap>
          <FiBookmark />
          <FiMoreHorizontal />
        </Wrap>
        <Wrap w="full">
          <Image
            src="/images/angelo-pantazis-zXVk8mNl9M0-unsplash.jpg"
            alt="travel image"
            rounded="md"
            w="full"
            h="250px"
            objectFit="cover"
          />
        </Wrap>
      </Flex>
    </Flex>
  );
};

export default TripListCard;
