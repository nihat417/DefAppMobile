import React from 'react';
import {
  StyledView,
  StyledText,
  Leftarrow,
} from '../../../common/StyledComponents';

const AddNotfHeader = () => {
  return (
    <StyledView
    style={{
      backgroundColor: '#fff',
      borderWidth: 1,
      borderTopWidth: 0,
      borderColor: '#E4E4E4',
    }}>
    <StyledView className="flex flex-row justify-between mt-[30px] ml-[20px] mr-[10px]">
      <Leftarrow width={50} height={50} stroke="black" />
      <StyledText
        style={{
          fontFamily: 'Poppins-Light',
          fontSize: 20,
          fontWeight: 500,
          color: '#414141',
        }}>
        Add locations
      </StyledText>
      <StyledView className="mr-[40px]"></StyledView>
    </StyledView>
  </StyledView>
  )
}

export default AddNotfHeader;