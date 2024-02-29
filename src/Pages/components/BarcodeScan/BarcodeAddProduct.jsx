import React from 'react';
import {
  StyledView,
  StyledText,
  StyledImage,
  StyledButton,
  CreditCardSvg,
} from '../../../common/StyledComponents';

const BarcodeAddProduct = () => {
  return (
<StyledView style={{backgroundColor: '#F8F8F8'}} className="h-[38%]">
      

      {/* ADD Card */}
      <StyledButton
        style={{
          borderColor: '#FF8C03',
          borderWidth: 1,
          borderStyle: 'dotted',
          borderRadius: 10,
          marginLeft: 30,
          marginRight: 30,
          marginTop: 5,
          marginBottom: 20,
          padding: 15,
          backgroundColor: '#fff',
        }}>
        <StyledText style={{alignSelf: 'center', color: '#FF8C03'}}>
          Add your card
        </StyledText>
      </StyledButton>

      {/* Added Card */}

     
      
      <StyledButton
        style={{
          backgroundColor: '#66B600',
          borderColor: '#66B600',
          borderWidth: 1,
        }}
        className="flex flex-row justify-center p-[15px] ml-[20px] mr-[20px] mb-[10px] rounded-[40px]">
        <StyledText style={{color: '#fff'}}>Confirm</StyledText>
      </StyledButton>
    </StyledView>
  )
}

export default BarcodeAddProduct;
