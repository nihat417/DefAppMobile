import React from 'react';
import {
  StyledView,
  StyledText,
  Leftarrow,
} from '../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const AddNotfHeader = () => {
  const navigation = useNavigation()
  return (
    <StyledView
    style={{
      backgroundColor: '#fff',
      borderWidth: 1,
      borderTopWidth: 0,
      borderColor: '#E4E4E4',
    }}>
    <StyledView style={{flexDirection:'row',justifyContent:'space-between',marginTop:30,marginLeft:20,marginRight:10}}>
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
        Add locations
      </StyledText>
      <StyledView style={{marginRight:40}}></StyledView>
    </StyledView>
  </StyledView>
  )
}

export default AddNotfHeader;