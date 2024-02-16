import React from 'react';
import { Link } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import Header from '../Header';

import { Container, ContainerPage, TitlePage } from '../../style';
import { TitleButton, 
  Btn, 
  TextBtn, 
  BlockResume, 
  TextResumeTitle, 
  TextResumePrice,
  BlockListView,
  BlockProduct,
  BlockProductText,
  GroupIncomeOutcome,
  TextTitleProduct,
  TextPriceProduct,
  TextSubTitleProduct } from '../styles/lounge'

const Lounge: React.FC = () => {

  return (
    <Container>
      <Header title='Lounge' cor='#cccccc' />
      <ContainerPage>
        <TitleButton>
          <Btn>
            <TextBtn>+ Lançamento</TextBtn>
          </Btn>
          <Btn>
            <TextBtn>Listar</TextBtn>
          </Btn>
        </TitleButton>

        <BlockResume>
          <TextResumeTitle>Saldo atual</TextResumeTitle>
          <TextResumePrice>R$ 898,54</TextResumePrice>
        </BlockResume>

        <TitlePage>Últimos lançamentos:</TitlePage>
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

          <BlockProduct>
            <BlockProductText>
              <TextTitleProduct>Produto X</TextTitleProduct>
              <TextPriceProduct>- R$ 35,00</TextPriceProduct>
            </BlockProductText>
            <BlockProductText>
              <GroupIncomeOutcome>
                <Feather name='chevrons-down' size={24} />
                <TextSubTitleProduct>Saída</TextSubTitleProduct>
              </GroupIncomeOutcome>
              <TextSubTitleProduct>01/01/2024</TextSubTitleProduct>
            </BlockProductText>
          </BlockProduct>

        </BlockListView>
      </ContainerPage>
    </Container>
    )

}

export default Lounge;