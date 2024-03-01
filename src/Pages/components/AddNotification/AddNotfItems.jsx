import React from 'react';
import {SectionList, TouchableOpacity} from 'react-native';
import {
  StyledView,
  StyledText,
  Leftarrow,
  AddLocNotfSvg,
  RightArrowSvg,
} from '../../../common/StyledComponents';

const AddNotfItems = () => {
  return (
    <StyledView
      style={{
        backgroundColor: '#fff',
        elevation: 2,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
      }}>
      <AddLocNotfSvg />
      <StyledView>
        <StyledText style={{fontSize: 18, fontWeight: 600, color: '#292B2D'}}>
          Port Baku
        </StyledText>
        <StyledText style={{fontSize: 16, fontWeight: 400, color: '#292B2D'}}>
          Uzeyir Hajibeyov 57
        </StyledText>
      </StyledView>
      <RightArrowSvg style={{marginTop: 10}} />
    </StyledView>
  );
};

export default AddNotfItems;
