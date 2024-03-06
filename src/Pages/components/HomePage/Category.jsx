import React from 'react';
import {
  StyledView,
  StyledText,
  StyledScrollView,
  StyledImage,
} from '../../../common/StyledComponents';

const Category = () => {
  return (
    <StyledView style={{marginBottom:20}}>
    <StyledText
      style={{
        fontSize: 20,
        fontWeight: 500,
        marginLeft: 20,
        marginTop: 10,
        marginBottom:10,
        color:"#184639"
      }}>
      Categories
    </StyledText>

    <StyledScrollView horizontal={true} style={{flexDirection:'row'}}>
      <StyledView style={{marginLeft:25,marginRight:25}} >
          <StyledImage source={require("../../../assets/images/drinks.png")}/>
          <StyledText>Drinks</StyledText>
      </StyledView>
      <StyledView style={{marginLeft:25,marginRight:25}}>
          <StyledImage source={require("../../../assets/images/pizza.png")}/>
          <StyledText>Pizza</StyledText>
      </StyledView>
      <StyledView style={{marginLeft:25,marginRight:25}}>
          <StyledImage source={require("../../../assets/images/Deserts.png")}/>
          <StyledText>Deserts</StyledText>
      </StyledView>
      <StyledView style={{marginLeft:25,marginRight:25}}>
          <StyledImage source={require("../../../assets/images/vegetables.png")}/>
          <StyledText>vegetables</StyledText>
      </StyledView>
      <StyledView style={{marginLeft:25,marginRight:25}}>
          <StyledImage source={require("../../../assets/images/drinks.png")}/>
          <StyledText>Drinks</StyledText>
      </StyledView>
    </StyledScrollView>
  </StyledView>
  )
}

export default Category;
