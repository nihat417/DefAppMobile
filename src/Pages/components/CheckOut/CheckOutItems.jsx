import React from 'react';
import {
  StyledView,
  StyledText,
  StyledImage,
} from '../../../common/StyledComponents';

const CheckOutItems = () => {
  return (
    <StyledView style={{backgroundColor:"#fff",elevation:2,flexDirection:'row',marginLeft:20,marginRight:20,marginTop:20,padding:10,borderRadius:10}}>
        <StyledImage  style={{width:84,height:90,borderRadius:10,marginRight:10}} source={require("../../../assets/images/deliciousimage2.jpg")}/>
        <StyledView style={{width:280}}>
          <StyledView style={{flexDirection:'row',justifyContent:'space-between', marginRight:30, marginTop:5}}>
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
