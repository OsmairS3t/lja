import { router } from 'expo-router';

import { useSession } from '../ctx';

import { Container, Logo, Form, GroupInput, LabelItem, InputItem, BtnSignIn, TextBtn } from '../style'

export default function SignIn() {
  const { signIn } = useSession();
  
  return (
    <Container>
      <Logo />
      <Form>
        <GroupInput>
          <LabelItem>E-mail:</LabelItem>
          <InputItem id='email' keyboardType='email-address' placeholder='email@example.com' />
        </GroupInput>

        <GroupInput>
          <LabelItem>Senha:</LabelItem>
          <InputItem id='email' keyboardType='visible-password' placeholder='email@example.com' />
        </GroupInput>

        <BtnSignIn 
          onPress={() => {
            signIn();
            router.replace('/');
          }}>
          <TextBtn>Sign In</TextBtn>
        </BtnSignIn>
      </Form>
    </Container>
  );
}
