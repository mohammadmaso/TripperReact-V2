import { Box, Grid, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import Slider from 'react-slick';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import WikiCard from '../cards/WikiCard';

interface Props {}

export default function WikiCarusal({}: Props): ReactElement {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box py={10}>
      <Heading size="lg" fontWeight="500" ml={3}>
        آخرین مقاله‌ها
      </Heading>
      <Slider {...settings}>
        <WikiCard
          category="کوهنوردی"
          image="https://source.unsplash.com/802x602/?nature"
        />
        <WikiCard
          category="کمپ"
          image="https://source.unsplash.com/803x600/?nature"
        />
        <WikiCard
          category="سفرجاده‌ای"
          image="https://source.unsplash.com/804x600/?nature"
        />
        <WikiCard
          category="غذا و نوشیدنی"
          image="https://source.unsplash.com/805x600/?food"
        />
        <WikiCard
          category="تجهیزات"
          image="https://source.unsplash.com/805x605/?nature"
        />
      </Slider>
    </Box>
  );
}
