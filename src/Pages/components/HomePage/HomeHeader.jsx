import React from 'react';
import {
  StyledView,
  StyledText,
  LocationSvg,
} from '../../../common/StyledComponents';

const HomeHeader = () => {
  return (
    <StyledView style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#E4E4E4',borderWidth:1 ,borderBottomStyle:'solid',borderTopWidth: 0,borderLeftWidth: 0, borderRightWidth: 0,marginTop:30}}>
        <LocationSvg width={30} height={60} style={{marginLeft:20,marginTop:5}} />
        <StyledText
          style={{fontSize: 20, color: '#184639',marginRight:20,marginTop:2}}>
          Caspian Plaza
        </StyledText>
      </StyledView>
  )
}

export default HomeHeader;
