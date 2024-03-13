import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';
import Modal from 'react-native-modal';
import Header from '../Header';
import { KEY_ASYNCSTORAGE_ESCALA } from '@env';

import { Container, ContainerPage } from '../styles/global';
import {
  GroupTitle,
  IconBack,
  IconFilter,
  Title,
  BlockListView,
  BlockScale,
  IconLook,
  TextMeeting,
  ContainerModal,
  HeaderModal,
  TextTitleModal,
  TextCloseModal,
  ButtonCloseModalFilter
} from './styles'
import { Pressable } from 'react-native';
import { IEscala } from '../../utils/interface';
import { BtnSubmit, GroupInput, InputMask, Label, TextBtnSubmit } from '../styles/formularios';

export default function ListEscalas() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [filteredDay, setFilteredDay] = useState('')
  const [escalas, setEscalas] = useState<IEscala[]>([])

  async function loadEscalas(dia: string) {
    try {
      const response = await AsyncStorage.getItem(KEY_ASYNCSTORAGE_ESCALA)
      const scales: IEscala[] = response ? JSON.parse(response) : []
      // const list = scales.reduce((acumulator, scale) => {
      //   if(!acumulator[scale.diareuniao]) {
      //     acumulator[scale.diareuniao] = []
      //   }
      //   return acumulator
      // })
      if (dia === '') {
        setEscalas(scales)
      } else {
        setEscalas(scales.filter(sc => sc.diareuniao === dia))
      }
    } catch (error) {
      console.log('Ocorreu um erro ao tentar carregar: ', error)
    }
  }

  function handleFilter() {
    toggleModal()
    loadEscalas(filteredDay)
  }

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }

  useEffect(() => {
    loadEscalas('')
  },[])

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
        {
          escalas.map( escala => (
              <BlockScale key={escala.id}>
                <TextMeeting>{escala.diareuniao}</TextMeeting>
                <IconLook name='trash-2' size={18} />
              </BlockScale>
          ))
        }
        </BlockListView>

        <Modal isVisible={isModalVisible}>
          <HeaderModal>
            <TextTitleModal>Filtrar</TextTitleModal>
            <ButtonCloseModalFilter onPress={toggleModal}>
              <TextCloseModal>X</TextCloseModal>
            </ButtonCloseModalFilter>
          </HeaderModal>

          <ContainerModal heightSize={250}>
            <GroupInput size={100}>
            <Label>Dia da escala:</Label>
              <InputMask
                type='datetime'
                options={{
                  maskType: 'BRL',
                  format: 'dd/mm/aaaa',
                }}
                placeholder="dd/mm/aaaa"
                onChangeText={setFilteredDay}
                value={filteredDay}
                keyboardType='phone-pad'
              />
            </GroupInput>

            <BtnSubmit onPress={handleFilter}>
              <TextBtnSubmit>Filtrar</TextBtnSubmit>
            </BtnSubmit>
          </ContainerModal>
        </Modal>

      </ContainerPage>
    </Container>
  )
}

