import React from 'react';
import { StyleSheet, Text, View, Pressable, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router'; 
import { useSession } from '../../ctx';
import Header from '../Header';

import { Container, ContainerPage, ContainerUserMenu, GroupItem, TextItem } from '../../style';

export default function UserMenu() {
  const {height, width} = useWindowDimensions()
  const { signOut } = useSession()

  return (
    <Container>
      <Header title='Usuário' cor='#cccccc' />
      <ContainerPage>
        <ContainerUserMenu widthSize={width}>
          <TextItem>Osmair Moreira de Araujo</TextItem>
          <GroupItem>
          <Feather name='file-minus' size={24} />
          <TextItem>Dados Cadastrais</TextItem>
          </GroupItem>

          <GroupItem>
          <Feather name='book-open' size={24} />
          <TextItem>Anotações</TextItem>
          </GroupItem>

          <GroupItem>
          <Feather name='key' size={24} />
          <TextItem>Alterar Senha</TextItem>
          </GroupItem>

          <Pressable onPress={signOut}>
              <GroupItem>
              <Feather name='log-out' size={24} />
              <TextItem>Sair</TextItem>
              </GroupItem>
          </Pressable>

          <Pressable onPress={() => router.back()}>
              <GroupItem>
              <Feather name='x' size={24} />
              <TextItem>Fechar Menu</TextItem>
              </GroupItem>
          </Pressable>
        </ContainerUserMenu>
      </ContainerPage>
    </Container>
  )
}
