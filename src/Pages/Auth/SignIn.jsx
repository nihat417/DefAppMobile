import React,{useState} from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledButton,
  StyledText,PasswordEyeSvg
} from '../../common/StyledComponents';
import {TextInput,TouchableOpacity} from 'react-native';
import SignInHeader from '../components/SignIn/SignInHeader';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <StyledView>
        <SignInHeader/>
        <StyledScrollView style={{height:'75%',backgroundColor:"#FAFAFA"}}>
            <StyledText style={{color:"#184639",fontSize:32,fontWeight:600,marginLeft:20,marginTop:10,marginBottom:20}}>Sign In</StyledText>
            <TextInput
            style={{
              width: "full",
              marginRight:20,
              marginLeft:20,
              elevation: 1,
              borderRadius: 10,
              borderColor: 'transparent',
              marginTop: 20,
              backgroundColor: '#fff',
            }}
            placeholder="E-mail"
          />
          <StyledView style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, elevation: 1, marginHorizontal: 20,marginVertical:10 }}>
            <TextInput
                style={{ flex: 1, marginRight: 10 }} placeholder="Password"  secureTextEntry={!isPasswordVisible}/>
            <TouchableOpacity style={{ position: 'absolute', right: 10 }} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                <PasswordEyeSvg name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
        </StyledView>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
          <StyledText style={{marginLeft:20,color:"#184639",fontWeight:400,fontSize:14}}>Already have an account?</StyledText>
        </TouchableOpacity>
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
          marginTop:40,
          marginBottom:10,borderRadius:40
        }}>
        <StyledText style={{color: '#fff'}}>Sign Up</StyledText>
        </StyledButton>
        </StyledScrollView>
    </StyledView>
  )
}

export default SignIn;