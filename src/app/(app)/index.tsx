import { Text } from 'react-native'
import Header from '../Header'
import { ContainerPage } from '../../style'

export default function Home() {

  return (
    <ContainerPage>
      <Header title='Home' cor='#e6fcf1' />
      <Text>Principal stack</Text>
    </ContainerPage>
  );
}
