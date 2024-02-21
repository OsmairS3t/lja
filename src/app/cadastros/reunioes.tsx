import React from 'react';
import { Alert } from 'react-native';
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

interface Props {
  setCloseModal: (value: boolean) => void;
}

const reuniaoSchema = z.object({
  nome: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres.'),
  tema: z.string().min(3, 'O tema deve ter no mínimo 3 caracteres.'),
  pregador: z.string().min(3, 'O nome do pregador deve ter no mínimo 3 caracteres.'),
  dia: z.string().min(10, 'Verifique se o dia está no formato correto dd/mm/aaaa'),
  inicio: z.string().min(5, 'Verifique se o horario de início está no formato correto hh:mm'),
  fim: z.string().min(5, 'Verifique se o horario de término está no formato correto hh:mm'),
})

type TReuniao = z.infer<typeof reuniaoSchema>

export default function Reunioes({ setCloseModal }: Props) {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<TReuniao>({
    resolver: zodResolver(reuniaoSchema)
  })
  function handleSave(data: TReuniao) {
    console.log(data)
    Alert.alert('Dizem que gravou com sucesso!')
    reset()
    setCloseModal(false);
  }

  return (
    <Form>
      <GroupInput size={100}>
        <Label>Nome:</Label>
        <Controller 
          control={control}
          rules={{ maxLength: 100 }}
          render={({ field: {onChange, onBlur, value} }) => (
            <Input 
              placeholder='Nome'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            )}
            name='nome'
        />
        {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
      </GroupInput>

      <GroupInput size={100}>
        <Label>Tema:</Label>
        <Controller 
          control={control}
          rules={{ maxLength: 100 }}
          render={({ field: {onChange, onBlur, value} }) => (
            <Input 
              placeholder='Tema'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            )}
            name='tema'
        />
        {errors.tema && <ErrorMessage>{errors.tema.message}</ErrorMessage>}
      </GroupInput>

      <GroupInput size={100}>
        <Label>Pregador:</Label>
        <Controller 
          control={control}
          rules={{ maxLength: 100 }}
          render={({ field: {onChange, onBlur, value} }) => (
            <Input 
              placeholder='Nome do pregador'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            )}
            name='pregador'
        />
        {errors.pregador && <ErrorMessage>{errors.pregador.message}</ErrorMessage>}
      </GroupInput>

      <GroupInput size={100}>
        <Label>Dia:</Label>
        <Controller 
          control={control}
          rules={{ maxLength: 100 }}
          render={({ field: {onChange, onBlur, value} }) => (
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
          name='dia'
        />
        {errors.dia && <ErrorMessage>{errors.dia.message}</ErrorMessage>}
      </GroupInput>

      <GroupInput size={100} direction='row'>
        <GroupInput size={40}>
          <Label>Inicio:</Label>
          <Controller 
          control={control}
          rules={{ maxLength: 100 }}
          render={({ field: {onChange, onBlur, value} }) => (
            <InputMask 
              type='datetime'
              options={{
                maskType: 'BRL',
                format: 'HH:mm',
              }}
              placeholder="HH:mm"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='phone-pad'
            />
            )}
            name='inicio'
        />
        {errors.inicio && <ErrorMessage>{errors.inicio.message}</ErrorMessage>}
        </GroupInput>

        <GroupInput size={40}>
          <Label>Fim:</Label>
          <Controller 
          control={control}
          rules={{ maxLength: 100 }}
          render={({ field: {onChange, onBlur, value} }) => (
            <InputMask 
              type='datetime'
              options={{
                maskType: 'BRL',
                format: 'HH:mm',
              }}
              placeholder="HH:mm"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='phone-pad'
            />
            )}
            name='fim'
        />
        {errors.fim && <ErrorMessage>{errors.fim.message}</ErrorMessage>}
        </GroupInput>
      </GroupInput>

      <GroupInput size={100}>
        <BtnSubmit onPress={handleSubmit(handleSave)}>
          <TextBtnSubmit>Salvar</TextBtnSubmit>
        </BtnSubmit>
      </GroupInput>
    </Form>
   )
}
