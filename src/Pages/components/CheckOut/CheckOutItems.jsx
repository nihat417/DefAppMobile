import React from 'react';
import {
  StyledView,
  StyledText,
  StyledImage,
} from '../../../common/StyledComponents';

const CheckOutItems = () => {
  return (
    <StyledView style={{backgroundColor:"#fff",elevation:2}} className='flex flex-row ml-[20px] mr-[20px] mt-[20px] p-[10px] rounded-[10px]'>
        <StyledImage className='w-[84px] h-[90px] rounded-[10px] mr-[10px]' source={require("../../../assets/images/deliciousimage2.jpg")}/>
        <StyledView style={{width:280}}>
          <StyledView className='flex flex-row justify-between mr-[30px] mt-[5px]'>
            <StyledText style={{fontSize:16,fontWeight:600,color:"#184639"}}>Sezar salad</StyledText>
            <StyledText style={{borderRadius:8,paddingTop:2,paddingRight:4,paddingBottom:2,paddingLeft:4,borderColor:"#66B600",borderWidth:1,color:"#66B600",fontSize:16,fontWeight:600,}}>1x</StyledText>
          </StyledView>
          <StyledText style={{width:230,marginTop:5,fontSize:12,fontWeight:400}}>Lorem ipsum dolor sit amet, consectetur adipisci</StyledText>
          <StyledText style={{alignSelf:"flex-end",marginRight:30,fontSize:16,fontWeight:600,color:"#42C2E5"}}>12 AZN</StyledText>
        </StyledView>
    </StyledView>
  )
}

export default CheckOutItems;
