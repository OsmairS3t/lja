import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { useSession } from '../ctx';

import { Container, BtnSignIn, TextBtn } from '../style'

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <Container>
      <BtnSignIn 
        onPress={() => {
          signIn();
          router.replace('/');
        }}>
        <TextBtn>Sign In</TextBtn>
      </BtnSignIn>
    </Container>
  );
}
