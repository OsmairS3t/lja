import { useState } from 'react';
import { router } from 'expo-router';
import { useSession } from '../../ctx';
import { TouchableOpacity, useWindowDimensions } from 'react-native'
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
  cor?: string;
}

export default function Header({ title, cor }: Props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const { height, width } = useWindowDimensions();
  const { signOut } = useSession()

  function handleToggleMenu() {
    router.navigate('../(tabs)/user')
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleToggleMenu}>
        <GroupUser>
          <PhotoUser source={require('../../assets/photo.png')} />
          <GroupUserName>
            <TextUser>Bem vindo</TextUser>
            <TextUser>Osmair</TextUser>
          </GroupUserName>
        </GroupUser>
      </TouchableOpacity>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderLogo source={require('../../assets/logo.png')} />
    </Container>
  )
}