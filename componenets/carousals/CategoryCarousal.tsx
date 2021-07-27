import { Box, Grid, Heading, HStack, Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import Slider from 'react-slick';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import CategoryCard from '../cards/CategoryCard';

interface Props {
  slideToShow?: number;
}

export default function CategoryCarousal({
  slideToShow = 5,
}: Props): ReactElement {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slideToShow,
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
        انواع سفر‌
      </Heading>
      <Slider {...settings}>
        <CategoryCard
          name="ماجراجویی"
          image={'https://source.unsplash.com/800x600/?nature'}
        />
        <CategoryCard
          name="غذا"
          image={'https://source.unsplash.com/802x600/?nature'}
        />
        <CategoryCard
          name="فرهنگ"
          image={'https://source.unsplash.com/800x602/?nature'}
        />
        <CategoryCard
          name="کوه‌نوردی"
          image={'https://source.unsplash.com/800x603/?nature'}
        />
        <CategoryCard
          name="خانوادگی"
          image={'https://source.unsplash.com/800x604/?nature'}
        />
        <CategoryCard
          name="کمپینگ"
          image={'https://source.unsplash.com/800x605/?nature'}
        />
      </Slider>
    </Box>
  );
}
