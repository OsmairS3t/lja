import React from 'react';
import { Text } from 'react-native';
import Header from '../Header';

import { Container, ContainerPage, TitlePage } from '../styles/global';

export default function Agenda() {
  return (
    <Container>
      <Header title='Agenda' cor='#cccccc' />
      <ContainerPage>
      <TitlePage>Agendamentos</TitlePage>
      </ContainerPage>
    </Container>
    )
}
