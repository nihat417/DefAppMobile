import React from 'react';
import {StyledView,StyledText,SubscriptionSvg,HomeSvg,ScanSvg,HamburgerSvg,} from '../../../common/StyledComponents';
import { TouchableOpacity } from 'react-native';

const NavTabMenu = ({ state, navigation }) => {
  const { routes, index } = state;
  const currentRouteName = routes[index].name;

  return (
    <StyledView style={{ borderColor: "#ECF3F9", elevation: 1 }}>
      {/* navmenu */}
      <StyledView style={{ backgroundColor: 'fff' }} className="flex flex-row justify-between">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <StyledView className="mt-[15px] ml-[40px]">
            <HomeSvg className="ml-[8px]" width={30} height={30} stroke={currentRouteName === 'Home' ? 'green' : 'black'} />
            <StyledText
              style={{
                color: '#757575',
                fontFamily: 'Poppins-Light',
                fontWeight: 500,
              }}
            >
              Home
            </StyledText>
          </StyledView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Subscription')}>
          <StyledView className="mt-[15px] ml-[20px]">
            <SubscriptionSvg
              className="ml-[24px]"
              width={30}
              height={30}
              stroke={currentRouteName === 'Subscription' ? 'green' : 'black'}
            />
            <StyledText
              style={{
                color: '#757575',
                fontFamily: 'Poppins-Light',
                fontWeight: 500,
              }}
            >
              Subscription
            </StyledText>
          </StyledView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
          <StyledView className="mt-[15px] ml-[30px]">
            <ScanSvg
              className=" ml-[2.5px]"
              width={30}
              height={30}
              stroke={currentRouteName === 'Scan' ? 'green' : 'black'}
            />
            <StyledText
              style={{
                color: '#757575',
                fontFamily: 'Poppins-Light',
                fontWeight: 500,
              }}
            >
              Scan
            </StyledText>
          </StyledView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <StyledView className="mt-[15px] ml-[30px] mr-[30px]">
            <HamburgerSvg
              className="ml-[4.5px]"
              width={30}
              height={30}
              stroke={currentRouteName === 'Menu' ? 'green' : 'black'}
            />
            <StyledText
              style={{
                color: '#757575',
                fontFamily: 'Poppins-Light',
                fontWeight: 500,
              }}
            >
              Menu
            </StyledText>
          </StyledView>
        </TouchableOpacity>
      </StyledView>
    </StyledView>
  );
};

export default NavTabMenu;
