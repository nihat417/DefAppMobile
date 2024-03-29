import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  PlusSvg,
} from '../../common/StyledComponents';
import PaymentsHeader from '../components/Payment/PaymentsHeader';
import MyCards from '../components/Payment/MyCards';
import {TouchableOpacity} from 'react-native';
import PaymentsHistory from '../components/Payment/PaymentsHistory';

const Payment = () => {
  return (
    <StyledView>
      <StyledScrollView style={{height: '90%', backgroundColor: '#fff'}}>
        {/* mycardsSection */}
        <MyCards />
        <TouchableOpacity>
          <StyledView style={{flexDirection: 'row', margin: 20}}>
            <PlusSvg />
            <StyledText
              style={{
                fontWeight: 600,
                fontSize: 20,
                marginLeft: 5,
                color: '#FF8C03',
              }}>
              Add new card
            </StyledText>
          </StyledView>
        </TouchableOpacity>

        <StyledText style={{marginLeft: 20, fontSize: 20, fontWeight: 600}}>
          Payment history
        </StyledText>
        {/* payments history */}
        <PaymentsHistory />
      </StyledScrollView>

    </StyledView>
  );
};

export default Payment;
