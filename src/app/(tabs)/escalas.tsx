import React from 'react';
import Header from '../Header';

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
  TextItem } from '../styles/escalas';

const Escalas: React.FC = () => {
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
            <BtnPlus name='plus-circle' size={40} />
          </GroupInput>

          <GroupInput>
            <InputForm 
              placeholder='Função'
              id='funcao'
            />
            <BtnPlus name='plus-circle' size={40} />
          </GroupInput>

          <GroupInput>
            <InputForm 
              placeholder='Servo'
              id='servo'
            />
            <BtnPlus name='plus-circle' size={40} />
          </GroupInput>

          <BtnSubmit>
            <TextBtnSubmit>Incluir</TextBtnSubmit>
          </BtnSubmit>
        </Form>

        <TitleItems>Incluidos para o dia 99/99/9999</TitleItems>
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
      </ContainerPage>
    </Container>
    )
}

export default Escalas;