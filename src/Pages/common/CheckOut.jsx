import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
  LocationSvg,
} from '../../common/StyledComponents';
import CheckOutHeader from '../components/CheckOut/CheckOutHeader';
import CheckOutItems from '../components/CheckOut/CheckOutItems';
import CheckOutPayment from '../components/CheckOut/CheckOutPayment';

const CheckOut = () => {
  return (
    <StyledView>
      <CheckOutHeader />

      <StyledScrollView style={{backgroundColor: '#F8F8F8'}} className="h-[82%]">
        <StyledView className="flex flex-row justify-between ml-[20px] mr-[20px] mt-[20px]">
          <StyledText style={{color: '#184639', fontSize: 20, fontWeight: 600}}>Order summary</StyledText>
          <StyledText style={{color: '#FF8C03',fontSize: 16,fontWeight: 500,marginTop: 5, }}>Add items</StyledText>
        </StyledView>
        
          {/* Components */}
        <CheckOutItems/>
        <CheckOutItems/>
        <CheckOutItems/>
        <CheckOutItems/>
      </StyledScrollView>

      <CheckOutPayment/>

    </StyledView>
  );
};

export default CheckOut;
