import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledButton,
  StyledImage,
  InvoiceSvg,
} from '../../common/StyledComponents';
import DetailsHeader from '../components/Details/DetailsHeader';

const Details = () => {
  return (
    <StyledView style={{flex: 1,backgroundColor:"#FAFAFA"}}>
      {/* Details Header */}
      <DetailsHeader complated={false}/>

      {/* abot details */}
      <StyledView style={{ marginTop:50,justifyContent:'space-around',flexDirection:'row',marginBottom: 100 }}>
        <StyledView>
            <StyledText style={{marginTop:10}}>Transaction ID</StyledText>
            <StyledText style={{marginTop:10}}>Purchase date</StyledText>
            <StyledText style={{marginTop:10}}>Card number</StyledText>
            <StyledText style={{marginTop:10}}>Amount</StyledText>
        </StyledView>

        <StyledView>
            <StyledText style={{fontSize:14,fontWeight:400,color:"#414141",marginTop:10}}  className='text-right'>12345678</StyledText>
            <StyledText style={{fontSize:14,fontWeight:400,color:"#414141",marginTop:10}}  className='text-right'>21.05.23, 12:32</StyledText>
            <StyledText style={{fontSize:14,fontWeight:400,color:"#414141",marginTop:10}}  className='text-right'>41694455****7754</StyledText>
            <StyledText style={{fontSize:14,fontWeight:400,color:"#414141",marginTop:10}}  className='text-right'>$40</StyledText>
        </StyledView>
      </StyledView>

      {/* buttons*/}
      <StyledView style={{position: 'absolute', bottom: 0, left: 0, right: 0, }}>
        <StyledButton style={{backgroundColor:"#fff" ,borderColor:"#66B600",borderWidth: 1,flexDirection:'row',justifyContent:'center',padding:20,marginLeft:20,marginRight:20,marginBottom:10,borderRadius:40}}><InvoiceSvg/><StyledText> View your invoice</StyledText></StyledButton>
        <StyledButton style={{backgroundColor:"#66B600" ,borderColor:"#66B600",borderWidth: 1,flexDirection:'row',justifyContent:'center',padding:20,marginLeft:20,marginRight:20,marginBottom:10,borderRadius:40}}><StyledText>Back to homepage</StyledText></StyledButton>
      </StyledView>
    </StyledView>
  );
};

export default Details;
