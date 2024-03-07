import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";
import SelectDropdown from "react-native-select-dropdown";

interface Props {
  direction ?: string;
  size: number;
}

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const GroupInput = styled.View<Props>`
  flex-direction: ${({ direction }) => direction === 'row' ? 'row' : 'column'};
  justify-content: space-between;
  width: ${({ size }) => size}%;
`;

export const Label = styled.Text`
  font-weight: 400;
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const Input = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.COLORS.TEXT_PLACEHOLDER,
}))`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const Select = styled(SelectDropdown).attrs(({theme}) => ({
  searchPlaceHolderColor: theme.COLORS.TEXT_DEFAULT,  
}))`
  height: 60px;
  padding: 14px;
  border: 1px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
`;

export const InputMask = styled(TextInputMask).attrs(({theme}) => ({
  placeholderTextColor: theme.COLORS.TEXT_PLACEHOLDER,
}))`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
`;

export const BtnSubmit = styled.Pressable`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 0px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.COLORS.BORDER_BUTTON};
  background-color: ${({ theme }) => theme.COLORS.BG_BUTTON};
`;

export const TextBtnSubmit = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const ErrorMessage = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.ERROR};
`;
