import { Feather } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";
import SelectDropdown from "react-native-select-dropdown";
import styled from "styled-components/native";

interface Props {
  size: number;
  direction?: string;
}

export const GroupTitle = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 70px;
  padding: 14px;
`;

export const IconBack = styled(Feather)`
  color: ${({theme}) =>theme.COLORS.TEXT_BLOCK};
`

export const Title = styled.Text`
  width: fit-content;
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) =>theme.COLORS.TEXT_BLOCK};
`;

export const Form = styled.View<Props>`
  width: ${({ size }) => size}px;
  padding: 14px;
`;

export const GroupInput = styled.View<Props>`
  flex-direction: ${({ direction }) => direction === 'row' ? 'row' : 'column'};
  justify-content: space-between;
  width: ${({ size }) => size}%;
`;

export const Input = styled.TextInput`
  height: 60px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
  background-color: ${({theme}) =>theme.COLORS.BG_INPUT};
`;

export const InputMask = styled(TextInputMask)`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  height: 60px;
  border: 1px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
`;

export const Select = styled(SelectDropdown)`
  height: 60px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
  font-size: 20px;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_ERROR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-bottom: 10px;
`;
