import React from 'react';
import Header from '../Header';

import { Container, ContainerPage } from '../styles/global';
import HeaderPage from '../componentes/headerPage';

export default function Anotacoes() {
  return (
    <Container>
      <Header title='Usuarios' />
      <ContainerPage>
        <HeaderPage titlePage='Alterar Senha' />
      </ContainerPage>
    </Container>
  )
}

