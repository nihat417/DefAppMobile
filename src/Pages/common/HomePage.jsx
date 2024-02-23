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
import AddReview from '../components/HomePage/AddReview';
import NavTabMenu from '../components/TodaysMenu/NavTabMenu';
import Category from '../components/HomePage/Category';
import FoodSets from '../components/HomePage/FoodSets';
import TopSales from '../components/HomePage/TopSales';
import WeeklyMenu from '../components/HomePage/WeeklyMenu';

const HomePage = () => {
  return (
    <StyledView style={{backgroundColor: 'fff'}}>
      {/* homeheader */}
      <HomeHeader />

      {/* Main */}
      <StyledScrollView
        style={{backgroundColor: '#F8F8F8'}}
        className="h-[79.9%]">
        {/* slider and review */}
        <HomeSlider />

        {/* Review */}
        <AddReview />

        {/* categoires */}
        <Category />

        {/* TodaysMenu Header*/}
        <StyledView className="flex flex-row justify-between mt-[20px] mb-[20px]">
          <StyledText
            style={{fontSize: 20, fontWeight: 500}}
            className="ml-[20px]">
            Today’s menu (12 Jan)
          </StyledText>
          <StyledText
            style={{color: '#66B600', fontSize: 14, fontWeight: 400}}
            className="mr-[20px] mt-[10px]">
            See more
          </StyledText>
        </StyledView>

        {/* FoodSets */}

        <StyledScrollView horizontal={true} className="flex flex-row">
          <FoodSets />
          <FoodSets />
          <FoodSets />
        </StyledScrollView>

        {/* Top Seles Header*/}
        <StyledView className="flex flex-row justify-between mt-[20px] mb-[20px]">
          <StyledText
            style={{fontSize: 20, fontWeight: 500}}
            className="ml-[20px]">
            Top sales
          </StyledText>
          <StyledText
            style={{color: '#66B600', fontSize: 14, fontWeight: 400}}
            className="mr-[20px] mt-[10px]">
            See more
          </StyledText>
        </StyledView>

        {/* Top Seles */}
        <StyledScrollView horizontal={true} className="flex flex-row mb-[20px]">
          <TopSales />
          <TopSales />
        </StyledScrollView>

        {/* Weeklymenu Text */}

        <StyledText
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: '#414141',
            marginLeft: 20,
            marginBottom: 20,}}>
          Weekly menu{' '}
        </StyledText>

        {/* Weeklymenu */}
        <StyledScrollView horizontal={true} style={{marginLeft:20,marginRight:20,backgroundColor:"#fff",elevation:3,marginBottom:20,borderRadius:10}}>
          <WeeklyMenu/>
          <WeeklyMenu/>
          <WeeklyMenu/>
          <WeeklyMenu/>
          <WeeklyMenu/>
          <WeeklyMenu/>
          <WeeklyMenu/>
        </StyledScrollView>

      </StyledScrollView>

      <NavTabMenu />
    </StyledView>
  );
};

export default HomePage;
