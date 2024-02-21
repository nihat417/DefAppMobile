import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
  EmptyMenuSvg
} from  '../../common/StyledComponents';

const EmptyMenu = () =>{
    return (
        <StyledView className='flex justify-center mt-[150px] ml-[100px]'>
            <EmptyMenuSvg/>
            <StyledText style={{fontSize:15,fontWeight:500}} className='mt-[10px] ml-[11px]'>Menu will be added soon</StyledText>
        </StyledView>
    )
};
export default EmptyMenu;