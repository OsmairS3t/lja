import React from 'react';
import Header from '../Header';

import { Container, ContainerPage } from '../styles/global';
import HeaderPage from '../componentes/headerPage';

export default function CadastroUsuario() {
  return (
    <Container>
      <Header title='Usuarios' />
      <ContainerPage>
        <HeaderPage titlePage='Dados Cadastrais' />
      </ContainerPage>
    </Container>
  )
}

