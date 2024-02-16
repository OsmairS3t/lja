import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from '../../style';
import { useSession } from '../../ctx';

export default function UserMenu() {
  const { signOut } = useSession()

  return (
      <View>
        <Text>Osmair Moreira de Araujo</Text>
        <Text>Dados Cadastrais</Text>
        <Text>Anotações</Text>
        <Text>Alterar Senha</Text>
        <Text>Sair</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    height: 200,
    backgroundColor: '#FFFFFF',
  },
  GroupItem: {
    display: 'flex',
    flexDirection: 'row'
  }
})
