import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../public/animations/loadingWorld.json';

type Props = {};

const LoadingWord = (props: Props) => {
  return (
    <>
      <Lottie
        options={{
          animationData: animationData,
          autoplay: true,
          loop: true,
        }}
        height={200}
        width={200}
      />
    </>
  );
};

export default LoadingWord;
