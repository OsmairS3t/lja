import styled from 'styled-components/native';

interface PropsMenu {
    widthSize: number;
}

export const ContainerLogin = styled.View`
    justify-content: center;
    align-items: center;
    background-color: #000000;
    width: fit-content;
    height: 100%;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: fit-content;
    background-color: #63768D; 
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
    color: #ffffff;
`;

export const InputItem = styled.TextInput`
    width: 100%;
    height: 60px;
    padding: 10px;
    font-size: 14px;
    border-radius: 10px;
    background-color: #E1E1E6;
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
    background-color: #63768D;
`;

export const GroupRegister = styled.View`
    margin-top: 14px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextRegister = styled.Text`
    color: #ffffff;
    font-size: 16px;
`;

export const TextBtn = styled.Text`
    font-size: 24px;
    color: #ffffff;
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
`;

export const BtnSubmit = styled.Pressable`
    margin-top: 14px;
    justify-content: center;
    align-items: center;
    background-color: #214153;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    height: 60px;
`;

export const TextBtnSubmit = styled.Text`
    font-weight: bold;
    font-size: 30px;
    color: #ffffff;
`;

// Styles of menu user
export const ContainerUserMenu = styled.View<PropsMenu>`
    width: ${({widthSize}) => widthSize}px;
    height: 320px;
    padding: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    background-color: #FFFFFF;
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
  color: #000000;
  font-size: 16px;
`;
