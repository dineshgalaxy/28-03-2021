import React from 'react';
import { CarouselProvider} from 'pure-react-carousel';

const SlideImg = () => {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      ></CarouselProvider>
    );
}
export default SlideImg;
