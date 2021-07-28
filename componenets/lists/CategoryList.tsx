import { Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import CategoryCard from '../cards/CategoryCard';
import TravelerCard from '../cards/TravelerCard';

interface Props {}

const CategoryList = (props: Props) => {
  return (
    <div>
      <Wrap spacing="5" justify="center">
        <WrapItem>
          <CategoryCard
            name="ماجراجویی"
            image={'https://source.unsplash.com/800x600/?nature'}
          />
        </WrapItem>
        <WrapItem>
          <CategoryCard
            name="غذا"
            image={'https://source.unsplash.com/802x600/?nature'}
          />{' '}
        </WrapItem>

        <WrapItem>
          <CategoryCard
            name="فرهنگ"
            image={'https://source.unsplash.com/800x602/?nature'}
          />{' '}
        </WrapItem>

        <WrapItem>
          <CategoryCard
            name="کوه‌نوردی"
            image={'https://source.unsplash.com/800x603/?nature'}
          />{' '}
        </WrapItem>

        <WrapItem>
          <CategoryCard
            name="خانوادگی"
            image={'https://source.unsplash.com/800x604/?nature'}
          />{' '}
        </WrapItem>

        <WrapItem>
          <CategoryCard
            name="کمپینگ"
            image={'https://source.unsplash.com/800x605/?nature'}
          />{' '}
        </WrapItem>
      </Wrap>
    </div>
  );
};

export default CategoryList;
