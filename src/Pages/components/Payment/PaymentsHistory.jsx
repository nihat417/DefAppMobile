import React from 'react';
import { SectionList, TouchableOpacity } from 'react-native';
import {
  StyledView,
  StyledText,
  InvoiceSvg,
} from '../../../common/StyledComponents';

const PaymentsHistory = () => {
  const DATA = [
    {
      title: 'Yesterday',
      data: [
        {
          id: 1,
          name: 'Port Bazar',
          amount: '50.00 AZN',
          time: '14:35',
          details: 'Account AZN, 38999280820920802',
        },
        {
          id: 2,
          name: 'Port Bazar',
          amount: '50.00 AZN',
          time: '14:35',
          details: 'Account AZN, 38999280820920802',
        },
        {
          id: 3,
          name: 'Port Bazar',
          amount: '50.00 AZN',
          time: '14:35',
          details: 'Account AZN, 38999280820920802',
        },
        {
          id: 4,
          name: 'Port Bazar',
          amount: '50.00 AZN',
          time: '14:35',
          details: 'Account AZN, 38999280820920802',
        },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <StyledView style={{ padding: 10, borderBottomWidth: 1, borderColor: '#E7E7E7' }}>
      <StyledView style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <StyledText style={{ fontSize: 18, fontWeight: 400, color: '#000' }}>{item.name}</StyledText>
        <StyledText style={{ fontSize: 18, fontWeight: 500, color: '#42C2E5' }}>{item.amount}</StyledText>
      </StyledView>
      <StyledView style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <StyledText style={{ fontSize: 14, fontWeight: 400, color: '#909090' }}>{item.time}, {item.details}</StyledText>
        <TouchableOpacity>
          <InvoiceSvg />
        </TouchableOpacity>
      </StyledView>
    </StyledView>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <StyledText style={{ marginTop: 20, marginBottom: 10, color: '#B8B8B8', fontSize: 20, fontWeight: 400 }}>{title}</StyledText>
  );

  return (
    <StyledView style={{ marginLeft: 20, marginRight: 20 }}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </StyledView>
  );
};

export default PaymentsHistory;
