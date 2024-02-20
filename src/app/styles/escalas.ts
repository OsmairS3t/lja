import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native'

export const Form = styled.View`
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const GroupInput = styled.View`
  width: fit-content;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const InputForm = styled.TextInput`
  width: 320px;
  height: 60px;
  padding: 14px;
  border: 1px;
  border-color: #29292E;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
  font-size: 20px;
`;

export const BtnPlus = styled(Feather)`
  color: ${({ theme }) => theme.COLORS.ICON_DEFAULT};
`;

export const BtnMinus = styled(Feather)``;

export const ListIncluded = styled.ScrollView`
  margin-top: 10px;
  padding: 0px 10px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BG_SCREEN};
`;

export const TitleItems = styled.Text`
  margin-top: 14px;
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.TEXT_TITLE};
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
`;

export const ContainerModal = styled.View`
  width: '80%';
  height: 500px;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BG_SCREEN};
`;

export const HeaderModal = styled.View`
  width: 350px;
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
  color: ${({ theme }) => theme.COLORS.TEXT_SCREEN};
`;

