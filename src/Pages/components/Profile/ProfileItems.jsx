import React from 'react';
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
import { TouchableOpacity } from 'react-native';

const ProfileItems = () => {
  return (
    <StyledView>
        <StyledText style={{fontSize:20,fontWeight:600,color:"#184639",marginLeft:20,marginTop:20}}>Profile</StyledText>

        {/* Components */}
        <TouchableOpacity>
            <StyledView style={{flexDirection:'row',marginTop:20,marginLeft:20,marginRight:20,backgroundColor:"#F6F8FA",borderWidth:1,borderRadius:10,justifyContent:'space-between',padding:10,borderColor:"#EDEDED" }}>
                <PersonalInfoSvg/>
                <StyledText style={{color:"#292B2D",fontSize:16,marginTop:10,fontWeight:500}}>Personal information</StyledText>
                <RightArrowSvg style={{marginTop:10}}/>
            </StyledView>
        </TouchableOpacity>

        <TouchableOpacity>
            <StyledView style={{flexDirection:'row',marginTop:20,marginLeft:20,marginRight:20,backgroundColor:"#F6F8FA",borderWidth:1,borderRadius:10,justifyContent:'space-between',padding:10,borderColor:"#EDEDED" }}>
                <AddIconSvg/>
                <StyledText style={{color:"#292B2D",fontSize:16,marginTop:10,fontWeight:500}}>Add locations</StyledText>
                <RightArrowSvg style={{marginTop:10}}/>
            </StyledView>
        </TouchableOpacity>

        <StyledText style={{fontSize:20,fontWeight:600,color:"#184639",marginLeft:20,marginTop:20}}>Options</StyledText>

        <TouchableOpacity>
            <StyledView style={{flexDirection:'row',marginTop:20,marginLeft:20,marginRight:20,backgroundColor:"#F6F8FA",borderWidth:1,borderRadius:10,justifyContent:'space-between',padding:10,borderColor:"#EDEDED" }}>
                <InvoicesSvg/>
                <StyledText style={{color:"#292B2D",fontSize:16,marginTop:10,fontWeight:500}}>Invoices</StyledText>
                <RightArrowSvg style={{marginTop:10}}/>
            </StyledView>
        </TouchableOpacity>

        <TouchableOpacity>
            <StyledView style={{flexDirection:'row',marginTop:20,marginLeft:20,marginRight:20,backgroundColor:"#F6F8FA",borderWidth:1,borderRadius:10,justifyContent:'space-between',padding:10,borderColor:"#EDEDED" }}>
                <PaymentsSvg/>
                <StyledText style={{color:"#292B2D",fontSize:16,marginTop:10,fontWeight:500}}>Payments</StyledText>
                <RightArrowSvg style={{marginTop:10}}/>
            </StyledView>
        </TouchableOpacity>

        <TouchableOpacity>
            <StyledView style={{flexDirection:'row',marginTop:20,marginLeft:20,marginRight:20,backgroundColor:"#F6F8FA",borderWidth:1,borderRadius:10,justifyContent:'space-between',padding:10,borderColor:"#EDEDED" }}>
                <TermsAndConditionsSvg/>
                <StyledText style={{color:"#292B2D",fontSize:16,marginTop:10,fontWeight:500}}>Terms and conditions</StyledText>
                <RightArrowSvg style={{marginTop:10}}/>
            </StyledView>
        </TouchableOpacity>

        <TouchableOpacity>
            <StyledView style={{flexDirection:'row',marginTop:20,marginLeft:20,marginRight:20,backgroundColor:"#F6F8FA",borderWidth:1,borderRadius:10,justifyContent:'space-between',padding:10,borderColor:"#EDEDED" }}>
                <HelpSvg/>
                <StyledText style={{color:"#292B2D",fontSize:16,marginTop:10,fontWeight:500}}>Help</StyledText>
                <RightArrowSvg style={{marginTop:10}}/>
            </StyledView>
        </TouchableOpacity>

        <TouchableOpacity>
            <StyledView style={{flexDirection:'row',marginTop:20,marginLeft:20,marginRight:20,backgroundColor:"#F6F8FA",borderWidth:1,borderRadius:10,justifyContent:'space-between',padding:10,borderColor:"#EDEDED" }}>
                <SettingsSvg/>
                <StyledText style={{color:"#292B2D",fontSize:16,marginTop:10,fontWeight:500}}>Settings</StyledText>
                <RightArrowSvg style={{marginTop:10}}/>
            </StyledView>
        </TouchableOpacity>

        <TouchableOpacity>
            <StyledView style={{flexDirection:'row',marginTop:20,marginLeft:20,marginRight:20,marginBottom:40,backgroundColor:"#F6F8FA",borderWidth:1,borderRadius:10,padding:10,borderColor:"#EDEDED",justifyContent:'space-between' }}>
                <DeleteAcSvg/>
                <StyledText style={{color:"#292B2D",fontSize:16,marginTop:10,fontWeight:500}}>Delete your account</StyledText>
                <StyledView></StyledView>
            </StyledView>
        </TouchableOpacity>

    </StyledView>
  )
}

export default ProfileItems;
