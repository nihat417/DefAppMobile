import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
  LocationSvg,
} from '../../common/StyledComponents';
import BarcodeHeader from '../components/BarcodeScan/BarcodeHeader';
import BarcodeItems from '../components/BarcodeScan/BarcodeItems';
import BarcodeAddProduct from '../components/BarcodeScan/BarcodeAddProduct';

const BarcodeScan = () => {
  return (
    <StyledView>
        <BarcodeHeader/>

        <StyledScrollView style={{backgroundColor: '#F8F8F8'}} className="h-[82%]">
            {/* Components */}
            <BarcodeItems/>
            <BarcodeItems/>
            <BarcodeItems/>
            <BarcodeItems/>
            <BarcodeItems/>
            <BarcodeItems/>
        </StyledScrollView>

        <BarcodeAddProduct/>
    </StyledView>
  )
}

export default BarcodeScan;
