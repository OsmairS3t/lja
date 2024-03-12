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
  BlockScale,
  TextMeeting,
  ContainerModal,
  HeaderModal,
  TextTitleModal,
  TextCloseModal,
  ButtonCloseModalFilter
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

        <BlockListView>
          <BlockScale>
            <TextMeeting>01/01/2024</TextMeeting>
          </BlockScale>
          <BlockScale>
            <TextMeeting>08/01/2024</TextMeeting>
          </BlockScale>
          <BlockScale>
            <TextMeeting>16/01/2024</TextMeeting>
          </BlockScale>
          <BlockScale>
            <TextMeeting>24/01/2024</TextMeeting>
          </BlockScale>
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

