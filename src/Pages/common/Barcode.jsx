import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
  LocationSvg,
} from '../../common/StyledComponents';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import BarcodeHeader from '../components/Barcode/BarcodeHeader';
import NavTabMenu from '../components/Navigation/NavTabMenu';

const Barcode = () => {
  return (
    <StyledView>
      <BarcodeHeader />
      <StyledView style={{backgroundColor: '#F8F8F8'}} className="h-[90%]">
        <StyledText
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: 500,
            alignSelf: 'center',
            marginTop: 40,
          }}>
          {' '}
          Scan the barcode displayed on the meal{' '}
        </StyledText>
        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
        />
      </StyledView>
    </StyledView>
  );
};

export default Barcode;
