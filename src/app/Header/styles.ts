import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { Image } from 'react-native'

type Props = {
  colorBackground ?: string;
}

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 110px;
  padding-top: 40px;
  padding-bottom: 5px;
  padding-right: 10px;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.COLORS.FG_APP};
`;

export const GroupUser = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

export const GroupUserName = styled.View``;

export const PhotoUser = styled.Image``;

export const TextUser = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const HeaderLogo = styled(Image)``;


export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

export const HeaderSignOut = styled(MaterialIcons)`
`;
