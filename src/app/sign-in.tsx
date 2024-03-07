import { router } from 'expo-router';
import { useSession } from '../ctx';

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
  const { signIn } = useSession();
  const [tema, setTema] = useState('dark')
  const [isDark, setIsDark] = useState(false)
  const [imgLogo, setImgLogo] = useState(require('../assets/logo_branco.png'))
  const [img, setImg] = useState(require('../assets/credit_dark.png'))

  function toggleSwitch() {
    if (tema === 'light') {
      setIsDark(false)
      setTema('dark')
      setImg(require('../assets/credit_dark.png'))
      setImgLogo(require('../assets/logo_branco.png'))
    } else {
      setIsDark(true)
      setTema('light')
      setImgLogo(require('../assets/logo.png'))
      setImg(require('../assets/credit_light.png'))
    }
  }

  return (
    <ContainerLogin>
      <Logo source={imgLogo} />
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
          <Credits source={img} />
        </Pressable>

      </GroupCredit>

    </ContainerLogin>
  );
}
