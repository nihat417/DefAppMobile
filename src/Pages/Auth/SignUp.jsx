import React,{useState} from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledButton,
  StyledText,PasswordEyeSvg
} from '../../common/StyledComponents';
import {TextInput,TouchableOpacity} from 'react-native';
import SignUpHeader from '../components/SignUp/SignUpHeader';
import {SelectList} from 'react-native-dropdown-select-list';

const SignUp = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: '055', disabled: true},
    {key: '2', value: '050'},
    {key: '3', value: '070'},

  ];
  return (
    <StyledView style={{backgroundColor: '#FAFAFA'}}>
      {/* Header */}
      <SignUpHeader />
      <StyledScrollView style={{height:'75%',backgroundColor:"#FAFAFA"}}>
        <StyledText style={{color:"#184639",fontSize:32,fontWeight:600,marginLeft:20,marginTop:10,marginBottom:20}}>Sign up</StyledText>
        <StyledView style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TextInput
            style={{
              width: 180,
              elevation: 1,
              marginRight: 5,
              borderRadius: 10,
              borderColor: 'trasparent',
              backgroundColor: '#fff',
            }}
            placeholder="First name"></TextInput>
          <TextInput
            style={{
              width: 180,
              elevation: 1,
              marginLeft: 5,
              borderRadius: 10,
              borderColor: 'trasparent',
              backgroundColor: '#fff',
            }}
            placeholder="Last name"></TextInput>
        </StyledView>
        
    
        <StyledView
          style={{flexDirection: 'row',  marginLeft: 20}}>
          <SelectList
            setSelected={val => setSelected(val)}
            boxStyles={{
              backgroundColor: '#fff',
              width: 80,
              marginTop: 10,
              borderColor: 'transparent',
            }}
            placeholder='055'
            search={false}
            data={data}
            save="value"
          />
          <TextInput
            style={{
              width: 280,
              marginLeft: 10,
              elevation: 1,
              borderRadius: 10,
              borderColor: 'transparent',
              marginTop: 10,
              backgroundColor: '#fff',
            }}
            placeholder="Phone number"
          />
        </StyledView>
        <SelectList
            setSelected={val => setSelected(val)}
            boxStyles={{
              backgroundColor: '#fff',
              width: "full",
              marginRight:20,
              marginLeft:20,
              marginTop: 20,
              borderColor: 'transparent',
            }}
            placeholder='CopyName'
            search={false}
            data={data}
            save="value"
          />
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
        <StyledView style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, elevation: 1, marginHorizontal: 20,marginVertical:10 }}>
            <TextInput
                style={{ flex: 1, marginRight: 10 }} placeholder="Password"  secureTextEntry={!isPasswordVisible}/>
            <TouchableOpacity style={{ position: 'absolute', right: 10 }} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                <PasswordEyeSvg name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
        </StyledView>
        <StyledText style={{marginLeft:20,color:"#184639",fontWeight:400,fontSize:14}}>Already have an account?</StyledText>
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
        <StyledText style={{color: '#fff'}}>Sign Up</StyledText>
        </StyledButton>
        <StyledText style={{width:300,alignSelf:'center'}}>By clicking Sign up, you agree to our <StyledText style={{color:"#184639"}}>Terms of Use and Privacy Policy</StyledText> </StyledText>
      </StyledScrollView>
    </StyledView>
  );
};

export default SignUp;
