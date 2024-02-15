import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Header';

import { Container, ContainerPage } from '../../style';

const Lounge: React.FC = () => {
  return (
    <Container>
      <Header title='Lounge' cor='#cccccc' />
      <ContainerPage>
        <Text>Nem de lounge isso é um Lounge</Text>
      </ContainerPage>
    </Container>
    )

}

export default Lounge;