import { TouchableOpacity } from 'react-native'
import { Container, HeaderTitle, HeaderSignOut, HeaderLogo } from './styles';
import { useSession } from '../../ctx';

interface Props{
  title?: string;
  cor?: string;
}

export default function Header({ title, cor }: Props) {
  const { signOut } = useSession()

  return (
    <Container colorBackground={cor}>
      <TouchableOpacity onPress={() => {signOut()}}>
        <HeaderSignOut name='logout' size={32} />
      </TouchableOpacity>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderLogo source={require('../../assets/logo.png')} />
    </Container>
  )
}