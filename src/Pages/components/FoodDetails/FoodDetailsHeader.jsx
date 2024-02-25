import React from 'react';
import {
  StyledView,
  StyledText,
  BackFoodDetailsSvg,
  StyledImage,
  BigEllipsSvg,
} from '../../../common/StyledComponents';
import {ImageBackground} from 'react-native';

const FoodDetailsHeader = () => {
  return (
    <ImageBackground
      style={{flex: 0, height: 400}} className="my-[-120px]"
      source={require('../../../assets/images/ellipsdetails.png')}>
      <StyledView className="flex flex-row mt-[150px] mb-[20px] justify-between">
        <BackFoodDetailsSvg className="ml-[20px]" />
        <StyledText style={{fontSize: 20, fontWeight: 500, color: '#fff',marginRight:20}}>
        Sezar Salad
        </StyledText>
        <StyledView className="mr-[30px]"></StyledView>
      </StyledView>
      <StyledView style={{alignSelf: 'center', marginTop: 20}}>
        
      </StyledView>

      <StyledView style={{alignSelf:'flex-start',marginBottom:-50,marginLeft:20}}>
        <StyledView className="ml-[20px]">
          <BigEllipsSvg  size="big" className="ml-[20px]"/>  
        </StyledView> 
        <StyledView >
          <BigEllipsSvg size="middle"/>
        </StyledView>
        <StyledView style={{alignSelf:'flex-end',marginRight:20}}>
          <BigEllipsSvg/>
        </StyledView>
      </StyledView>

      <StyledView style={{backgroundColor:"#fff",width:280,height:320,alignItems:'center',borderRadius:150,alignSelf:"center"}}>
        <StyledImage style={{width:250,height:250,backgroundColor:"#fff",marginTop:10,borderRadius:150}} source={require("../../../assets/images/deliciousimgae1.jpg")}/>
      </StyledView>

      <StyledView style={{alignSelf:'flex-end',marginTop:-200}}>
        <StyledView className='ml-[10px]'>
          <BigEllipsSvg size="middle"/>
        </StyledView>
        <StyledView style={{alignSelf:'flex-end',marginRight:15}}>
          <BigEllipsSvg/>
        </StyledView>
        <StyledView className="mr-[20px]">
          <BigEllipsSvg  size="big" className="ml-[20px]"/>  
        </StyledView> 
      </StyledView>

    </ImageBackground>
  )
}

export default FoodDetailsHeader

