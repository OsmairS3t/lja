import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import Modal from 'react-native-modal'
import Header from '../Header';
import { escalas } from '../../utils/database'

import { Container, ContainerPage, TitlePage, BtnSubmit, TextBtnSubmit } from '../styles/global';
import {
  Form,
  GroupInput,
  InputForm,
  ListIncluded,
  BtnPlus,
  BtnMinus,
  TitleItems,
  GroupItemsView,
  GroupItemsText,
  GroupItemsOrder,
  IconOrder,
  TextItem,
  ContainerModal,
  HeaderModal,
  CloseModalReuniao,
  CloseModalFuncao,
  CloseModalServo,
  TextTitleModal
} from '../styles/escalas';

const Escalas: React.FC = () => {
  const [isModalVisibleReuniao, setModalVisibleReuniao] = useState(false);
  const [isModalVisibleFuncao, setModalVisibleFuncao] = useState(false);
  const [isModalVisibleServo, setModalVisibleServo] = useState(false);

  function toggleModal(screen: string) {
    if (screen === 'reuniao') {
      setModalVisibleReuniao(!isModalVisibleReuniao);
    }
    if (screen === 'funcao') {
      setModalVisibleFuncao(!isModalVisibleFuncao);
    }
    if (screen === 'servo') {
      setModalVisibleServo(!isModalVisibleServo);
    }
  };

  return (
    <Container>
      <Header title='Escalas' cor='#cccccc' />
      <ContainerPage>
        <TitlePage>Escalas</TitlePage>

        <Form>
          <GroupInput>
            <InputForm
              placeholder='Dia da Reunião'
              id='reuniao'
            />
            <Pressable onPress={() => toggleModal('reuniao')}>
              <BtnPlus name='plus-circle' size={40} />
            </Pressable>
          </GroupInput>

          <GroupInput>
            <InputForm
              placeholder='Função'
              id='funcao'
            />
            <Pressable onPress={() => toggleModal('funcao')}>
              <BtnPlus name='plus-circle' size={40} />
            </Pressable>
          </GroupInput>

          <GroupInput>
            <InputForm
              placeholder='Servo'
              id='servo'
            />
            <Pressable onPress={() => toggleModal('servo')}>
              <BtnPlus name='plus-circle' size={40} />
            </Pressable>
          </GroupInput>

          <BtnSubmit>
            <TextBtnSubmit>Incluir</TextBtnSubmit>
          </BtnSubmit>
        </Form>

        {escalas &&
          <TitleItems>Incluidos para o dia {escalas[0].diareuniao}</TitleItems>
        }
        <ListIncluded>
          <GroupItemsView>
            <GroupItemsText>
              <TextItem>Recepção:</TextItem>
              <TextItem>Fulano de tal</TextItem>
            </GroupItemsText>
            <GroupItemsOrder>
              <IconOrder name='arrow-up' size={24} />
              <IconOrder name='arrow-down' size={24} />
              <BtnMinus name='trash-2' size={24} />
            </GroupItemsOrder>
          </GroupItemsView>

          <GroupItemsView>
            <GroupItemsText>
              <TextItem>Mídia:</TextItem>
              <TextItem>Fulano de tal</TextItem>
            </GroupItemsText>
            <GroupItemsOrder>
              <IconOrder name='arrow-up' size={24} />
              <IconOrder name='arrow-down' size={24} />
              <BtnMinus name='trash-2' size={24} />
            </GroupItemsOrder>
          </GroupItemsView>

          <GroupItemsView>
            <GroupItemsText>
              <TextItem>Lanchonete:</TextItem>
              <TextItem>Fulano de tal</TextItem>
            </GroupItemsText>
            <GroupItemsOrder>
              <IconOrder name='arrow-up' size={24} />
              <IconOrder name='arrow-down' size={24} />
              <BtnMinus name='trash-2' size={24} />
            </GroupItemsOrder>
          </GroupItemsView>

          <GroupItemsView>
            <GroupItemsText>
              <TextItem>Abertura:</TextItem>
              <TextItem>Fulano de tal</TextItem>
            </GroupItemsText>
            <GroupItemsOrder>
              <IconOrder name='arrow-up' size={24} />
              <IconOrder name='arrow-down' size={24} />
              <BtnMinus name='trash-2' size={24} />
            </GroupItemsOrder>
          </GroupItemsView>

        </ListIncluded>

        <Modal isVisible={isModalVisibleReuniao}>
          <ContainerModal>
            <HeaderModal>
              <TextTitleModal>Reuniões</TextTitleModal>
              <CloseModalReuniao onPress={() => toggleModal('reuniao')}>
                <TextTitleModal>X</TextTitleModal>
              </CloseModalReuniao>
            </HeaderModal>
          </ContainerModal>
        </Modal>

        <Modal isVisible={isModalVisibleFuncao}>
          <ContainerModal>
            <HeaderModal>
              <TextTitleModal>Função</TextTitleModal>
              <CloseModalFuncao onPress={() => toggleModal('funcao')}>
                <TextTitleModal>X</TextTitleModal>
              </CloseModalFuncao>
            </HeaderModal>
          </ContainerModal>
        </Modal>

        <Modal isVisible={isModalVisibleServo}>
          <ContainerModal>
            <HeaderModal>
              <TextTitleModal>Servos:</TextTitleModal>
              <CloseModalServo onPress={() => toggleModal('servo')}>
                <TextTitleModal>X</TextTitleModal>
              </CloseModalServo>
            </HeaderModal>
          </ContainerModal>
        </Modal>
      </ContainerPage>
    </Container>
  )
}

export default Escalas;