import { Feather } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import styled from 'styled-components/native'

interface PropsModal {
  size: number;
}
interface Props {
  height?: number;
}

export const TitleHeader = styled.View`
  width: 100%;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BtnThin = styled.Pressable`
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40%;
  background-color: ${({ theme }) => theme.COLORS.BG_BUTTON};
`;

export const TextBtn = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.TEXT_BUTTON};
`;

export const Form = styled.View`
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const GroupInput = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const SelectForm = styled(SelectDropdown).attrs(({ theme }) => ({
  buttonStyle: {
    width: '75%',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: theme.COLORS.BORDER_INPUT,
    backgroundColor: theme.COLORS.BG_INPUT,
  },
  buttonTextStyle: {
    color: theme.COLORS.TEXT_DEFAULT,
    fontWeight: '400',
  }
}))`
  height: 60px;
  padding: 14px;
  border: 1px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
`;

export const IconSelect = styled(Feather)`
  color: ${({ theme }) => theme.COLORS.ICON_DEFAULT};
`;

export const IconDefault = styled(Feather)`
  padding: 4px;
  color: ${({ theme }) => theme.COLORS.ICON_DEFAULT};
`;

export const IconList = styled(Feather)`
  color: ${({ theme }) => theme.COLORS.ICON_DEFAULT};
`;

export const ContainerEscala = styled.View<Props>`
  height: ${({height}) => height ? height : 350 }px;
`;

export const GroupItemsListView = styled.View`
  margin: 10px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListIncluded = styled.ScrollView`
  width: 100%;
  margin-bottom: 10px;
  padding: 0px 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.FG_APP};
`;

export const TitleItems = styled.Text`
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const GroupItemsView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-style: dashed;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
`;

export const GroupItemsText = styled.View`
  
`;

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

export const ContainerModal = styled.View<PropsModal>`
  width: '80%';
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

export const CloseModalReuniao = styled.Pressable`
  padding: 5px;
  justify-content: 'center';
  align-items: 'center';
`;

export const CloseModalFuncao = styled.Pressable`
  padding: 5px;
  justify-content: 'center';
  align-items: 'center';
`;

export const CloseModalServo = styled.Pressable`
  padding: 5px;
  justify-content: 'center';
  align-items: 'center';
`;

export const TextTitleModal = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

