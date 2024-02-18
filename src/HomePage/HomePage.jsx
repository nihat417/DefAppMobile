import React from 'react';
import {StyledView, StyledText} from '../common/StyledComponents';
// import Svg, {SvgXml} from 'react-native-svg';
import Leftarrow from '../assets/svg/LeftArrow';

const HomePage = () => {
  return (
    <StyledView>
      <Leftarrow width={50} height={50} stroke="black" />
      <StyledText className="bg-red-600 ">salam</StyledText>
    </StyledView>
  );
};

export default HomePage;
