import React from 'react';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import Header from '../Header';

import { Container, ContainerPage, TitlePage } from '../styles/global';
import {
  TitleButton,
  BtnThin,
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
  TextSubTitleProduct,
} from '../styles/financeiro';

export default function Financeiro() {
  function handleRoute(url: string) {
    router.replace(url);
  }

  return (
    <Container>
      <Header title="Financeiro" cor="#cccccc" />
      <ContainerPage>
        <TitleButton>
          <BtnThin onPress={() => handleRoute('../cadastros/lancamento')}>
            <TextBtn>+ Lançamento</TextBtn>
          </BtnThin>
          <BtnThin onPress={() => handleRoute('../listas/lancamentos')}>
            <TextBtn>Listar</TextBtn>
          </BtnThin>
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
                <Feather name="chevrons-up" size={24} />
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
                <Feather name="chevrons-up" size={24} />
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
                <Feather name="chevrons-up" size={24} />
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
                <Feather name="chevrons-down" size={24} />
                <TextSubTitleProduct>Saída</TextSubTitleProduct>
              </GroupIncomeOutcome>
              <TextSubTitleProduct>01/01/2024</TextSubTitleProduct>
            </BlockProductText>
          </BlockProduct>
        </BlockListView>
      </ContainerPage>
    </Container>
  );
}
