import React, { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import Modal from 'react-native-modal';
import Header from '../Header';

import { Container, ContainerPage } from '../styles/global';
import {
  GroupTitle,
  IconBack,
  IconFilter,
  Title,
  BlockListView,
  BlockProduct,
  IconIncomeOutcome,
  TextTitleProduct,
  TextPriceProduct,
  TextDateProduct,
  ContainerModal,
  HeaderModal,
  TextTitleModal,
  TextCloseModal,
  ButtonCloseModalFilter
} from './styles'
import { Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_ASYNCSTORAGE_LANCAMENTO } from '@env';
import { ILancamento } from '../../utils/interface';

export default function Lancamentos() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [balances, setBalances] = useState<ILancamento[]>([])

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }

  async function loadLancamentos() {
    const response = await AsyncStorage.getItem(KEY_ASYNCSTORAGE_LANCAMENTO)
    const lancamentos: ILancamento[] = response ? JSON.parse(response) : []
    setBalances(lancamentos)
  }

  function resume() {
    let total=0
    balances.map(bal => {
      total += Number(bal.valor)
    })
    return total
  }

  useEffect(() => {
    loadLancamentos()
  }, [])

  return (
    <Container>
      <Header title='Financeiro' />
      <ContainerPage>

        <GroupTitle>
          <Link href='../financeiro'>
            <IconBack name='arrow-left' size={24} />
          </Link>
          <Title>Listar Lançamentos</Title>
          <Pressable onPress={toggleModal}>
            <IconFilter name='sliders' size={24} />
          </Pressable>
        </GroupTitle>

        <BlockListView>
        {
          balances.map(lanc => (
          <BlockProduct key={lanc.id}>
            <IconIncomeOutcome name={lanc.tipo === 'Entrada' ? 'chevrons-up' : 'chevrons-down'} size={20} />
            <TextDateProduct>{lanc.datalancamento}</TextDateProduct>
            <TextTitleProduct>{lanc.categoria}</TextTitleProduct>
            <TextPriceProduct>{lanc.tipo === 'Entrada' ? '':'-'}{lanc.valor}</TextPriceProduct>
          </BlockProduct>
          ))
        }
        <BlockProduct>
          <TextDateProduct>Total:</TextDateProduct>
          <TextPriceProduct>{resume()}</TextPriceProduct>
        </BlockProduct>
        </BlockListView>

        <Modal isVisible={isModalVisible}>
          <HeaderModal>
            <TextTitleModal>Filtrar</TextTitleModal>
            <ButtonCloseModalFilter onPress={toggleModal}>
              <TextCloseModal>X</TextCloseModal>
            </ButtonCloseModalFilter>
          </HeaderModal>

          <ContainerModal heightSize={250}>

          </ContainerModal>
        </Modal>

      </ContainerPage>
    </Container>
  )
}

