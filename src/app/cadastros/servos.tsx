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
InputMask,
BtnSubmit, 
TextBtnSubmit,
ErrorMessage } from '../styles/formularios';
import { IServo } from '../../utils/interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_ASYNCSTORAGE_SERVO } from '@env';

interface Props {
  setCloseModal: (value: boolean) => void;
}

const servoSchema = z.object({
  nome: z.string().min(3,'O nome do servo deve ter pelo menos 3 caracteres.'),
  datanas: z
    .string()
    .min(10, 'Verifique se o formato de data está correto dd/mm/aaaa.')
})

type TServo = z.infer<typeof servoSchema>

export default function Servos({ setCloseModal }: Props) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm<TServo>({
        resolver: zodResolver(servoSchema),
        defaultValues: {
            nome: '',
            datanas: '',
        },
    })

  async function handleSave(data: TServo) {
    const dataInclude: IServo = {
      id: Crypto.randomUUID(),
      datanas: data.datanas,
      nome: data.nome
    }
    try {
      const response = await AsyncStorage.getItem(KEY_ASYNCSTORAGE_SERVO)
      let oldData: IServo[] = response ? JSON.parse(response) : []

      oldData.push(dataInclude)

      await AsyncStorage.setItem(KEY_ASYNCSTORAGE_SERVO, JSON.stringify(oldData))
      Alert.alert('Servo incluído com sucesso!')
      // console.log(oldData)
      reset();
      setCloseModal(false);
    } catch (error) {
      console.log('Ocorreu um erro ao tentar salvar: ', error)
    }
  }

  return (
    <Form>
      <GroupInput size={100}>
        <Label>Nome:</Label>
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
            name="nome"
        />
        {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
      </GroupInput>

      <GroupInput size={100}>
        <Label>Data de nascimento:</Label>
        <Controller
            control={control}
            rules={{
            maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputMask 
              type='datetime'
              options={{
                maskType: 'BRL',
                format: 'dd/mm/aaaa',
              }}
              placeholder="dd/mm/aaaa"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='phone-pad'
            />
            )}
            name="datanas"
        />
        {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
      </GroupInput>

      <GroupInput size={100}>
        <BtnSubmit onPress={handleSubmit(handleSave)}>
          <TextBtnSubmit>Salvar</TextBtnSubmit>
        </BtnSubmit>
      </GroupInput>
    </Form>
   )
}
