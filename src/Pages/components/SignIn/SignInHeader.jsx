import React from 'react';
import {
  StyledView,
  StyledText,
  Leftarrow,
  SignUpSandwitchIcon,
  SignUpGreenEllips,
  SignUpTomatoIcon,
  SignUpSaladIcon,
} from '../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const SignInHeader = () => {
  return (
    <StyledView>
    <StyledView style={{flexDirection:'row',justifyContent:'space-between',marginTop:30,marginLeft:20,marginRight:10}}>
      <TouchableOpacity>
      </TouchableOpacity>
      <StyledText></StyledText>
      <StyledView></StyledView>
    </StyledView>
    <StyledView style={{flexDirection:"row",justifyContent:'space-between'}}>
      <StyledView>
        <StyledView style={{marginLeft:20}}><SignUpGreenEllips size="small"/></StyledView>
        <SignUpSandwitchIcon/>
        <StyledView style={{marginLeft:20}}><SignUpGreenEllips size="big"/></StyledView>
      </StyledView>
      <StyledView>
        <SignUpTomatoIcon/>
      </StyledView>
      <StyledView>
      <StyledView style={{marginLeft:40}}><SignUpGreenEllips size="middle"/></StyledView>
        <SignUpSaladIcon/>
        <StyledView style={{marginLeft:50}}><SignUpGreenEllips size="small"/></StyledView>
      </StyledView>
    </StyledView>
  </StyledView>
  )
}

export default SignInHeader;