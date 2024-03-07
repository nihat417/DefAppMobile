import React,{useState} from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledButton,
  StyledText,PasswordEyeSvg, SignUpGreenEllips, AuthMangoIcon
} from '../../common/StyledComponents';
import {TextInput,TouchableOpacity} from 'react-native';

const ForgotCheck = () => {
  return (
    <StyledView>
        <StyledView style={{flexDirection:'row',justifyContent:'space-between',marginTop:100}}>
            <StyledView style={{marginLeft:20}}><SignUpGreenEllips size="big"/></StyledView>
            <AuthMangoIcon/>
            <StyledView style={{marginRight:20,marginTop:50}}><SignUpGreenEllips size="small"/></StyledView>
        </StyledView>
        <StyledView style={{marginTop:50,height:'65%'}}>
          <StyledText style={{alignSelf:'center',fontSize:24,fontWeight:600,color:"#184639"}}>Check your message</StyledText>
          <StyledText style={{fontSize:16,fontWeight:500,color:"#000",marginLeft:40,marginRight:20,marginTop:29}}>We have sent a password recover instructions to your message</StyledText>
        </StyledView>
        <StyledView style={{position: 'absolute', bottom: 0, left: 0, right: 0, }}>
            <StyledButton
                style={{
                backgroundColor: '#66B600',
                borderColor: '#66B600',
                borderWidth: 1,
                flexDirection:'row',
                justifyContent:'center',
                padding:15,
                marginLeft:20,
                marginRight:20,
                marginBottom:0,borderRadius:40}}>
                <StyledText style={{color: '#fff'}}>Confirm</StyledText>
            </StyledButton>
        </StyledView>
    </StyledView>
  )
}

export default ForgotCheck;