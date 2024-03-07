import React,{useState} from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledButton,
  StyledText,PasswordEyeSvg, SignUpGreenEllips, AuthMangoIcon
} from '../../common/StyledComponents';
import {TextInput,TouchableOpacity} from 'react-native';

const ForgotEmail = () => {
  return (
    <StyledView style={{backgroundColor:"#FAFAFA"}}>
        <StyledView style={{flexDirection:'row',justifyContent:'space-between',marginTop:100}}>
            <StyledView style={{marginLeft:20}}><SignUpGreenEllips size="big"/></StyledView>
            <AuthMangoIcon/>
            <StyledView style={{marginRight:20,marginTop:50}}><SignUpGreenEllips size="small"/></StyledView>
        </StyledView>
        <StyledView style={{marginTop:50}}>
          <StyledText style={{alignSelf:'center',fontSize:24,fontWeight:600,color:"#184639"}}>Forgot Password?</StyledText>
          <StyledText style={{fontSize:16,fontWeight:500,color:"#000",marginLeft:40,marginRight:20,marginTop:29}}>Enter your registered e-mail and click recover account.</StyledText>
          <TextInput
            style={{
              width: "full",
              marginRight:40,
              marginLeft:40,
              elevation: 1,
              borderRadius: 10,
              borderColor: 'transparent',
              marginTop: 20,
              backgroundColor: '#fff',
            }}
            placeholder="E-mail"
          />
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
          marginTop:10,
          marginBottom:10,borderRadius:40
        }}>
        <StyledText style={{color: '#fff'}}>Confirm</StyledText>
        </StyledButton>
        </StyledView>
    </StyledView>
  )
}

export default ForgotEmail;