import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
  Leftarrow,
  SearchSvg,
  SubscriptionSvg,
  HomeSvg,
  ScanSvg,
  HamburgerSvg,
} from '../common/StyledComponents';
// import Svg, {SvgXml} from 'react-native-svg';

const HomePage = () => {
  return (
    <StyledView>
      {/* header */}
      <StyledView
        style={{backgroundColor: '#fff'}}
        className="flex flex-row justify-between mt-[30px] ml-[20px] mr-[10px]">
        <Leftarrow width={50} height={50} stroke="black" />
        <StyledText style={{fontSize: 20, fontWeight: 500, color: '#414141'}}>
          12 January 2023
        </StyledText>
        <SearchSvg width={50} height={50} stroke="green" />
      </StyledView>

      {/* nav */}
      <StyledView className="flex flex-row h-[30px]">
        <StyledText
          style={{fontSize: 15, fontWeight: 500, color: '#B7B7B7'}}
          className="mt-[5px] ml-[20px] mr-[20px]">
          All
        </StyledText>
        <StyledText
          style={{fontSize: 15, fontWeight: 500, color: '#B7B7B7'}}
          className="mt-[5px] ml-[20px] mr-[20px]">
          Desserts
        </StyledText>
        <StyledText
          style={{fontSize: 15, fontWeight: 500, color: '#B7B7B7'}}
          className="mt-[5px] ml-[20px] mr-[20px]">
          Salads
        </StyledText>
        <StyledText
          style={{fontSize: 15, fontWeight: 500, color: '#B7B7B7'}}
          className="mt-[5px] ml-[20px] mr-[20px]">
          Burgers
        </StyledText>
        <StyledText
          style={{fontSize: 15, fontWeight: 500, color: '#B7B7B7'}}
          className="mt-[5px] ml-[10px] mr-[10px]">
          Chicken
        </StyledText>
      </StyledView>

      {/* main */}
      <StyledScrollView
        style={{backgroundColor: '#E4E4E4'}}
        className="px-5  w-full h-[78.8%]">
        {/* components */}
        <StyledView>
          <StyledText
            style={{fontSize: 20, fontWeight: 500}}
            className="mt-[20px]">
            Salads
          </StyledText>
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
                <StyledText
                  style={{fontSize: 15, fontWeight: 600, color: '#184639'}}
                  className="ml-[20px] font-bold">
                  Vegeterian bowl
                </StyledText>
                <StyledImage
                  className="mr-[20px]"
                  source={require('../assets/images/newImage.png')}
                />
              </StyledView>
              <StyledText
                style={{fontWeight: 400}}
                className="mt-[20px] mb-[20px] ml-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipisci
              </StyledText>
              <StyledView className="flex flex-row justify-between">
                <StyledText
                  style={{color: '#FF8C03', fontWeight: 700}}
                  className="ml-[20px]">
                  4 items left
                </StyledText>
                <StyledText
                  style={{color: '#42C2E5', fontWeight: 700}}
                  className="mr-[20px]">
                  12 AZN
                </StyledText>
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledScrollView>

      {/* navmenu */}

      <StyledView style={{backgroundColor:"fff"}} className="flex flex-row justify-between">
        <StyledView className='mt-[15px] ml-[40px]'>
          <HomeSvg className="ml-[8px]" width={20} height={30} stroke="black" />
          <StyledText>Home</StyledText>
        </StyledView>
        <StyledView className='mt-[15px] ml-[20px]'>
          <SubscriptionSvg className="ml-[24px]" width={30} height={30} stroke="black" />
          <StyledText>Subscription</StyledText>
        </StyledView>
        <StyledView className='mt-[15px] ml-[30px]'>
          <ScanSvg className=" ml-[2.5px]" width={30} height={30} stroke="black" />
          <StyledText>Scan</StyledText>
        </StyledView>
        <StyledView className='mt-[15px] ml-[30px] mr-[30px]'>
          <HamburgerSvg className="ml-[4.5px]" width={30} height={30} stroke="black" />
          <StyledText>Menu</StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default HomePage;
