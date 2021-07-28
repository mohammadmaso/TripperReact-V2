import { Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import TravelerCard from '../cards/TravelerCard';
import TripSmallCard from '../cards/TripSmallCard';

interface Props {}

const TripList = (props: Props) => {
  return (
    <div>
      <Wrap spacing="5" justify="center">
        <WrapItem>
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
        </WrapItem>
        <WrapItem>
          <TripSmallCard
            categories={['ماجراجویی', 'خانوادگی']}
            name="سفر دو روزه به کیش"
            likes={347}
            city="تهران"
            days={'۴'}
            username="MohammadMaso"
            avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
            image={'https://source.unsplash.com/800x600/?nature'}
          />{' '}
        </WrapItem>
        <WrapItem>
          <TripSmallCard
            categories={['ماجراجویی', 'خانوادگی']}
            name="سفر دو روزه به کیش"
            likes={347}
            city="تهران"
            days={'۴'}
            username="MohammadMaso"
            avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
            image={'https://source.unsplash.com/800x600/?nature'}
          />{' '}
        </WrapItem>
        <WrapItem>
          <TripSmallCard
            categories={['ماجراجویی', 'خانوادگی']}
            name="سفر دو روزه به کیش"
            likes={347}
            city="تهران"
            days={'۴'}
            username="MohammadMaso"
            avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
            image={'https://source.unsplash.com/800x600/?nature'}
          />{' '}
        </WrapItem>
        <WrapItem>
          <TripSmallCard
            categories={['ماجراجویی', 'خانوادگی']}
            name="سفر دو روزه به کیش"
            likes={347}
            city="تهران"
            days={'۴'}
            username="MohammadMaso"
            avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
            image={'https://source.unsplash.com/800x600/?nature'}
          />{' '}
        </WrapItem>
        <WrapItem>
          <TripSmallCard
            categories={['ماجراجویی', 'خانوادگی']}
            name="سفر دو روزه به کیش"
            likes={347}
            city="تهران"
            days={'۴'}
            username="MohammadMaso"
            avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
            image={'https://source.unsplash.com/800x600/?nature'}
          />{' '}
        </WrapItem>
        <WrapItem>
          <TripSmallCard
            categories={['ماجراجویی', 'خانوادگی']}
            name="سفر دو روزه به کیش"
            likes={347}
            city="تهران"
            days={'۴'}
            username="MohammadMaso"
            avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
            image={'https://source.unsplash.com/800x600/?nature'}
          />{' '}
        </WrapItem>
      </Wrap>
    </div>
  );
};

export default TripList;
