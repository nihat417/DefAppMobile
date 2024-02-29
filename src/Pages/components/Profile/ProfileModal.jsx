import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { StyledView, StyledText, LogOutModalSvg } from '../../../common/StyledComponents';

const ProfileModal = (props) => {
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT_MODAL = 200;

  const closeModal = () => {
    props.changeModalOpen(false); 
  };

  return (
    <TouchableOpacity
      disabled={false}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <StyledView
        style={{ height: HEIGHT_MODAL, width: WIDTH - 80, padding: 10, backgroundColor: "#fff", borderRadius: 10 }}
      >
        <LogOutModalSvg style={{alignSelf:'center'}}/>
        <StyledView style={{ flex: 1, alignItems: 'center',alignItems:'center' }}>
          <StyledText style={{ fontSize: 20, fontWeight: 600, margin: 5 ,color:"#414141"}}>Do you want to log out?</StyledText>
          <StyledText style={{ fontSize: 16, fontWeight: 400, margin: 5, color: "#414141" }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</StyledText>
        </StyledView>
        <StyledView style={{ flexDirection: 'row', width: '100%' }}>
        <TouchableOpacity onPress={() => props.closeModal(false, 'cancel')} style={{ flex: 1, paddingVertical: 10, alignItems: 'center' }}>
            <StyledText style={{ fontSize: 15, fontWeight: 'bold', margin: 5 }}>Cancel</StyledText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.closeModal(false, 'ok')} style={{ flex: 1, paddingVertical: 10, alignItems: 'center',backgroundColor:"#FF8C03" }}>
            <StyledText style={{ fontSize: 15, fontWeight: 'bold', margin: 5 }}>Ok</StyledText>
        </TouchableOpacity>
        </StyledView>
      </StyledView>
    </TouchableOpacity>
  );
};

export default ProfileModal;
