import React from 'react';
import {
  StyledView,
  StyledText,
  Leftarrow,
  SearchSvg,
  StyledImage,
} from '../common/StyledComponents';
// import Svg, {SvgXml} from 'react-native-svg';

const HomePage = () => {
  return (
    <StyledView style={{backgroundColor: '#Fff'}}>
      <StyledView className="flex flex-row justify-between mt-[30px] ml-[20px] mr-[10px]">
        <Leftarrow width={50} height={50} stroke="black" />
        <StyledText>12 January 2023</StyledText>
        <SearchSvg width={50} height={50} stroke="green" />
      </StyledView>

      <StyledView className="h-[30px] bg-red-700"></StyledView>

      <StyledView style={{backgroundColor: '#E4E4E4'}} className="flex">
        <StyledView className="flex  mt-[30px] ml-[20px] mr-[20px]">
          <StyledText>Salads</StyledText>
          <StyledView className="flex flex-row rounded-[20px] mt-[20px]">
            <StyledImage source={require('../assets/images/salad.png')} />
            <StyledView style={{backgroundColor: '#fff'}} className="flex">
              <StyledText>Vegeterian bowl</StyledText>
              <StyledText>
                Lorem ipsum dolor sit amet, consectetur adipisci
              </StyledText>
              <StyledView className="flex flex-row">
                <StyledText>4 items left</StyledText>
                <StyledText>12 AZN</StyledText>
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default HomePage;
