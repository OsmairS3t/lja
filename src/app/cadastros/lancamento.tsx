import React, { useState } from 'react';
import { Link } from 'expo-router';
import { useWindowDimensions, Switch, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Crypto from 'expo-crypto';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Header from '../Header';
import { categorias } from '../../utils/database';

import { Container, 
  ContainerPage, 
  BtnSubmit, 
  TextBtnSubmit, 
  GroupTitle, 
  IconBack, 
  Title } from '../styles/global';
import {
  ContainerForm,
  Form,
  GroupInput,
  GroupSwitch,
  SwTurnType,
  TextLabel,
  Input,
  Select,
  IconSelect,
  InputMask,
  ErrorMessage,
  GroupImage,
  GroupButton,
  TexttypeBalance,
  BtnImage,
  IconImage,
  ImgCapture,
  IconCamera,
  PhotoImage,  
} from '../styles/formularios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_ASYNCSTORAGE_LANCAMENTO } from '@env';
import { ILancamento } from '../../utils/interface';

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
  const [categoria, setCategoria] = useState('');
  const [isSaida, setIsSaida] = useState(false);
  const [tipo, setTipo] = useState('Entrada');
  const [imgComprove, setImgComprove] = useState<string>('../../assets/photo.png')
  const { handleSubmit, reset, control, formState: { errors } } = useForm<ILanca>({
    resolver: zodResolver(lancamentoSchema)
  })

  function toggleSwitch() {
    setIsSaida(!isSaida)
    tipo === 'Entrada' ? setTipo('Saida') : setTipo('Entrada')
  }

  const PickImageLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 4],
        quality: 1
    })
    // console.log(result)
    if (!result.canceled) {
        setImgComprove(result.assets[0].uri)
    }
  }

  const PickImageCamera = async () => {
    //LoadImage();
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync()
    if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your camera!");
        return;
    }
    const result = await ImagePicker.launchCameraAsync();
    console.log(result)
    if (!result.canceled) {
        setImgComprove(result.assets[0].uri);
        console.log(result.assets[0].uri);
    }
  }        

  async function handleSave(formData: ILanca) {
    const data = {
      id: Crypto.randomUUID(),
      categoria,
      tipo,
      descricao: formData.descricao,
      valor: formData.valor,
      datalancamento: formData.datalancamento,
      comprovante: imgComprove
    }
    try {
      const response = await AsyncStorage.getItem(KEY_ASYNCSTORAGE_LANCAMENTO)
      let lancamentos: ILancamento[] = response ? JSON.parse(response) : []
      lancamentos.push(data)
      await AsyncStorage.setItem(KEY_ASYNCSTORAGE_LANCAMENTO, JSON.stringify(lancamentos))
      console.log(lancamentos)
      Alert.alert('Lançamento incluído com sucesso!')
      reset()
    } catch (error) {
      console.log('Ocorreu um erro ao gravar: ', error)      
    }
  }
  
  return (
    <Container>
      <Header title='Financeiro' />
      <ContainerPage>

        <GroupTitle>
          <Link href='../financeiro'>
            <IconBack name='arrow-left' size={24} />
          </Link>
          <Title>Incluir Lançamento</Title>
        </GroupTitle>

        <ContainerForm>
          <Form>
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
                  <IconSelect name="chevron-down" size={24} />
                )}
              />
            </GroupInput>

            <GroupSwitch>
              <SwTurnType
                isSaida={isSaida}
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
                      unit: '',
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
            
            <GroupImage>
                <GroupButton>
                    <TexttypeBalance>Incluir Comprovante:</TexttypeBalance>
                    <BtnImage onPress={PickImageLibrary}>
                        <IconImage name='image' />
                    </BtnImage>
                    <BtnImage onPress={PickImageCamera}>
                        <IconCamera name='camera' />
                    </BtnImage>
                </GroupButton>
                <PhotoImage>
                    <ImgCapture source={{ uri: imgComprove }} />
                </PhotoImage>
            </GroupImage>

            <BtnSubmit onPress={handleSubmit(handleSave)}>
              <TextBtnSubmit>Salvar</TextBtnSubmit>
            </BtnSubmit>
          </Form>
        </ContainerForm>

      </ContainerPage>
    </Container>
  )
}

