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

      <StyledScrollView style={{backgroundColor: '#F8F8F8',height:'82%'}}>
        <StyledView style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,marginTop:20}}>
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
