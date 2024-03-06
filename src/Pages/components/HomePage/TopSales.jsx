import React from 'react';
import {
  StyledView,
  StyledText,
  StyledImage,
} from '../../../common/StyledComponents';

const TopSales = () => {
  return (
    <StyledView
      style={{
        backgroundColor: '#fff',
        height: 270,
        elevation: 2,
        marginLeft: 20,
        marginBottom:20,
        borderRadius: 20,
      }}>
      <StyledImage
        resizeMethod="cover"
        style={{
          width: 250,
          height: 150,
          borderRadius: 20,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        source={require('../../../assets/images/topsalesfood.jpg')}
      />
      <StyledView style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
        <StyledText
          style={{fontSize: 16, fontWeight: 'bold',marginLeft:10}}>
          Vegeterian bowl
        </StyledText>
        <StyledImage
        style={{marginRight:10}}
          source={require('../../../assets/images/newImage.png')}
        />
      </StyledView>
      <StyledText
        style={{fontSize: 16, fontWeight: 600,marginLeft:10,width:200}}>
        Lorem ipsum dolor sit amet, consectetur adipisci
      </StyledText>
      <StyledText
        style={{
          textAlign: 'right',
          marginRight: 20,
          marginTop: 10,
          marginBottom:20,
          fontSize: 16,
          color: '#42C2E5',
          fontWeight: 700,
        }}>
        from 12 AZN
      </StyledText>
    </StyledView>
  );
};

export default TopSales;
