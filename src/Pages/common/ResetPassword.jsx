import React, {useState} from 'react';
import {
  StyledView,
  StyledText,
  StyledInput,
  PasswordEyeSvg,
} from '../../common/StyledComponents';
import {TouchableOpacity} from 'react-native';
import ResetPasswordHeader from '../components/ResetPassword/ResetPasswordHeader';
import NavTabMenu from '../components/Navigation/NavTabMenu';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isNewPasswordFocused, setIsNewPasswordFocused] = useState(false);

  const handleFocus = input => {
    if (input === 'password') setIsPasswordFocused(true);
    if (input === 'newPassword') setIsNewPasswordFocused(true);
  };

  const handleBlur = input => {
    if (input === 'password') setIsPasswordFocused(false);
    if (input === 'newPassword') setIsNewPasswordFocused(false);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible);
  };

  return (
    <StyledView>
      <ResetPasswordHeader />

      <StyledView style={{backgroundColor: '#F8F8F8'}} className="h-[82%]">
        <StyledText
          style={{margin: 30, fontWeight: 500, fontSize: 16, color: '#000'}}>
          Enter your registered e-mail and click recover account.
        </StyledText>
        <StyledView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 30,
            marginRight: 30,
          }}>
          <StyledInput
            style={{
              width: '100%',
              backgroundColor: '#fff',
              borderColor: isPasswordFocused ? '#00FF00' : '#EDEDED',
              borderRadius: 10,
              borderWidth: 1,
            }}
            secureTextEntry={!isPasswordVisible}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            onFocus={() => handleFocus('password')}
            onBlur={() => handleBlur('password')}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={{position: 'absolute', right: 20}}>
            <PasswordEyeSvg />
          </TouchableOpacity>
        </StyledView>
        <StyledView
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            marginLeft: 30,
            marginRight: 30,
          }}>
          <StyledInput
            style={{
              width: '100%',
              backgroundColor: '#fff',
              borderColor: isNewPasswordFocused ? '#00FF00' : '#EDEDED',
              borderRadius: 10,
              borderWidth: 1,
            }}
            secureTextEntry={!isNewPasswordVisible}
            placeholder="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            onFocus={() => handleFocus('newPassword')}
            onBlur={() => handleBlur('newPassword')}
          />
          <TouchableOpacity
            onPress={toggleNewPasswordVisibility}
            style={{position: 'absolute', right: 20}}>
            <PasswordEyeSvg />
          </TouchableOpacity>
        </StyledView>
      </StyledView>

      <NavTabMenu />
    </StyledView>
  );
};

export default ResetPassword;
