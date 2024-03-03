import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
} from '../../common/StyledComponents';
import SettingsHeader from '../components/SettingsPage/SettingsHeader';
import NavTabMenu from '../components/Navigation/NavTabMenu';
import SettingPageItems from '../components/SettingsPage/SettingPageItems';

const SettingsPage = () => {
  return (
    <StyledView>
      <SettingsHeader />
      <StyledView style={{backgroundColor: '#F8F8F8'}} className="h-[82%]">
        {/* setting components */}
        <SettingPageItems />
      </StyledView>
      <NavTabMenu />
    </StyledView>
  );
};

export default SettingsPage;
