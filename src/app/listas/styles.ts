import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import styled from "styled-components/native";

interface PropsModal {
  heightSize: number;
}

export const GroupTitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0px;
`;

export const IconBack = styled(Feather)`
  color:  ${({ theme }) => theme.COLORS.ICON_DEFAULT};
`

export const IconFilter = styled(Feather)`
  color:  ${({ theme }) => theme.COLORS.ICON_DEFAULT};
`

export const Title = styled.Text`
  width: fit-content;
  font-weight: 400;
  font-size:  ${({ theme }) => theme.FONT_SIZE.MD}px;
  color:  ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const BlockListView = styled.ScrollView`
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

export const BlockProduct = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  margin: 4px 0px;
  background-color: ${({ theme }) => theme.COLORS.FG_APP};
`;

export const IconIncomeOutcome = styled(Feather)`
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const TextDateProduct = styled.Text`
  font-weight: 400;
  color:  ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const TextTitleProduct = styled.Text`
  flex: 1;
  font-weight: 400;
  color:  ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const TextPriceProduct = styled.Text`
  font-weight: 400;
  width: 20%;
  color:  ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const BlockScale = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  margin: 4px 0px;
  background-color: ${({ theme }) => theme.COLORS.FG_APP};
`;

export const TextMeeting = styled.Text`
  font-weight: 400;
  color:  ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const ContainerModal = styled.View<PropsModal>`
  width: 100%;
  height: ${({ heightSize }) => heightSize}px;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BG_MODAL};
`;

export const HeaderModal = styled.View`
  width: 100%;
  padding-left: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.BG_MODAL}; 
  background-color: ${({ theme }) => theme.COLORS.BG_APP}; 
`;

export const ButtonCloseModalFilter = styled(Pressable)`
  padding: 5px;
  justify-content: 'center';
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.BG_BTN_CLOSE};
`;

export const TextCloseModal = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const TextTitleModal = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

