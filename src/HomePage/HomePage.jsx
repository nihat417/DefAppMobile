import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  Leftarrow,
  SearchSvg,
  StyledImage,
} from '../common/StyledComponents';
// import Svg, {SvgXml} from 'react-native-svg';

const HomePage = () => {
  return (
    <StyledView style={{backgroundColor: '#Fff'}}>
      {/* header */}
      <StyledView className="flex flex-row justify-between mt-[30px] ml-[20px] mr-[10px]">
        <Leftarrow width={50} height={50} stroke="black" />
        <StyledText>12 January 2023</StyledText>
        <SearchSvg width={50} height={50} stroke="green" />
      </StyledView>

      {/* nav */}
      <StyledView className="flex flex-row h-[30px]">
        <StyledText
          style={{fontSize: 15}}
          className="mt-[5px] ml-[20px] mr-[20px]">
          All
        </StyledText>
        <StyledText
          style={{fontSize: 15}}
          className="mt-[5px] ml-[20px] mr-[20px]">
          Desserts
        </StyledText>
        <StyledText
          style={{fontSize: 15}}
          className="mt-[5px] ml-[20px] mr-[20px]">
          Salads
        </StyledText>
        <StyledText
          style={{fontSize: 15}}
          className="mt-[5px] ml-[20px] mr-[20px]">
          Burgers
        </StyledText>
        <StyledText
          style={{fontSize: 15}}
          className="mt-[5px] ml-[10px] mr-[10px]">
          Chicken
        </StyledText>
      </StyledView>

      {/* main */}
      <StyledScrollView
        style={{backgroundColor: '#E4E4E4'}}
        className="px-5 w-full h-full">
        {/* components */}
        <StyledView>
          <StyledText className="mt-[20px]">Salads</StyledText>
          <StyledView className="flex flex-row mt-[20px]">
            <StyledImage
              style={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10}}
              source={require('../assets/images/salad.png')}
            />
            <StyledView
              style={{
                backgroundColor: '#fff',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
              className="flex flex-col w-[240px]">
              <StyledView className="flex flex-row justify-between mt-[10px] ">
                <StyledText className="ml-[20px]">Vegeterian bowl</StyledText>
                <StyledImage
                  className="mr-[20px]"
                  source={require('../assets/images/newImage.png')}
                />
              </StyledView>
              <StyledText className="mt-[20px] mb-[20px] ml-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipisci
              </StyledText>
              <StyledView className="flex flex-row justify-between">
                <StyledText className="ml-[20px]">4 items left</StyledText>
                <StyledText className="mr-[20px]">12 AZN</StyledText>
              </StyledView>
            </StyledView>
          </StyledView>

        </StyledView>

        
      </StyledScrollView>
    </StyledView>
  );
};

export default HomePage;
