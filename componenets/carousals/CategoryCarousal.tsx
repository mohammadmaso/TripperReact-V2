import { Box, Grid, Heading, HStack, Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import Slider, { Settings } from 'react-slick';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import CategoryCard from '../cards/CategoryCard';

interface Props {
  slideToShow?: number;
  categories: any;
}

export default function CategoryCarousal(props: Props): ReactElement {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
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
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 2,
          dots: true,
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
        {props.categories.map((item: any) => (
          <>
            <CategoryCard
              key={item.node.id}
              id={item.node.id}
              title={item.node.title}
              image={item.node.image}
            />
          </>
        ))}
      </Slider>
    </Box>
  );
}
