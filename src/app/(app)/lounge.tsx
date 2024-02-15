import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Header';

import { Container, ContainerPage, TitlePage } from '../../style';
import { TitleButton, Btn, TextBtn, BlockResume, TextResumeTitle, TextResumePrice } from '../styles/lounge'

const Lounge: React.FC = () => {
  return (
    <Container>
      <Header title='Lounge' cor='#cccccc' />
      <ContainerPage>
        <TitleButton>
          <Btn>
            <TextBtn>+ Lançamento</TextBtn>
          </Btn>
          <Btn>
            <TextBtn>Listar</TextBtn>
          </Btn>
        </TitleButton>

        <BlockResume>
          <TextResumeTitle>Saldo atual</TextResumeTitle>
          <TextResumePrice>R$ 898,54</TextResumePrice>
        </BlockResume>

        <TitlePage>Últimos lançamentos:</TitlePage>
      </ContainerPage>
    </Container>
    )

}

export default Lounge;