import { Stack, Wrap, Text, Box, Divider } from '@chakra-ui/react';
import React from 'react';
import { FiEye, FiUsers } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';

interface Props {}

function ExperienceCard() {
  return (
    <Box borderRadius="lg" borderWidth="thin" w="full" minH="7rem" p="2">
      <Stack spacing="0.5">
        <Text>کمپ جزیره ستارگان</Text>
        <Wrap fontSize="xs" align="center">
          <HiLocationMarker />
          <Text>شیراز - ایران</Text>
        </Wrap>
        <Wrap fontSize="sm" fontWeight="light" p="2">
          <Divider />
          <Text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
          </Text>
        </Wrap>
      </Stack>
    </Box>
  );
}

export const Experiences = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiEye />
        <Text>تجربه‌ها</Text>
      </Wrap>
      <Wrap>
        <ExperienceCard />
        <ExperienceCard />
      </Wrap>
    </Stack>
  );
};
