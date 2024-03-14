import React from 'react';
import { Alert } from 'react-native';
import * as Crypto from 'expo-crypto';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Form,
GroupInput,
Label,
Input,
BtnSubmit, 
TextBtnSubmit,
ErrorMessage } from '../styles/formularios';
import { IFuncao } from '../../utils/interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_ASYNCSTORAGE_FUNCAO } from '@env';

interface Props {
  setCloseModal: (value: boolean) => void;
}

const funcaoSchema = z.object({
  funcao: z.string().min(3,'O nome do servo deve ter pelo menos 3 caracteres.')
})

type TFuncao = z.infer<typeof funcaoSchema>

export default function Funcoes({ setCloseModal }: Props) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm<TFuncao>({
        resolver: zodResolver(funcaoSchema),
        defaultValues: {
            funcao: ''
        },
    })

  async function handleSave(data: TFuncao) {
    const dataInclude: IFuncao = {
      id: Crypto.randomUUID(),
      funcao: data.funcao,
    }
    try {
      const response = await AsyncStorage.getItem(KEY_ASYNCSTORAGE_FUNCAO)
      let oldData: IFuncao[] = response ? JSON.parse(response) : []

      oldData.push(dataInclude)

      await AsyncStorage.setItem(KEY_ASYNCSTORAGE_FUNCAO, JSON.stringify(oldData))
      Alert.alert('Função incluída com sucesso!')
      reset();
      setCloseModal(false);
    } catch (error) {
      console.log('Ocorreu um erro ao tentar salvar: ', error)
    }
  }
  return (
    <Form>
      <GroupInput size={100}>
        <Label>Nome da função:</Label>
        <Controller
            control={control}
            rules={{
            maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <Input
                placeholder="Nome"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
            )}
            name="funcao"
        />
        {errors.funcao && <ErrorMessage>{errors.funcao.message}</ErrorMessage>}
      </GroupInput>

      <GroupInput size={100}>
        <BtnSubmit onPress={handleSubmit(handleSave)}>
          <TextBtnSubmit>Salvar</TextBtnSubmit>
        </BtnSubmit>
      </GroupInput>
    </Form>
   )
}
