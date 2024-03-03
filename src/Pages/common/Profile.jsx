import React, {useState} from 'react';
import {TouchableOpacity, Modal} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileItems from '../components/Profile/ProfileItems';
import ProfileModal from '../components/Profile/ProfileModal';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  LogOutSvg,
} from '../../common/StyledComponents';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledView>
      <ProfileHeader />
      <StyledScrollView style={{backgroundColor: '#FFF'}} className="h-[90%]">
        <ProfileItems />

        <TouchableOpacity
          onPress={openModal}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            borderWidth: 1,
            borderColor: '#FF8C03',
            borderRadius: 30,
            padding: 10,
            alignItems: 'center',
          }}>
          <LogOutSvg />
          <StyledText style={{fontSize: 16, fontWeight: 500, color: '#FF8C03'}}>
            Log out
          </StyledText>
        </TouchableOpacity>
      </StyledScrollView>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalOpen}
        onRequestClose={closeModal}>
        <BlurView style={{flex: 1}} blurType="dark" blurAmount={5}>
          <TouchableOpacity style={{flex: 1}} onPress={closeModal}>
            <ProfileModal closeModal={closeModal} />
          </TouchableOpacity>
        </BlurView>
      </Modal>
    </StyledView>
  );
};

export default Profile;
