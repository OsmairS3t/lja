import React from 'react';
import { Text } from 'react-native';
import Header from '../Header';

import { Container, ContainerPage } from '../../style';

const Event: React.FC = () => {
  return (
    <Container>
      <Header title='Agenda' cor='#cccccc' />
      <ContainerPage>
        <Text>Agendamentos</Text>
      </ContainerPage>
    </Container>
    )
}

export default Event;