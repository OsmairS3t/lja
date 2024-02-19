import { TouchableOpacity, useWindowDimensions } from 'react-native'
import { 
  Container, 
  HeaderTitle, 
  HeaderSignOut, 
  HeaderLogo,
  GroupUser,
  GroupUserName,
  PhotoUser,
  TextUser
} from './styles';
import { useSession } from '../../ctx';
import { router } from 'expo-router';
import { useState } from 'react';
import MenuUser from '../componentes/menuUser';

interface Props{
  title?: string;
  cor?: string;
}

export default function Header({ title, cor }: Props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const { height, width} = useWindowDimensions();
  const { signOut } = useSession()

  function handleToggleMenu() {
    router.navigate('../(app)/user')
  }

return (
    <Container colorBackground={cor}>
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