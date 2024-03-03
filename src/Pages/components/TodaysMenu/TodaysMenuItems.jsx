import React from 'react';
import {
  StyledView,
  StyledText,
  StyledImage
} from '../../../common/StyledComponents';

const TodaysMenuItems = ({menuItems}) => {
  const items = menuItems.items;

  return (
    <StyledView>
      <StyledText
        style={{
          fontFamily: 'Poppins-Light',
          fontSize: 20,
          fontWeight: 'bold',
        }}
        className="mt-[20px]">
        {menuItems.headerMenu}
      </StyledText>
      {items.map((item) => (
        <StyledView key={item.id} className="flex flex-row mt-[20px]">
          <StyledImage
            style={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10,width:140,height:140}}
            source={item.image}
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
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#184639',
                }}
                className="ml-[20px] font-bold">
                {item.name}
              </StyledText>
              <StyledImage
                className="mr-[20px]"
                source={require('../../../assets/images/newImage.png')}
              />
            </StyledView>
            <StyledText
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: 13,
                fontWeight: 'normal',
              }}
              className="mt-[20px] mb-[20px] ml-[20px]">
              {item.description}
            </StyledText>
            <StyledView className="flex flex-row justify-between">
              <StyledText
                style={{
                  fontFamily: 'Poppins-Light',
                  color: '#FF8C03',
                  fontWeight: 700,
                }}
                className="ml-[20px]">
                {item.itemsLeft} items left 
              </StyledText>
              <StyledText
                style={{
                  fontFamily: 'Poppins-Light',
                  color: '#42C2E5',
                  fontWeight: 700,
                }}
                className="mr-[20px]">
                {item.price}  AZN
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      ))}
    </StyledView>
  );
}

export default TodaysMenuItems;
