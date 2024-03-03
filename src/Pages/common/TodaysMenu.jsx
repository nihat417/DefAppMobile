import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
} from '../../common/StyledComponents';
import {FlatList} from 'react-native';

import EmptyMenu from '../components/TodaysMenu/EmptyMenu';
import NavTabmenu from '../components/Navigation/NavTabMenu';
import TodaysMenuHeader from '../components/TodaysMenu/TodaysMenuHeader';
import ScrolledNav from '../components/TodaysMenu/ScrolledNav';
import TodaysMenuItems from '../components/TodaysMenu/TodaysMenuItems';
// import Svg, {SvgXml} from 'react-native-svg';

const TodaysMenu = () => {
  // static data
  const data = [
    {
      headerMenu: 'Salads',
      items: [
        {
          id: '1',
          image: require('../../assets/images/salad.png'),
          name: 'Vegeterian bowl',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          itemsLeft: '4 ',
          price: '12',
        },
        {
          id: '2',
          image: require('../../assets/images/todayssalads2.jpg'),
          name: 'Vegeterian bowl',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          itemsLeft: '4 ',
          price: '12',
        },
        {
          id: '3',
          image: require('../../assets/images/todaysalads3.jpeg'),
          name: 'Vegeterian bowl',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          itemsLeft: '4 ',
          price: '12',
        },
      ],
    },
  ];

  return (
    <StyledView>
      {/* header */}
      <TodaysMenuHeader />

      {/* scrollednav */}
      <ScrolledNav />

      {/* main */}
      <StyledView
        style={{backgroundColor: '#F8F8F8'}}
        className="px-5  w-full h-[75.5%]">
        {/* components */}
        <FlatList
          data={data}
          renderItem={({item}) => <TodaysMenuItems menuItems={item} />}
          keyExtractor={item => item.id}
        />

        {/* emptymenu */}
        {/* <EmptyMenu/> */}
      </StyledView>

      {/* vieworder */}
      <StyledView
        className="pl-[20px] pr-[20px]">
        <StyledView
          style={{
            borderColor: '#FF8C03',
            borderWidth: 1,
            borderStyle: 'dotted',
            borderRadius: 10,
            padding: 15,
            marginBottom: 10,
            backgroundColor: '#fff',
          }}
          className="flex flex-row justify-between ">
          <StyledView className="flex flex-row">
            <StyledText
              style={{borderWidth: 1, color: '#FF8C03', fontWeight: 500}}
              className="border rounded-[10px] p-[5px] pl-[10px] pr-[10px] border-yellow-500">
              2x
            </StyledText>
            <StyledText
              style={{color: '#FF8C03', fontWeight: 500}}
              className="p-[5px]">
              View order
            </StyledText>
          </StyledView>
          <StyledText
            style={{color: '#000', fontWeight: 700, fontSize: 15}}
            className="p-[5px] font-bold">
            $ 10.90
          </StyledText>
        </StyledView>
      </StyledView>      
    </StyledView>
  );
};

export default TodaysMenu;
