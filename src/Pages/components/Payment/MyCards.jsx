import React from 'react';
import {SectionList, TouchableOpacity} from 'react-native';
import {
  StyledView,
  StyledText,
  DeleteAcSvg,
  CreditCardSvg,
} from '../../../common/StyledComponents';

const MyCards = () => {
  return (
    <StyledView style={{marginLeft:20,marginRight:20,marginTop:20}}>
        <StyledText style={{color:"#414141",fontSize:20,fontWeight:600,marginBottom:20}}>My cards</StyledText>
        <StyledView style={{borderRadius:10,backgroundColor:"#F4F5F7",flexDirection:'row',justifyContent:"space-between",padding:10}}>
            <CreditCardSvg style={{marginTop:5}}/>
            <StyledText style={{color:"#32343E",marginTop:5,fontSize:18,fontWeight:400}}>************ 6436</StyledText>
             <TouchableOpacity>
                <DeleteAcSvg/>
             </TouchableOpacity>
        </StyledView>
        <StyledView></StyledView>
    </StyledView>
  )
}

export default MyCards;