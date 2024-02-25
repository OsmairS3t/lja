import React, { useState } from 'react';
import { Link } from 'expo-router';
import { useWindowDimensions, Switch } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Header from '../Header';
import { categorias } from '../../utils/database';

import { Container, ContainerPage, BtnSubmit, TextBtnSubmit } from '../styles/global';
import {
  GroupTitle,
  IconBack,
  Title,
  Form,
  GroupInput,
  GroupSwitch,
  TextLabel,
  Input,
  InputMask,
  Select,
  ErrorMessage
} from '../styles/cadlancamento'
import { Feather } from '@expo/vector-icons';

const lancamentoSchema = z.object({
  descricao: z.string().min(3, 'A descrição deve ter no mínimo 3 caracteres.'),
  valor: z.string(),
  datalancamento: z.string()
})

interface ILanca {
  descricao: string;
  valor: string;
  datalancamento: string;
}

export default function Lancamento() {
  const { height, width } = useWindowDimensions();
  const [categoria, setCategoria] = useState();
  const [isSaida, setIsSaida] = useState(false);
  const [tipo, setTipo] = useState('Entrada');
  const { handleSubmit, reset, control, formState: { errors } } = useForm<ILanca>({
    resolver: zodResolver(lancamentoSchema)
  })

  function toggleSwitch() {
    setIsSaida(!isSaida)
    tipo === 'Entrada' ? setTipo('Saida') : setTipo('Entrada')
  }

  function handleSave(formData: ILanca) {
    const data = {
      categoria,
      tipo,
      descricao: formData.descricao,
      valor: formData.valor,
      datalancamento: formData.datalancamento
    }
    reset()
    console.log(data)
  }

  return (
    <Container>
      <Header title='Financeiro' cor='#cccccc' />
      <ContainerPage>

        <GroupTitle>
          <Link href='../financeiro'>
            <IconBack name='arrow-left' size={24} />
          </Link>
          <Title>Incluir Lançamento</Title>
        </GroupTitle>

        <Form size={width}>
          <GroupInput size={100}>
            <Select
              data={categorias}
              onSelect={(selectedItem, index) => {
                setCategoria(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultButtonText="Categoria"
              dropdownIconPosition='right'
              renderDropdownIcon={() => (
                <Feather name="chevron-down" size={24} color="black" />
              )}
            />
          </GroupInput>

          <GroupSwitch>
            <Switch
              trackColor={{ false: '#001d3f', true: '#001d3f' }}
              thumbColor={isSaida ? '#ff2b2b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isSaida}
            />
            <TextLabel>{tipo}</TextLabel>
          </GroupSwitch>

          <GroupInput size={100}>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Descrição"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="descricao"
            />
            {errors.descricao && <ErrorMessage>{errors.descricao.message}</ErrorMessage>}
          </GroupInput>

          <GroupInput size={100}>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputMask
                  type='money'
                  options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: 'R$',
                    suffixUnit: ''
                  }}
                  placeholder="0.00"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType='numeric'
                />
              )}
              name="valor"
            />
            {errors.valor && <ErrorMessage>{errors.valor.message}</ErrorMessage>}
          </GroupInput>

          <GroupInput size={100}>
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
              name="datalancamento"
            />
            {errors.valor && <ErrorMessage>{errors.valor.message}</ErrorMessage>}
          </GroupInput>

          <BtnSubmit onPress={handleSubmit(handleSave)}>
            <TextBtnSubmit>Salvar</TextBtnSubmit>
          </BtnSubmit>
        </Form>

      </ContainerPage>
    </Container>
  )
}

