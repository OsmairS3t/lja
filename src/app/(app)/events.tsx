import React from 'react';
import { Text, View } from 'react-native';
import Header from '../Header';

import { ContainerPage } from '../../style';

const Event: React.FC = () => {
  return (
    <ContainerPage>
      <Header title='Eventos' cor='#fcd68d' />
      <Text>Aqui voce vera os eventos</Text>
    </ContainerPage>
    )
}

export default Event;