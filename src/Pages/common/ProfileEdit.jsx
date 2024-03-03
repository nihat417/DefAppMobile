import React, {useState} from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
  EditProfileSvg,
  StyledInput,
  StyledButton,
} from '../../common/StyledComponents';
import {FlatList, TextInput} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import ProfileEditHeader from '../components/ProfileEdit/ProfileEditHeader';
import NavTabMenu from '../components/Navigation/NavTabMenu';

const ProfileEdit = () => {
  const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: true},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  return (
    <StyledView>
      <ProfileEditHeader />
      <StyledView style={{backgroundColor: '#F8F8F8'}} className="h-[82%]">
        <StyledView style={{flexDirection: 'row', margin: 20}}>
          <StyledView style={{marginLeft: 10}}>
            <StyledImage
              style={{width: 100, height: 100, borderRadius: 50}}
              source={require('../../assets/images/mrbean.jpg')}
            />
            <EditProfileSvg
              style={{position: 'absolute', bottom: -10, right: -10}}
            />
          </StyledView>
          <StyledText
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#32343E',
              marginLeft: 30,
              marginTop: 30,
            }}>
            Niko Akremi
          </StyledText>
        </StyledView>

        <StyledView style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TextInput
            style={{
              width: 180,
              elevation: 1,
              marginRight: 5,
              borderRadius: 10,
              borderColor: 'trasparent',
              backgroundColor: '#fff',
            }}
            placeholder="Niko"></TextInput>
          <TextInput
            style={{
              width: 180,
              elevation: 1,
              marginLeft: 5,
              borderRadius: 10,
              borderColor: 'trasparent',
              backgroundColor: '#fff',
            }}
            placeholder="Niko"></TextInput>
        </StyledView>

        <StyledView
          style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
          <SelectList
            setSelected={val => setSelected(val)}
            boxStyles={{
              backgroundColor: '#fff',
              width: 140,
              marginTop: 20,
              borderColor: 'transparent',
            }}
            data={data}
            save="value"
          />
          <TextInput
            style={{
              width: 220,
              marginLeft: 10,
              elevation: 1,
              borderRadius: 10,
              borderColor: 'transparent',
              marginTop: 20,
              backgroundColor: '#fff',
            }}
            placeholder="Niko"
          />
        </StyledView>

        <SelectList
          setSelected={val => setSelected(val)}
          boxStyles={{
            backgroundColor: '#fff',
            margin: 20,
            marginTop: 20,
            borderColor: 'transparent',
          }}
          data={data}
          save="value"
        />
        <TextInput
          style={{
            elevation: 1,
            marginRight: 20,
            marginLeft: 25,
            borderRadius: 10,
            borderColor: 'trasparent',
            backgroundColor: '#fff',
          }}
          placeholder="Niko"></TextInput>

        <StyledButton
          style={{
            backgroundColor: '#66B600',
            marginTop: 200,
            borderColor: '#66B600',
            borderWidth: 1,
          }}
          className="flex flex-row justify-center p-[15px] ml-[20px] mr-[20px] mb-[10px] rounded-[40px]">
          <StyledText style={{color: '#fff'}}>Confirm</StyledText>
        </StyledButton>
      </StyledView>

      {/* <NavTabMenu /> */}
    </StyledView>
  );
};

export default ProfileEdit;
