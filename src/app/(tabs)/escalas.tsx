import React, { useEffect, useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import Modal from 'react-native-modal'
import Header from '../Header';
import { reunioes, funcoes, servos, escalas } from '../../utils/database'

import { Container, ContainerPage, TitlePage, BtnSubmit, TextBtnSubmit } from '../styles/global';
import {
  Form,
  GroupInput,
  InputForm,
  SelectForm,
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
import Reunioes from '../cadastros/reunioes';
import Funcoes from '../cadastros/funcoes';
import Servos from '../cadastros/servos';
import { Feather } from '@expo/vector-icons';

const Escalas: React.FC = () => {
  const [isModalVisibleReuniao, setIsModalVisibleReuniao] = useState(false);
  const [isModalVisibleFuncao, setIsModalVisibleFuncao] = useState(false);
  const [isModalVisibleServo, setIsModalVisibleServo] = useState(false);
  const [diasReunioes, setDiasReunioes] = useState<string[]>([])
  const [diaReuniao, setDiaReuniao] = useState(0)
  
  function loadReunioes() {
    reunioes.map(reun => {
      setDiasReunioes([...diasReunioes, reun.dia])
    })
  }

  useEffect(() => {
    loadReunioes()
  },[])

  function toggleModal(screen: string) {
    if (screen === 'reuniao') {
      setIsModalVisibleReuniao(!isModalVisibleReuniao);
    }
    if (screen === 'funcao') {
      setIsModalVisibleFuncao(!isModalVisibleFuncao);
    }
    if (screen === 'servo') {
      setIsModalVisibleServo(!isModalVisibleServo);
    }
  };

  return (
    <Container>
      <Header title='Escalas' cor='#cccccc' />
      <ContainerPage>
        <TitlePage>Escalas</TitlePage>

        <Form>
          <GroupInput>
            <SelectForm
              data={diasReunioes}
              onSelect={(selectedItem, index) => {
                setDiaReuniao(index + 1)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                  return item
              }}
              defaultButtonText="Reuniao"
              dropdownIconPosition='right'
              renderDropdownIcon={() => (
                  <Feather name="chevron-down" size={24} color="black" />
              )}
              buttonStyle={{
                  width: 320,
                  borderRadius: 10,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
              }}
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
          <ContainerModal size={630}>
            <HeaderModal>
              <TextTitleModal>Reuniões</TextTitleModal>
              <CloseModalReuniao onPress={() => toggleModal('reuniao')}>
                <TextTitleModal>X</TextTitleModal>
              </CloseModalReuniao>
            </HeaderModal>

            <Reunioes setCloseModal={setIsModalVisibleReuniao} />

          </ContainerModal>
        </Modal>

        <Modal isVisible={isModalVisibleFuncao}>
          <ContainerModal size={250}>
            <HeaderModal>
              <TextTitleModal>Função</TextTitleModal>
              <CloseModalFuncao onPress={() => toggleModal('funcao')}>
                <TextTitleModal>X</TextTitleModal>
              </CloseModalFuncao>
            </HeaderModal>

            <Funcoes setCloseModal={setIsModalVisibleFuncao} />

          </ContainerModal>
        </Modal>

        <Modal isVisible={isModalVisibleServo}>
          <ContainerModal size={370}>
            <HeaderModal>
              <TextTitleModal>Servos:</TextTitleModal>
              <CloseModalServo onPress={() => toggleModal('servo')}>
                <TextTitleModal>X</TextTitleModal>
              </CloseModalServo>
            </HeaderModal>

            <Servos setCloseModal={setIsModalVisibleServo} />

          </ContainerModal>
        </Modal>
      </ContainerPage>
    </Container>
  )
}

export default Escalas;