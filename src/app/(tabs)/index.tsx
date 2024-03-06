import Header from '../Header'
import { Container, ContainerPage, TitlePage } from '../styles/global'

export default function Home() {

  return (
    <Container>
      <Header title='Home' />
      <ContainerPage>
        <TitlePage>Principal stack</TitlePage>
      </ContainerPage>
    </Container>
  );
}
