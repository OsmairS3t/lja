import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: fit-content;
`;

export const Logo = styled.View`
    margin-bottom: 10px;
    width: 150px;
    height: 150px;
    border: 1px solid gray;
    border-radius: 8px;
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
    margin-bottom: 5px;
    font-size: 14px;
`;

export const InputItem = styled.TextInput`
    width: 100%;
    height: 60px;
    border: 1px solid #eaeaea;
    padding: 10px;
    font-size: 14px;
`;

export const BtnSignIn = styled.Pressable`
    padding: 10px;
    width: 340px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-radius: 8px;
    border-color: #000044;
    background-color: #000066;
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