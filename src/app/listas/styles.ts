import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

interface Props {
  size: number;
}

export const GroupTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0px;
`;

export const IconBack = styled(Feather)``

export const IconFilter = styled(Feather)``

export const Title = styled.Text`
  width: fit-content;
  font-size: 20px;
  font-weight: bold;
`;

export const BlockListView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const BlockProduct = styled.View`
  background-color: #ffffff;
  width: 380px;
  padding: 8px;
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
  font-size: 20px;
  font-weight: bold;
`;

export const TextPriceProduct = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const TextSubTitleProduct = styled.Text``;
