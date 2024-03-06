import React from 'react';
import {
  StyledView,
  StyledText,
  StyledImage,
  StyledButton,
  CreditCardSvg,
} from '../../../common/StyledComponents';

const CheckOutPayment = () => {
  return (
    <StyledView style={{backgroundColor: '#F8F8F8',height:'62%'}}>
      <StyledView style={{flexDirection:'row',marginLeft:30,marginBottom:10,marginTop:20,marginRight:30,justifyContent:'space-between'}}
      >
        <StyledText style={{color: '#184639', fontSize: 20, fontWeight: 600}}>
          Payment
        </StyledText>
        <StyledText style={{color: '#66B600', fontSize: 16, fontWeight: 500}}>
          Change
        </StyledText>
      </StyledView>

      {/* ADD Card */}
      {/* <StyledButton
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
      </StyledButton> */}

      {/* Added Card */}

      <StyledView
        style={{
          borderColor: '#E6E6E6',
          borderWidth: 1,
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          flexDirection:'row',
          marginLeft:30,
          marginRight:30,
          justifyContent:'space-between'
        }}>
        <StyledView>
          <StyledText
            style={{
              fontSize: 16,
              marginBottom: 5,
              alignSelf: 'flex-start',
              fontWeight: 400,
              color: '#757575',
            }}>
            Course price
          </StyledText>
          <StyledText
            style={{
              fontSize: 16,
              marginBottom: 10,
              alignSelf: 'flex-start',
              fontWeight: 500,
              color: '#000',
            }}>
            Discount 5%
          </StyledText>
        </StyledView>
        <StyledView>
          <StyledText
            style={{
              fontSize: 16,
              marginBottom: 5,
              alignSelf: 'flex-end',
              fontWeight: 400,
              color: '#757575',
            }}>
            40 AZN
          </StyledText>
          <StyledText
            style={{
              fontSize: 16,
              marginBottom: 10,
              alignSelf: 'flex-end',
              fontWeight: 500,
              color: '#000',
            }}>
            -10 AZN
          </StyledText>
        </StyledView>
      </StyledView>

      <StyledView style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,marginTop:20}}>
        <StyledText
          style={{
            fontSize: 18,
            marginBottom: 20,
            fontWeight: 600,
            color: '#000',
          }}>
          Total price:
        </StyledText>
        <StyledText style={{fontSize: 20, fontWeight: 600, color: '#42C2E5'}}>
          12 AZN
        </StyledText>
      </StyledView>
      <StyledButton
        style={{
          backgroundColor: '#66B600',
          borderColor: '#66B600',
          borderWidth: 1,
          flexDirection:'row',
          justifyContent:'center',
          padding:15,
          marginLeft:20,
          marginRight:20,
          marginBottom:10,borderRadius:40
        }}>
        <StyledText style={{color: '#fff'}}>Confirm</StyledText>
      </StyledButton>
    </StyledView>
  );
};

export default CheckOutPayment;
