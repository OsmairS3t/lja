import { useState } from 'react';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native'
import {
  Container,
  HeaderTitle,
  HeaderLogo,
  GroupUser,
  GroupUserName,
  PhotoUser,
  TextUser
} from './styles';

interface Props {
  title?: string;
}

export default function Header({ title }: Props) {

  function handleToggleMenu() {
    router.navigate('../(tabs)/user')
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleToggleMenu}>
        <GroupUser>
          <PhotoUser source={require('../../assets/photo.png')} />
          <GroupUserName>
            <TextUser>Osmair</TextUser>
          </GroupUserName>
        </GroupUser>
      </TouchableOpacity>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderLogo source={require('../../assets/logo_branco.png')} />
    </Container>
  )
}