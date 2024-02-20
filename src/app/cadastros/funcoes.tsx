import React from 'react';
import { Alert } from 'react-native';
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

interface Props {
  setCloseModal: (value: boolean) => void;
}

const funcaoSchema = z.object({
  nome: z.string().min(3,'O nome do servo deve ter pelo menos 3 caracteres.')
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
            nome: ''
        },
    })

  function handleSave(data: TFuncao) {
    console.log(data)
    Alert.alert('Dizem que foi cadastrado com sucesso!');
    reset();
    setCloseModal(false);
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
            name="nome"
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
