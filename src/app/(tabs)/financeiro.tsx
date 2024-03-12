import React from 'react';
import { useWindowDimensions } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import Header from '../Header';

import { Container, ContainerPage, TitlePage } from '../styles/global';
import {
  GroupButtonHeader,
  ButtonNavigation,
  TextButtonNavigation,
  BlockResume,
  TextResumeTitle,
  TextResumePrice,
  BlockListView,
  BlockProduct,
  IconType,
  BlockProductText,
  GroupIncomeOutcome,
  TextTitleProduct,
  TextPriceProduct,
  TextSubTitleProduct,
} from '../styles/financeiro';
import theme from '../../theme';

export default function Financeiro() {
  const { height, width } = useWindowDimensions();
  function handleRoute(url: string) {
    router.replace(url);
  }

  return (
    <Container>
      <Header title="Financeiro" />

      <ContainerPage>
        <GroupButtonHeader>
          <ButtonNavigation onPress={() => handleRoute('../cadastros/lancamento')}>
            <TextButtonNavigation>+ Lançamento</TextButtonNavigation>
          </ButtonNavigation>
          <ButtonNavigation onPress={() => handleRoute('../listas/lancamentos')}>
            <TextButtonNavigation>Listar</TextButtonNavigation>
          </ButtonNavigation>
        </GroupButtonHeader>

        <BlockResume>
          <TextResumeTitle>Saldo atual</TextResumeTitle>
          <TextResumePrice>R$ 898,54</TextResumePrice>
        </BlockResume>

        <TitlePage>Últimos lançamentos:</TitlePage>
        <BlockListView>
          <BlockProduct width={width}>
            <BlockProductText>
              <TextTitleProduct>Produto X</TextTitleProduct>
              <TextPriceProduct>R$ 35,00</TextPriceProduct>
            </BlockProductText>
            <BlockProductText>
              <GroupIncomeOutcome>
                <IconType name="chevrons-up" size={20} />
                <TextSubTitleProduct>Entrada</TextSubTitleProduct>
              </GroupIncomeOutcome>
              <TextSubTitleProduct>01/01/2024</TextSubTitleProduct>
            </BlockProductText>
          </BlockProduct>

          <BlockProduct width={width}>
            <BlockProductText>
              <TextTitleProduct>Produto X</TextTitleProduct>
              <TextPriceProduct>R$ 35,00</TextPriceProduct>
            </BlockProductText>
            <BlockProductText>
              <GroupIncomeOutcome>
                <IconType name="chevrons-up" size={24} />
                <TextSubTitleProduct>Entrada</TextSubTitleProduct>
              </GroupIncomeOutcome>
              <TextSubTitleProduct>01/01/2024</TextSubTitleProduct>
            </BlockProductText>
          </BlockProduct>

          <BlockProduct width={width}>
            <BlockProductText>
              <TextTitleProduct>Produto X</TextTitleProduct>
              <TextPriceProduct>R$ 35,00</TextPriceProduct>
            </BlockProductText>
            <BlockProductText>
              <GroupIncomeOutcome>
                <IconType name="chevrons-up" size={24} />
                <TextSubTitleProduct>Entrada</TextSubTitleProduct>
              </GroupIncomeOutcome>
              <TextSubTitleProduct>01/01/2024</TextSubTitleProduct>
            </BlockProductText>
          </BlockProduct>

          <BlockProduct width={width}>
            <BlockProductText>
              <TextTitleProduct>Produto X</TextTitleProduct>
              <TextPriceProduct>- R$ 35,00</TextPriceProduct>
            </BlockProductText>
            <BlockProductText>
              <GroupIncomeOutcome>
                <IconType name="chevrons-down" size={24} />
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
