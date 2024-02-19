import { router } from 'expo-router';
import { useSession } from '../ctx';

import { 
  ContainerLogin,
  Container, 
  Logo, 
  Form, 
  GroupInput, 
  LabelItem, 
  InputItem, 
  BtnSignIn, 
  GroupRegister,
  TextRegister,
  TextBtn
  } from './styles/global'

export default function SignIn() {
  const { signIn } = useSession();
  
  return (
    <ContainerLogin>
      <Logo source={require('../assets/logo_branco.png')} />
      <Form>
        <GroupInput>
          <InputItem id='email' keyboardType='email-address' placeholder='email@example.com' />
        </GroupInput>

        <GroupInput>
          <InputItem id='email' keyboardType='visible-password' placeholder='email@example.com' />
        </GroupInput>

        <BtnSignIn 
          onPress={() => {
            signIn();
            router.replace('/');
          }}>
          <TextBtn>Acessar</TextBtn>
        </BtnSignIn>

        <GroupRegister>
          <TextRegister>Não tenho cadastro</TextRegister>
          <TextRegister>|</TextRegister>
          <TextRegister>Esqueci a senha</TextRegister>
        </GroupRegister>
        
      </Form>
    </ContainerLogin>
  );
}
