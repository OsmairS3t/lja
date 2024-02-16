import { TouchableOpacity } from 'react-native'
import { 
  Container, 
  HeaderTitle, 
  HeaderSignOut, 
  HeaderLogo,
  GroupUser,
  GroupUserName,
  PhotoUser,
  TextUser,
} from './styles';
import { useSession } from '../../ctx';
import { router } from 'expo-router';

interface Props{
  title?: string;
  cor?: string;
}

export default function Header({ title, cor }: Props) {
  const { signOut } = useSession()

  return (
    <Container colorBackground={cor}>
      {/* <TouchableOpacity onPress={() => {signOut()}}> */}
      <TouchableOpacity onPress={() => router.replace('../componentes/user')}>
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