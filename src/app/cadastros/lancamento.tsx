import React from 'react';
import { Link } from 'expo-router';
import { useWindowDimensions, Pressable } from 'react-native';
import Header from '../Header';

import { Container, ContainerPage, BtnSubmit, TextBtnSubmit } from '../styles/global';
import { GroupTitle, IconBack, Title, Form, GroupInput, Input } from '../styles/cadlancamento'

export default function Lancamento() {
  const {height, width} = useWindowDimensions();

  return (
    <Container>
      <Header title='Financeiro' cor='#cccccc' />
      <ContainerPage>
        
        <GroupTitle>
          <Link href='../financeiro'>
            <IconBack name='arrow-left' size={24} />
          </Link>
          <Title>Incluir Lançamento</Title>
        </GroupTitle>

        <Form size={width}>
          <GroupInput size={100}>
            <Input placeholder='Categoria' />
          </GroupInput>

          <GroupInput size={100}>
            <GroupInput size={40}>
              <Input placeholder='Entrada' />
            </GroupInput>
            <GroupInput size={40}>
              <Input placeholder='Saida' />
            </GroupInput>
          </GroupInput>

          <GroupInput size={100}>
            <Input placeholder='Descrição' />
          </GroupInput>

          <GroupInput size={100}>
            <Input placeholder='Valor' />
          </GroupInput>

          <GroupInput size={100}>
            <Input placeholder='Data do lançamento' />
          </GroupInput>

          <BtnSubmit>
            <TextBtnSubmit>Salvar</TextBtnSubmit>
          </BtnSubmit>
        </Form>

      </ContainerPage>
    </Container>
    )
}

