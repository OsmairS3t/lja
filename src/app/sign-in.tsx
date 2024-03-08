import { router } from 'expo-router';
import { useSession } from '../ctx';
import { useTheme } from 'styled-components/native';

import {
  ContainerLogin,
  Logo,
  Form,
  GroupCredit,
  Credits,
  GroupInput,
  InputItem,
  BtnSignIn,
  GroupRegister,
  TextRegister,
  TextBtn
} from './styles/global'
import { Pressable } from 'react-native';
import { useState } from 'react';

export default function SignIn() {
  const theme = useTheme()
  const { signIn } = useSession();
  const [tema, setTema] = useState(theme.TYPE==='light' ? 'light' : 'dark')

  function toggleSwitch() {
    if (tema === 'light') {
      setTema('dark')
    } else {
      setTema('light')
    }
  }

  return (
    <ContainerLogin>
      <Logo tema={tema} />
      <Form>
        <GroupInput>
          <InputItem id='email' keyboardType='email-address' placeholder='email@example.com' />
        </GroupInput>

        <GroupInput>
          <InputItem id='email' secureTextEntry placeholder='email@example.com' />
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

      <GroupCredit>
        <Pressable onPress={toggleSwitch}>
          <Credits tema={tema} />
        </Pressable>

      </GroupCredit>

    </ContainerLogin>
  );
}
