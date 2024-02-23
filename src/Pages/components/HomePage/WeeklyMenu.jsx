import React from 'react';
import {
  StyledView,
  StyledText,
  StyledScrollView,
  StyledImage,
  StyledButton,
} from '../../../common/StyledComponents';

const WeeklyMenu = () => {
  return (
    <StyledView
      style={{
        width: 48,
        height: 98,
        backgroundColor: '#66B600',
        color: '#fff',
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 30,
      }}>
      <StyledText style={{alignSelf:"center",marginTop:20,color:"#fff"}}>Mon</StyledText>
      <StyledText style={{alignSelf:"center",marginTop:20,color:"#fff"}}>13</StyledText>
    </StyledView>
  );
};

export default WeeklyMenu;
