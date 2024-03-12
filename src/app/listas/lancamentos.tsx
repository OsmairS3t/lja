import React, { useState } from 'react';
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
import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function Lancamentos() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }

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
          <BlockProduct>
            <IconIncomeOutcome name='chevrons-up' size={20} />
            <TextDateProduct>01/01/2024</TextDateProduct>
            <TextTitleProduct>Produto X</TextTitleProduct>
            <TextPriceProduct>R$ 35,00</TextPriceProduct>
          </BlockProduct>
          <BlockProduct>
            <IconIncomeOutcome name='chevrons-up' size={20} />
            <TextDateProduct>01/01/2024</TextDateProduct>
            <TextTitleProduct>Produto X</TextTitleProduct>
            <TextPriceProduct>R$ 35,00</TextPriceProduct>
          </BlockProduct>
          <BlockProduct>
            <IconIncomeOutcome name='chevrons-up' size={20} />
            <TextDateProduct>01/01/2024</TextDateProduct>
            <TextTitleProduct>Produto X</TextTitleProduct>
            <TextPriceProduct>R$ 35,00</TextPriceProduct>
          </BlockProduct>
          <BlockProduct>
            <IconIncomeOutcome name='chevrons-up' size={20} />
            <TextDateProduct>01/01/2024</TextDateProduct>
            <TextTitleProduct>Produto X</TextTitleProduct>
            <TextPriceProduct>R$ 35,00</TextPriceProduct>
          </BlockProduct>
        </BlockListView>

        <Modal isVisible={isModalVisible}>
          <ContainerModal heightSize={250}>
            <HeaderModal>
              <TextTitleModal>Filtrar</TextTitleModal>
              <ButtonCloseModalFilter onPress={toggleModal}>
                <TextCloseModal>X</TextCloseModal>
              </ButtonCloseModalFilter>
            </HeaderModal>

          </ContainerModal>
        </Modal>

      </ContainerPage>
    </Container>
  )
}

