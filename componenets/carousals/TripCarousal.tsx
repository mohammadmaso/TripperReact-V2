import { Box, Grid, Heading, HStack, Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import Slider from 'react-slick';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import TripSmallCard from '../cards/TripSmallCard';

interface Props {
  slideToShow?: number;
}

export default function TripCarousal(props: Props): ReactElement {
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
        جذاب‌ترین سفرنامه‌ها‌
      </Heading>
      <Slider {...settings}>
        <TripSmallCard
          categories={['ماجراجویی', 'خانوادگی']}
          name="سفر دو روزه به کیش"
          likes={347}
          city="تهران"
          days={4}
          username="MohammadMaso"
          avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
          image={'https://source.unsplash.com/800x600/?nature'}
        />
        <TripSmallCard
          categories={['ماجراجویی', 'طبیعت']}
          name="سفر دو روزه به کیش"
          likes={347}
          city="تهران"
          days={4}
          username="Sarazaman"
          avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
          image={'https://source.unsplash.com/800x600/?nature'}
        />
        <TripSmallCard
          categories={['ماجراجویی', 'خانوادگی']}
          name="سفر دو روزه به کیش"
          likes={347}
          city="تهران"
          days={'۴'}
          username="MohammadMaso"
          avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
          image={'https://source.unsplash.com/800x600/?nature'}
        />
        <TripSmallCard
          categories={['ماجراجویی', 'خانوادگی']}
          name="سفر دو روزه به کیش"
          likes={347}
          city="تهران"
          days={'۴'}
          username="MohammadMaso"
          avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
          image={'https://source.unsplash.com/800x600/?nature'}
        />
        <TripSmallCard
          categories={['ماجراجویی', 'خانوادگی']}
          name="سفر دو روزه به کیش"
          likes={347}
          city="تهران"
          days={'۴'}
          username="MohammadMaso"
          avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
          image={'https://source.unsplash.com/800x600/?nature'}
        />
        <TripSmallCard
          categories={['ماجراجویی', 'خانوادگی']}
          name="سفر دو روزه به کیش"
          likes={347}
          city="تهران"
          days={'۴'}
          username="MohammadMaso"
          avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
          image={'https://source.unsplash.com/800x600/?nature'}
        />
      </Slider>
    </Box>
  );
}
