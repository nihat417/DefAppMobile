import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
  LocationSvg,
} from '../../common/StyledComponents';

import HomeHeader from '../components/HomePage/HomeHeader';
import HomeSlider from '../components/HomePage/HomeSlider';

const HomePage = () => {
  return (
    <StyledScrollView>
      {/* homeheader */}
      <HomeHeader />

      {/* Main */}
      <StyledScrollView style={{backgroundColor: '#F8F8F8'}} className="h-[68.5%]">
        <HomeSlider/>
      </StyledScrollView>
    </StyledScrollView>
  );
};

export default HomePage;
