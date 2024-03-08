import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
  LocationSvg,
} from '../../common/StyledComponents';
import AddNotfHeader from '../components/AddNotification/AddNotfHeader';
import AddNotfItems from '../components/AddNotification/AddNotfItems';

const AddLocations = () => {
  return (
    <StyledView>

      <StyledScrollView style={{backgroundColor: '#F8F8F8', height: '82%'}}>
        {/* addnotfItems */}
        <AddNotfItems />
      </StyledScrollView>
    </StyledView>
  );
};

export default AddLocations;
