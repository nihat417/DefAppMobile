import React, { useState } from 'react';
import {
  StyledView,
  StyledText,
  StyledImage,
} from '../../../common/StyledComponents';
import { TouchableOpacity } from 'react-native';

const BarcodeItems = () => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity
      style={{ backgroundColor: "#fff", elevation: 2 }}
      className='ml-[20px] mr-[20px] mt-[20px] mb-[10px] p-[10px] rounded-[10px]'
      onPress={handlePress}>
        {/* X btn */}
        <TouchableOpacity style={{ width:24,height:24,backgroundColor:"#fff",position: 'absolute', top: -12, right:-12,elevation:2,borderRadius:10 }}
          onPress={() => console.log('X btn clicked')}>
          <StyledText style={{ color: '#757575', fontSize: 20,alignSelf:'center' }}>x</StyledText>
        </TouchableOpacity>
      <StyledView className='flexx flex-row'>
        <StyledImage
          className='w-[84px] h-[90px] rounded-[10px] mr-[10px]'
          source={require("../../../assets/images/deliciousimage2.jpg")}/>
        <StyledView style={{ width: 280 }}>
          <StyledView className='flex flex-row justify-between mr-[30px] mt-[5px]'>
            <StyledText style={{ fontSize: 16, fontWeight: 600, color: "#184639" }}>Sezar salad</StyledText>
            <StyledText style={{ borderRadius: 8, paddingTop: 2, paddingRight: 4, paddingBottom: 2, paddingLeft: 4, borderColor: "#66B600", borderWidth: 1, color: "#66B600", fontSize: 16, fontWeight: 600, }}>1x</StyledText>
          </StyledView>
          <StyledText style={{ width: 230, marginTop: 5, fontSize: 12, fontWeight: 400 }}>Lorem ipsum dolor sit amet, consectetur adipisci</StyledText>
          <StyledText style={{ alignSelf: "flex-end", marginRight: 30, fontSize: 16, fontWeight: 600, color: "#42C2E5" }}>12 AZN</StyledText>
        </StyledView>
      </StyledView>
      {expanded && (
        <StyledView style={{ marginTop: 10, borderWidth: 2, borderColor: "#EDEDED", borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }}>
          <StyledText style={{ marginTop: 10, color: "#184639", fontSize: 14, fontWeight: 600 }}>Description</StyledText>
          <StyledText style={{ marginTop: 5, color: "#757575", fontSize: 12, fontWeight: 400 }}>Lorem ipsum dolor sit amet, consectetur adipisci lorem ipsum dolor sit amet, consectetur adipisci</StyledText>
        </StyledView>
      )}
    </TouchableOpacity>
  )
}

export default BarcodeItems;
