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
  BlockProductText,
  GroupIncomeOutcome,
  TextTitleProduct,
  TextPriceProduct,
  TextSubTitleProduct,
  ContainerModal,
  HeaderModal,
  TextTitleModal,
  TextCloseModal,
  CloseModalFilter
} from './styles'
import { Pressable } from 'react-native';

export default function ListEscalas() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <Container>
      <Header title='Escalas' />
      <ContainerPage>

        <GroupTitle>
          <Link href='../escalas'>
            <IconBack name='arrow-left' size={24} />
          </Link>
          <Title>Listar Escalas</Title>
          <Pressable onPress={toggleModal}>
            <IconFilter name='sliders' size={24} />
          </Pressable>
        </GroupTitle>


        <Modal isVisible={isModalVisible}>
          <ContainerModal size={250}>
            <HeaderModal>
              <TextTitleModal>Filtrar</TextTitleModal>
              <CloseModalFilter onPress={toggleModal}>
                <TextCloseModal>X</TextCloseModal>
              </CloseModalFilter>
            </HeaderModal>

          </ContainerModal>
        </Modal>

      </ContainerPage>
    </Container>
  )
}

