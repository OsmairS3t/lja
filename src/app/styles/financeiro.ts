import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native'

export const TitleButton = styled.View`
  width: 100%;
  margin: 14px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.Pressable`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.BG_SUBMIT};
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 180px;
  `;

export const TextBtn = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.TEXT_BLOCK};
`;

export const BlockResume = styled.View`
    width: 380px;
    height: 115px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BG_SUBMIT};
`;

export const TextResumeTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT_BLOCK};
`;

export const TextResumePrice = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.TEXT_BLOCK};
`;

export const BlockListView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const BlockProduct = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BG_SCREEN};
  width: 380px;
  height: 70px;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 10px;
  flex-direction: column;
  justify-content: center;
`;

export const BlockProductText = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const GroupIncomeOutcome = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TextTitleProduct = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
`;

export const TextPriceProduct = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
`;

export const TextSubTitleProduct = styled.Text``;

