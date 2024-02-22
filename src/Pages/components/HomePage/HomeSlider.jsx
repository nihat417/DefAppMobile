import React from 'react';
import {
  StyledView,
  StyledText,
  LocationSvg,
} from '../../../common/StyledComponents';
import {SliderBox} from 'react-native-image-slider-box';

const HomeSlider = () => {
  const Images = [
    require('../../../assets/images/deliciousimgae1.jpg'),
    require('../../../assets/images/deliciousimage2.jpg'),
    require('../../../assets/images/deliciouseimage3.jpg'),
  ];
  return (
    <StyledView>
      <SliderBox
        images={Images}
        dotColor="#FFFEFE"
        inactiveDotColor="#717171"
        paginationBoxVerticalPadding={20}
        autoplay
        autoplayInterval={5000}
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
      />
    </StyledView>
  );
};


export default HomeSlider;
