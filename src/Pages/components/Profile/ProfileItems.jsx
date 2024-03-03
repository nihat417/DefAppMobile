import React from 'react';
import { SectionList, TouchableOpacity } from 'react-native';
import {
  StyledView,
  StyledText,
  PersonalInfoSvg,
  RightArrowSvg,
  AddIconSvg,
  InvoicesSvg,
  PaymentsSvg,
  TermsAndConditionsSvg,
  HelpSvg,
  SettingsSvg,
  DeleteAcSvg,
} from '../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';

const ProfileItems = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      title: 'Profile',
      data: [
        { id: '1', title: 'Personal information', icon: <PersonalInfoSvg />,screen: 'ProfileEdit' },
        { id: '2', title: 'Add locations', icon: <AddIconSvg /> },
      ],
    },
    {
      title: 'Options',
      data: [
        { id: '3', title: 'Invoices', icon: <InvoicesSvg /> },
        { id: '4', title: 'Payments', icon: <PaymentsSvg />,screen:'Payments' },
        { id: '5', title: 'Terms and conditions', icon: <TermsAndConditionsSvg /> },
        { id: '6', title: 'Help', icon: <HelpSvg /> },
        { id: '7', title: 'Settings', icon: <SettingsSvg /> },
        { id: '8', title: 'Delete your account', icon: <DeleteAcSvg /> },
      ],
    },
  ];

  
  

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate(item.screen)}>
      <StyledView style={{ flexDirection: 'row', marginTop: 20,marginLeft: 20, marginRight: 20, backgroundColor: "#F6F8FA", borderWidth: 1, borderRadius: 10, justifyContent: 'space-between', padding: 10, borderColor: "#EDEDED" }}>
        {item.icon}
        <StyledText style={{ color: "#292B2D", fontSize: 16, marginTop: 10, fontWeight: 500 }}>{item.title}</StyledText>
        <RightArrowSvg style={{ marginTop: 10 }} />
      </StyledView>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <StyledText style={{ fontSize: 20, fontWeight: 600, color: "#184639", marginLeft: 20, marginTop: 20 }}>{title}</StyledText>
  );

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.id}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default ProfileItems;
