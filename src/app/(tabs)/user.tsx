import React, { useState } from 'react';
import { Pressable, Switch, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useSession } from '../../ctx';
import Header from '../Header';

import {
  Container,
  ContainerPage,
  GroupNameUser,
  ContainerUserMenu,
  GroupItem,
  TextItem
} from '../styles/global';

export default function UserMenu() {
  const { height, width } = useWindowDimensions()
  const { signOut } = useSession()

  function handleSubmitPage(href: string) {
    router.navigate(href)
  }

  return (
    <Container>
      <Header title='Usuário' />
      <ContainerPage>
        <ContainerUserMenu widthSize={width}>

          <GroupNameUser>
            <TextItem>Osmair Moreira de Araujo</TextItem>
            <Pressable onPress={() => router.back()}>
              <GroupItem>
                <Feather name='x' size={24} />
              </GroupItem>
            </Pressable>
          </GroupNameUser>

          <Pressable onPress={() => handleSubmitPage('../cadastros/cadastrousuario')}>
            <GroupItem>
              <Feather name='file-minus' size={24} />
              <TextItem>Dados Cadastrais</TextItem>
            </GroupItem>
          </Pressable>

          <Pressable onPress={() => handleSubmitPage('../cadastros/anotacoes')}>
            <GroupItem>
              <Feather name='book-open' size={24} />
              <TextItem>Anotações</TextItem>
            </GroupItem>
          </Pressable>

          <Pressable onPress={() => handleSubmitPage('../cadastros/alterarsenha')}>
            <GroupItem>
              <Feather name='key' size={24} />
              <TextItem>Alterar Senha</TextItem>
            </GroupItem>
          </Pressable>

          <Pressable onPress={signOut}>
            <GroupItem>
              <Feather name='log-out' size={24} />
              <TextItem>Sair</TextItem>
            </GroupItem>
          </Pressable>

        </ContainerUserMenu>
      </ContainerPage>
    </Container>
  )
}
