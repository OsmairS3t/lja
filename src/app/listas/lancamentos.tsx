import React from 'react';
import { Link } from 'expo-router';
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
  TextSubTitleProduct } from './styles'
import { Feather } from '@expo/vector-icons';

export default function Lancamentos() {

  return (
    <Container>
      <Header title='Financeiro' cor='#cccccc' />
      <ContainerPage>
        
        <GroupTitle>
          <Link href='../financeiro'>
            <IconBack name='arrow-left' size={24} />
          </Link>
          <Title>Listar Lançamentos</Title>
          <IconFilter name='sliders' size={24} />
        </GroupTitle>

        <BlockListView>
          <BlockProduct>
            <BlockProductText>
              <TextTitleProduct>Produto X</TextTitleProduct>
              <TextPriceProduct>R$ 35,00</TextPriceProduct>
            </BlockProductText>
            <BlockProductText>
              <GroupIncomeOutcome>
                <Feather name='chevrons-up' size={24} />
                <TextSubTitleProduct>Entrada</TextSubTitleProduct>
              </GroupIncomeOutcome>
              <TextSubTitleProduct>01/01/2024</TextSubTitleProduct>
            </BlockProductText>
          </BlockProduct>
        </BlockListView>

      </ContainerPage>
    </Container>
    )
}

