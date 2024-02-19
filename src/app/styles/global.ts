import styled from 'styled-components/native';

interface PropsMenu {
    widthSize: number;
}

export const ContainerLogin = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) =>theme.COLORS.BG_APP};
    width: fit-content;
    height: 100%;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: fit-content;
    background-color: ${({theme}) =>theme.COLORS.BG_APP2}; 
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
    font-size: 16px;
    color: ${({theme}) =>theme.COLORS.TEXT_BLOCK};
`;

export const InputItem = styled.TextInput`
    width: 100%;
    height: 60px;
    padding: 10px;
    font-size: 14px;
    border-radius: 10px;
    background-color: ${({theme}) =>theme.COLORS.BG_INPUT};
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
    background-color: ${({theme}) =>theme.COLORS.BG_SUBMIT};
`;

export const GroupRegister = styled.View`
    margin-top: 14px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextRegister = styled.Text`
    color: ${({theme}) =>theme.COLORS.TEXT_BLOCK};
    font-size: 16px;
`;

export const TextBtn = styled.Text`
    font-size: 24px;
    color: ${({theme}) =>theme.COLORS.TEXT_BLOCK};
`;

export const ContainerPage = styled.View`
    margin-top: 5px;
    margin-left: 14px;
    margin-right: 14px;
    flex: 1;
`;

export const TitlePage = styled.Text`
  width: fit-content;
  font-size: 20px;
  font-weight: bold;
  margin: 14px 0px;
  color: ${({ theme }) => theme.COLORS.TEXT_TITLE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const BtnSubmit = styled.Pressable`
    margin-top: 14px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) =>theme.COLORS.BG_SUBMIT};
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    height: 60px;
`;

export const TextBtnSubmit = styled.Text`
    font-weight: bold;
    font-size: 30px;
    color: ${({theme}) =>theme.COLORS.TEXT_BLOCK};
`;

// Styles of menu user
export const ContainerUserMenu = styled.View<PropsMenu>`
    width: ${({widthSize}) => widthSize}px;
    height: 320px;
    padding: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    background-color: ${({theme}) =>theme.COLORS.BG_SCREEN};
`;

export const GroupNameUser = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const GroupItem = styled.View`
    width: '100%';
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    gap: 10px;
`;

export const TextItem = styled.Text`
  color: ${({theme}) =>theme.COLORS.TEXT_DEFAULT};
  font-size: 16px;
`;

//styles of pages
export const GroupTitle = styled.View`
    width: 390px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 70px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: ${({theme}) =>theme.COLORS.TEXT_TITLE};
`;