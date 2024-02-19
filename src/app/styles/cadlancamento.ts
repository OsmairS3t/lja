import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

interface Props {
  size: number;
}

export const GroupTitle = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 70px;
  padding: 14px;
`;

export const IconBack = styled(Feather)``

export const Title = styled.Text`
  width: fit-content;
  font-size: 20px;
  font-weight: bold;
`;

export const Form = styled.View<Props>`
  width: ${({ size }) => size}px;
  padding: 14px;
`;

export const GroupInput = styled.View<Props>`
  flex-direction: row;
  justify-content: space-between;
  width: ${({ size }) => size}%;
`;

export const Input = styled.TextInput`
  background-color: ${({theme}) =>theme.COLORS.BG_INPUT};
  height: 60px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 14px;
`;



