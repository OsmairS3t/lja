import React from 'react';
import { useWindowDimensions, Pressable } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { ContainerUserMenu, GroupItem, TextItem } from '../../style';

interface Props {
    onPressFunction: () => void;
}

export default function MenuUser({onPressFunction}: Props) {
    const {height, width} = useWindowDimensions()

    return (
        <ContainerUserMenu widthSize={width}>
            <TextItem>Osmair Moreira de Araujo</TextItem>
            <GroupItem>
            <Feather name='file-minus' size={24} />
            <TextItem>Dados Cadastrais</TextItem>
            </GroupItem>

            <GroupItem>
            <Feather name='book-open' size={24} />
            <TextItem>Anotações</TextItem>
            </GroupItem>

            <GroupItem>
            <Feather name='key' size={24} />
            <TextItem>Alterar Senha</TextItem>
            </GroupItem>

            <Pressable onPress={onPressFunction}>
                <GroupItem>
                <Feather name='log-out' size={24} />
                <TextItem>Sair</TextItem>
                </GroupItem>
            </Pressable>
        </ContainerUserMenu>
    )
}
