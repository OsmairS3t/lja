import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

interface Props {
  size: number;
}

interface PropsModal {
  size: number;
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
  font-weight: 500;
  font-size:  ${({ theme }) => theme.FONT_SIZE.MD}px;
  color:  ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const BlockListView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const BlockProduct = styled.View`
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 60px;
  padding: 8px;
  border-radius: 10px;
  margin-bottom: 10px;
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

export const TextTitleProduct = styled.Text`
  font-weight: 500;
  color:  ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const TextPriceProduct = styled.Text`
  font-weight: 500;
  color:  ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const TextSubTitleProduct = styled.Text`
  font-weight: 400;
  color:  ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const IconList = styled(Feather)`
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const ContainerModal = styled.View<PropsModal>`
  width: 100%;
  height: ${({ size }) => size}px;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.FG_APP};
`;

export const HeaderModal = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CloseModalFilter = styled.Pressable`
  padding: 5px;
  justify-content: 'center';
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.ERROR};
`;

export const TextCloseModal = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const TextTitleModal = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

