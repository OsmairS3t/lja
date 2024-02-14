import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { Image } from 'react-native'

type Props = {
  colorBackground ?: string;
}

export const Container = styled.View<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ colorBackground }) => colorBackground};
`;

export const HeaderLogo = styled(Image)`
`;


export const HeaderTitle = styled.Text`
  font-size: 24px;
  color: #000000;
`;

export const HeaderSignOut = styled(MaterialIcons)`
`;

