import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface PropsMenu {
    widthSize: number;
}
interface PropsImg {
    imgFile: string;
}

//LOGIN
export const ContainerLogin = styled.View`
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 100%;
    background-color: ${({theme}) =>theme.COLORS.BG_APP};
`;

export const GroupCredit = styled.View`
    margin-top: 60px;
    justify-content: center;
    align-items: center;
`;

export const Credits = styled.Image`
    width: 20px;
    height: 20px;
`;

export const Logo = styled.Image`
    margin-bottom: 10px;
    width: 150px;
    height: 150px;
`;

export const Form = styled.View`
    margin-top: 20px;
    flex-direction: column;
`;

export const GroupInput = styled.View`
    margin: 16px auto;
    width: 340px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const LabelItem = styled.Text`
    margin-bottom: 10px;
    font-size: ${({theme}) =>theme.FONT_SIZE.MD}px;
    color: ${({theme}) =>theme.COLORS.TEXT_BLOCK};
`;

export const InputItem = styled.TextInput`
    width: 100%;
    height: 60px;
    padding: 10px;
    font-size: 14px;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${({theme}) =>theme.COLORS.BORDER_INPUT};
    background-color: ${({theme}) =>theme.COLORS.BG_INPUT};
    color: ${({theme}) =>theme.COLORS.TEXT_INPUT};
    font-size: ${({theme}) =>theme.FONT_SIZE.MD}px;
`;

export const BtnSignIn = styled.Pressable`
    padding: 10px;
    width: 340px;
    height: 70px;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-radius: 15px;
    background-color: ${({theme}) =>theme.COLORS.BG_BUTTON};
`;

export const GroupRegister = styled.View`
    margin-top: 14px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextRegister = styled.Text`
    color: ${({theme}) =>theme.COLORS.TEXT_DEFAULT};
    font-size: ${({theme}) =>theme.FONT_SIZE.MD}px;
`;

export const TextBtn = styled.Text`
    color: ${({theme}) =>theme.COLORS.TEXT_DEFAULT};
    font-size: ${({theme}) =>theme.FONT_SIZE.XL}px;
`;

//SCREENS
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) =>theme.COLORS.BG_APP}; 
`;

export const ContainerPage = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
`;

export const TitlePage = styled.Text`
  margin: 10px 0px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

//OTHERS
export const BtnSubmit = styled.Pressable`
    width: 330px;
    height: 50px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${({theme}) =>theme.COLORS.BORDER_BUTTON};
    background-color: ${({theme}) =>theme.COLORS.BG_BUTTON};
`;

export const TextBtnSubmit = styled.Text`
    font-weight: 500;
    font-size: ${({theme}) =>theme.FONT_SIZE.LG}px;
    color: ${({theme}) =>theme.COLORS.TEXT_BUTTON};
`;

// Styles of menu user
export const ContainerUserMenu = styled.View<PropsMenu>`
    width: ${({widthSize}) => widthSize}px;
    height: 320px;
    padding: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    background-color: ${({theme}) =>theme.COLORS.FG_APP};
`;

export const GroupNameUser = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const GroupItem = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    gap: 10px;
`;

export const IconMenu = styled(Feather)`
    color: ${({ theme }) => theme.COLORS.ICON_DEFAULT};
`;

export const TextItem = styled.Text`
  color: ${({theme}) =>theme.COLORS.TEXT_DEFAULT};
  font-size: ${({theme}) =>theme.FONT_SIZE.MD}px;
`;

export const TextLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
`;

//styles of pages
// export const GroupTitle = styled.View`
//     width: 390px;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: center;
//     gap: 70px;
// `;

// export const Title = styled.Text`
//     color: ${({theme}) =>theme.COLORS.TEXT_DEFAULT};
//     font-size: ${({theme}) =>theme.FONT_SIZE.LG}px;
// `;
