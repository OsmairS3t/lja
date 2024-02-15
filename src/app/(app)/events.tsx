import React from 'react';
import { Text } from 'react-native';
import Header from '../Header';

import { Container, ContainerPage } from '../../style';

const Event: React.FC = () => {
  return (
    <Container>
      <Header title='Eventos' cor='#cccccc' />
      <ContainerPage>
        <Text>Aqui voce vera os eventos</Text>
      </ContainerPage>
    </Container>
    )
}

export default Event;