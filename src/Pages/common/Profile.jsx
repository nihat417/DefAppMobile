import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
} from '../../common/StyledComponents';
import { FlatList } from 'react-native';
import ProfileHeader from '../components/Profile/ProfileHeader';

const Profile = () => {
  return (
    <StyledView>
        <ProfileHeader/>
    </StyledView>
  )
}

export default Profile;
