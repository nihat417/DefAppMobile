import React from 'react';
import {
  StyledView,
  StyledText,
  ResetPaswSvg,
  RightArrowSvg
} from '../../../common/StyledComponents';
import { TouchableOpacity } from 'react-native';

const SettingPageItems = () => {
  return (
    <StyledView>
        <TouchableOpacity>
            <StyledView style={{flexDirection:'row',marginTop:20,marginLeft:20,marginRight:20,marginBottom:40,backgroundColor:"#FFF",borderWidth:1,borderRadius:10,padding:10,borderColor:"#EDEDED",justifyContent:'space-between' }}>
                <ResetPaswSvg/>
                <StyledText style={{color:"#292B2D",fontSize:16,marginTop:10,fontWeight:500}}>Delete your account</StyledText>
                <RightArrowSvg style={{marginTop:10}}/>
            </StyledView>
        </TouchableOpacity>
    </StyledView>
  )
}

export default SettingPageItems
