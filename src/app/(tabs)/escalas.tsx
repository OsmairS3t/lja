import React, { useEffect, useState } from 'react';
import { Pressable, View, Text, Alert, useWindowDimensions } from 'react-native';
import Modal from 'react-native-modal'
import Header from '../Header';
import { reunioes, funcoes, servos, escalas } from '../../utils/database'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';
import Reunioes from '../cadastros/reunioes';
import Funcoes from '../cadastros/funcoes';
import Servos from '../cadastros/servos';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { IEscala, IReuniao } from '../../utils/interface';
import { KEY_ASYNCSTORAGE_ESCALA, KEY_ASYNCSTORAGE_MEETING } from '@env'

import { Container, ContainerPage, TitlePage, BtnSubmit, TextBtnSubmit } from '../styles/global';
import {
  TitleHeader,
  BtnThin,
  TextBtn,
  Form,
  GroupInput,
  SelectForm,
  IconSelect,
  ListIncluded,
  IconList,
  IconDefault,
  TitleItems,
  ContainerEscala,
  GroupItemsView,
  GroupItemsText,
  GroupItemsOrder,
  GroupItemsListView,
  TextItem,
  ContainerModal,
  HeaderModal,
  CloseModalReuniao,
  CloseModalFuncao,
  CloseModalServo,
  TextTitleModal
} from '../styles/escalas';

const Escalas: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const [isModalVisibleReuniao, setIsModalVisibleReuniao] = useState(false);
  const [isModalVisibleFuncao, setIsModalVisibleFuncao] = useState(false);
  const [isModalVisibleServo, setIsModalVisibleServo] = useState(false);
  const [objReunioes, setObjReunioes] = useState<string[]>([]);
  const [objFuncoes, setObjFuncoes] = useState<string[]>([]);
  const [objServos, setObjServos] = useState<string[]>([]);
  const [listEscalas, setListEscalas] = useState<IEscala[]>(escalas)
  const [diaReuniao, setDiaReuniao] = useState('');
  const [funcao, setFuncao] = useState(0);
  const [servo, setServo] = useState(0);

  async function loadReunioes() {
    try {
      let arrReu: string[] = []
      const response = await AsyncStorage.getItem(KEY_ASYNCSTORAGE_MEETING)
      const meeting: IReuniao[] = response ? JSON.parse(response) : []
      meeting.map(meet => {
        arrReu.push(meet.dia)
      })
      setObjReunioes(arrReu)
    } catch (error) {
      console.log('Ocorreu um erro: ', error)      
    }
  }

  function loadFuncoes() {
    let arrFun: string[] = []
    funcoes.map(fun => {
      arrFun.push(fun.funcao)
    })
    setObjFuncoes(arrFun)
  }

  function loadServos() {
    let arrSer: string[] = []
    servos.map(ser => {
      arrSer.push(ser.nome)
    })
    setObjServos(arrSer)
  }

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

  function handleSave() {
    const data = {
      id: Crypto.randomUUID(),
      diareuniao: diaReuniao,
      ordem: 1,
      funcao: funcao,
      servo: servo,
    }
    console.log(data)
    // try {
    //   const jsonValue = JSON.stringify(data);
    //   await AsyncStorage.setItem(KEY_ASYNCSTORAGE_MEETING, jsonValue);
    // } catch (e) {
    //   console.log('Ocorreu um erro ao tentar salvar.')
    // }
  }

  useEffect(() => {
    loadReunioes()
    loadFuncoes()
    loadServos()
  }, [])

  return (
    <Container>
      <Header title='Escalas' />
      <ContainerPage>
        <TitleHeader>
          <TitlePage>Incluir escalas:</TitlePage>
          <BtnThin onPress={() => router.replace('../listas/escalas')}>
            <TextBtn>Listar</TextBtn>
          </BtnThin>
        </TitleHeader>

        <Form>
          <GroupInput>
            <SelectForm
              data={objReunioes}
              onSelect={(selectedItem: string, index) => {
                setDiaReuniao(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem: string, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item: string, index) => {
                return item
              }}
              defaultButtonText="Reuniao"
              dropdownIconPosition='right'
              renderDropdownIcon={() => (
                <IconSelect name="chevron-down" size={24} />
              )}
            />
            <Pressable onPress={() => toggleModal('reuniao')}>
              <IconDefault name='plus-circle' size={40} />
            </Pressable>
          </GroupInput>

          <GroupInput>
            <SelectForm
              data={objFuncoes}
              onSelect={(selectedItem, index) => {
                setFuncao(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText="Funcao"
              dropdownIconPosition='right'
              renderDropdownIcon={() => (
                <IconSelect name="chevron-down" size={24} />
              )}
            />
            <Pressable onPress={() => toggleModal('funcao')}>
              <IconDefault name='plus-circle' size={40} />
            </Pressable>
          </GroupInput>

          <GroupInput>
            <SelectForm
              data={objServos}
              onSelect={(selectedItem, index) => {
                setServo(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText="Servo"
              dropdownIconPosition='right'
              renderDropdownIcon={() => (
                <IconSelect name="chevron-down" size={24} />
              )}
            />
            <Pressable onPress={() => toggleModal('servo')}>
              <IconDefault name='plus-circle' size={40} />
            </Pressable>
          </GroupInput>

          <BtnSubmit onPress={handleSave}>
            <TextBtnSubmit>Incluir</TextBtnSubmit>
          </BtnSubmit>
        </Form>

        {diaReuniao !== '' &&
          <ContainerEscala>
            <GroupItemsListView>
              <TitleItems>Escala do dia {diaReuniao}</TitleItems>
              <Pressable onPress={() => Alert.alert('Gerar Imagem ne.. ufa')}>
                <IconDefault name='printer' size={24} />
              </Pressable>
            </GroupItemsListView>
            
            <ListIncluded>
              {
                listEscalas.map((escala) => (
                  <GroupItemsView key={escala.id}>
                    <GroupItemsText>
                      <TextItem>{escala.funcao}:</TextItem>
                      <TextItem>{escala.servo}</TextItem>
                    </GroupItemsText>
                    <GroupItemsOrder>
                      <Pressable onPress={() => Alert.alert('Pronto ecluido! #SQN')}>
                        <IconList name='trash-2' size={24} />
                      </Pressable>
                    </GroupItemsOrder>
                  </GroupItemsView>
                ))
              }
            </ListIncluded>
          </ContainerEscala>
        }

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