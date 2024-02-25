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
  color: ${({theme}) =>theme.COLORS.ICON_DEFAULT};
`

export const Title = styled.Text`
  width: fit-content;
  font-weight: bold;
  font-size: ${({theme}) =>theme.FONT_SIZE.LG}px;
  color: ${({theme}) =>theme.COLORS.TEXT_TITLE};
`;

export const Form = styled.View<Props>`
  padding: 14px;
  width: ${({ size }) => size}px;
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
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
  background-color: ${({theme}) =>theme.COLORS.BG_INPUT};
`;

export const GroupSwitch = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const TextLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
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

export const Select = styled(SelectDropdown).attrs(({ theme }) => ({
  buttonStyle: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    backgroundColor: theme.COLORS.BG_INPUT,
    borderColor: theme.COLORS.BORDER_INPUT,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
}))`
  height: 60px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
  font-size: 20px;
`;

export const ErrorMessage = styled.Text`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.COLORS.TEXT_ERROR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
