import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";
import SelectDropdown from "react-native-select-dropdown";
import { Feather } from "@expo/vector-icons";

interface Props {
  direction ?: string;
  size: number;
}
interface SwitchProps {
  isSaida: boolean;
}

export const Form = styled.View`
  flex: 1;
  padding-top: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const GroupInput = styled.View<Props>`
  flex-direction: ${({ direction }) => direction === 'row' ? 'row' : 'column'};
  justify-content: space-between;
  width: ${({ size }) => size}%;
`;

export const GroupSwitch = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const SwTurnType = styled.Switch.attrs<SwitchProps>(({ theme, isSaida }) => ({
  trackColor: { false: theme.COLORS.SWITCH_FALSE, true: theme.COLORS.SWITCH_TRUE },
  thumbColor: isSaida ? theme.COLORS.SWITCH_TUMB_TRUE : theme.COLORS.SWITCH_TUMB_FALSE,
  ios_backgroundColor: theme.COLORS.SWITCH_IOS_BG,
}))``;


export const Label = styled.Text`
  font-weight: 400;
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const TextLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
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
  searchInputTxtColor: theme.COLORS.TEXT_INPUT,
  searchPlaceHolderColor: theme.COLORS.TEXT_INPUT,
  buttonTextStyle: {
    color: theme.COLORS.TEXT_INPUT,
  },
  buttonStyle: {
    width: '100%',
    color: theme.COLORS.TEXT_INPUT,
    backgroundColor: theme.COLORS.BG_INPUT,
  },
}))`
`;

export const IconSelect = styled(Feather)`
  color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
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
  color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
  border-color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
`;

export const BtnSubmit = styled.Pressable`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.COLORS.BORDER_BUTTON};
  background-color: ${({ theme }) => theme.COLORS.BG_BUTTON};
`;

export const TextBtnSubmit = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.TEXT_BUTTON};
`;

export const ErrorMessage = styled.Text`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.COLORS.ERROR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
