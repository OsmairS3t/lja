import React from 'react';
import { Text } from 'react-native';
import Header from '../Header';

import { Container, ContainerPage } from '../../style';

export default function Lancamento() {
  return (
    <Container>
      <Header title='Eventos' cor='#cccccc' />
      <ContainerPage>
        <Text>Lançamentos</Text>
      </ContainerPage>
    </Container>
    )
}

