import React from 'react';
import { Text } from 'react-native';
import Header from '../Header';

import { Container, ContainerPage } from '../../style';

const Escalas: React.FC = () => {
  return (
    <Container>
      <Header title='Escalas' cor='#cccccc' />
      <ContainerPage>
        <Text>Escalado com sucesso</Text>
      </ContainerPage>
    </Container>
    )
}

export default Escalas;