import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
  LocationSvg,
} from '../../common/StyledComponents';
import AddNotfHeader from '../components/AddNotification/AddNotfHeader';
import NavTabMenu from '../components/Navigation/NavTabMenu';
import AddNotfItems from '../components/AddNotification/AddNotfItems';

const AddNotifications = () => {
  return (
    <StyledView>
      <AddNotfHeader />

      <StyledScrollView style={{backgroundColor: '#F8F8F8', height: '82%'}}>
        {/* addnotfItems */}
        <AddNotfItems />
      </StyledScrollView>

      <NavTabMenu />
    </StyledView>
  );
};

export default AddNotifications;
