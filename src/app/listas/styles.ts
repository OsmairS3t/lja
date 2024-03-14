import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import styled from "styled-components/native";

interface PropsModal {
  heightSize: number;
}
interface Props {
  height?: number;
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

export const IconDefault = styled(Feather)`
  padding: 4px;
  color: ${({ theme }) => theme.COLORS.ICON_DEFAULT};
`;

export const IconList = styled(Feather)`
  color: ${({ theme }) => theme.COLORS.ICON_DEFAULT};
`;

export const IconFilter = styled(Feather)`
  color:  ${({ theme }) => theme.COLORS.ICON_DEFAULT};
`

export const IconLook = styled(Feather)`
  color:  ${({ theme }) => theme.COLORS.ICON_DEFAULT};
`

export const Title = styled.Text`
  width: fit-content;
  font-weight: 400;
  font-size:  ${({ theme }) => theme.FONT_SIZE.MD}px;
  color:  ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const ContainerEscala = styled.View`
  height: 90%;
`;

export const GroupItemsListView = styled.View`
  margin: 10px 0px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GroupItemsView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-style: dotted;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
`;

export const ListIncluded = styled.ScrollView`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.FG_APP};
`;

export const TitleItems = styled.Text`
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const GroupItemsText = styled.View``;

export const GroupItemsOrder = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const IconOrder = styled(Feather)``;

export const TextItem = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 2px 0px;
  background-color: ${({ theme }) => theme.COLORS.FG_APP};
`;

export const TextMeeting = styled.Text`
  font-weight: 400;
  color:  ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const ContainerModal = styled.View<PropsModal>`
  width: 100%;
  padding: 10px;
  height: ${({ heightSize }) => heightSize}px;
  justify-content: space-between;
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

