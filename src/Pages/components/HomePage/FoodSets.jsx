import React from 'react';
import {
  StyledView,
  StyledText,
  StyledImage,
} from '../../../common/StyledComponents';

const FoodSets = () => {
  return (
    <StyledView
      style={{backgroundColor: '#fff', width: 210,elevation:2,marginLeft:20}}>
      {/* FoodComponents for set */}
      <StyledImage
        resizeMode="cover"
        style={{width: 194, height: 144, borderRadius: 20,marginTop:20,marginBottom: 20,alignSelf:"center"}}
        source={require('../../../assets/images/lunchsets.png')}
      />
      <StyledView style={{flexDirection:'row',justifyContent:'space-between'}}>
        <StyledText
          style={{fontSize: 16, fontWeight: 600, color: '#000',marginLeft:10}}>
          Lunch set
        </StyledText>
        <StyledImage
          style={{marginRight:20}}
          source={require('../../../assets/images/newImage.png')}
        />
      </StyledView>
      <StyledText style={{marginLeft:10,marginTop:10}}>
        Lorem ipsum dolor sit amet, consectetur adipisci
      </StyledText>
      <StyledText
        style={{
          textAlign: 'right',
          marginRight: 20,
          marginTop: 10,
          marginBottom:20,
          fontSize: 14,
          color: '#42C2E5',
          fontWeight: 400,
        }}>
        from 12 AZN
      </StyledText>
    </StyledView>
  );
};

export default FoodSets;
