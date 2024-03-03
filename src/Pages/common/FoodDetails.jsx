import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
  LocationSvg,
  StyledButton,
} from '../../common/StyledComponents';
import FoodDetailsHeader from '../components/FoodDetails/FoodDetailsHeader';
import NavTabMenu from '../components/Navigation/NavTabMenu';

const FoodDetails = () => {
  return (
    <StyledView>
      <StyledScrollView className="h-[91.5%]">
        <FoodDetailsHeader />
        <StyledView className="ml-[20px] mr-[20px] mt-[300px]">
          {/* Sezar salad texts */}
          <StyledView className="flex flex-row justify-between">
            <StyledText
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: '#184639',
                marginLeft: 10,
              }}>
              Sezar Salad
            </StyledText>
            <StyledView className="flex flex-row mr-[10px]">
              <StyledImage
                className="mr-[10px]"
                source={require('../../assets/images/newImage.png')}
              />
              <StyledImage
                source={require('../../assets/images/topImage.png')}
              />
            </StyledView>
          </StyledView>

          {/* Sezar salad Ingridents section 1 */}
          <StyledView
            style={{
              backgroundColor: '#fff',
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 10,
              marginRight: 10,
              elevation: 3,
              borderRadius: 10,
            }}>
            <StyledView className="flex flex-row justify-between mt-[20px] mb-[20px]">
              <StyledView className="flex flex-row">
                <StyledView
                  style={{
                    backgroundColor: '#fff',
                    elevation: 4,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 30,
                  }}>
                  <StyledText
                    style={{
                      color: '#66B600',
                      fontSize: 14,
                      fontWeight: 400,
                      marginLeft: 20,
                      marginRight: 20,
                    }}>
                    5300 g
                  </StyledText>
                </StyledView>
                <StyledView
                  style={{
                    backgroundColor: '#fff',
                    elevation: 4,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 30,
                  }}>
                  <StyledText
                    style={{color: '#184639', fontSize: 14, fontWeight: 400}}>
                    830 kkal{' '}
                  </StyledText>
                </StyledView>
              </StyledView>
              <StyledText
                style={{
                  color: '#42C2E5',
                  marginRight: 20,
                  fontWeight: 700,
                  fontSize: 16,
                }}>
                12 AZN
              </StyledText>
            </StyledView>

            <StyledView className="flex flex-row justify-between mr-[20px] ml-[20px] mb-[20px]">
              <StyledText style={{fontSize: 16, fontWeight: 400}}>
                Z 18.4 | Y 7.5 | K 7.8{' '}
              </StyledText>
              <StyledText
                style={{color: '#FF8C03', fontSize: 16, fontWeight: 700}}>
                4 items left
              </StyledText>
            </StyledView>
          </StyledView>

          {/* Sezar salad Ingridents section 2 */}
          <StyledView className="mt-[20px] ml-[10px] mr-[10px] mb-[20px]">
            <StyledText
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: '#184639',
                marginBottom: 10,
              }}>
              Ingredients
            </StyledText>
            <StyledView
              style={{backgroundColor: '#fff', elevation: 3, borderRadius: 10}}>
              <StyledText
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#000',
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                {' '}
                Lorem ipsum dolor sit amet, consectetur{' '}
              </StyledText>
              <StyledText
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#000',
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                {' '}
                Lorem ipsum dolor sit amet, consectetur{' '}
              </StyledText>
              <StyledText
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#000',
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                {' '}
                Lorem ipsum dolor sit amet, consectetur{' '}
              </StyledText>
              <StyledText
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#000',
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                {' '}
                Lorem ipsum dolor sit amet, consectetur{' '}
              </StyledText>
              <StyledText
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#000',
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                {' '}
                Lorem ipsum dolor sit amet, consectetur{' '}
              </StyledText>
              <StyledText
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#000',
                  marginLeft: 10,
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                {' '}
                Lorem ipsum dolor sit amet, consectetur{' '}
              </StyledText>
            </StyledView>
          </StyledView>

          {/* button section */}
          <StyledButton
            style={{backgroundColor: '#66B600', borderRadius: 20, padding: 15}}
            className="mt-[150px] mb-[30px] ml-[10px] mr-[10px]">
            <StyledText
              style={{
                alignSelf: 'center',
                color: '#fff',
                fontSize: 18,
                fontWeight: 500,
              }}>
              Add to basket
            </StyledText>
          </StyledButton>
        </StyledView>
      </StyledScrollView>

      {/* navmenu */}
      <StyledView>{/* <NavTabMenu /> */}</StyledView>
    </StyledView>
  );
};

export default FoodDetails;
