import { Text, View } from 'react-native';

import { useSession } from '../../ctx';

import { Container, BtnSignIn, TextBtn } from '../../style'

export default function Index() {
  const { signOut } = useSession();
  return (
    <Container>
      <BtnSignIn
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}>
        <TextBtn>Sign Out</TextBtn>
      </BtnSignIn>
    </Container>
  );
}
