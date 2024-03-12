import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native'

interface Props {
  width: number;
}

export const GroupButtonHeader = styled.View`
  width: 100%;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonNavigation = styled.Pressable`
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40%;
  background-color: ${({ theme }) => theme.COLORS.BG_BTN_NAV};
  `;

export const TextButtonNavigation = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.TEXT_BTN_NAV};
`;

export const BlockResume = styled.View`
    width: 250px;
    height: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BG_RESUME};
`;

export const TextResumeTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const TextResumePrice = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const BlockListView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const BlockProduct = styled.View<Props>`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.FG_APP};
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

export const IconType = styled(Feather)`
  color: ${({ theme }) => theme.COLORS.ICON_DEFAULT};
`;

export const TextTitleProduct = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const TextPriceProduct = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const TextSubTitleProduct = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

