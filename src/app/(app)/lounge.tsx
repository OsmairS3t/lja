import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Header';

import { ContainerPage } from '../../style';

const Lounge: React.FC = () => {
  return (
    <ContainerPage>
      <Header title='Lounge' cor='#8dd4fc' />
      <Text>Nem de lounge isso é um Lounge</Text>
    </ContainerPage>
    )

}

export default Lounge;