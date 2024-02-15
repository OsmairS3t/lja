import { Text } from 'react-native'
import Header from '../Header'
import { Container, ContainerPage } from '../../style'

export default function Home() {

  return (
    <Container>
      <Header title='Home' cor='#cccccc' />
      <ContainerPage>
        <Text>Principal stack</Text>
      </ContainerPage>
    </Container>
  );
}
