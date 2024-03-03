import React from 'react';
import {
  StyledView,
  StyledText,
  Leftarrow,
} from '../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


const ProfileHeader = () => {
  const navigation = useNavigation();
  return (
    <StyledView
      style={{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#E4E4E4',
      }}>
      <StyledView className="flex flex-row justify-between mt-[30px] ml-[20px] mr-[10px]">
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Leftarrow width={50} height={50} stroke="black" />
        </TouchableOpacity>
        <StyledText
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: 20,
            fontWeight: 500,
            color: '#414141',
          }}>
          Menu
        </StyledText>
        <StyledView className="mr-[40px]"></StyledView>
      </StyledView>
    </StyledView>
  );
};

export default ProfileHeader;
