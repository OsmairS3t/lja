import React from 'react';
import { Link } from 'expo-router';
import {Feather} from '@expo/vector-icons';
import { GroupTitle, Title } from '../styles/global';

interface Props {
    titlePage: string;
}

export default function HeaderPage({titlePage}: Props) {

    return (
      <GroupTitle>
        <Link href='../(tabs)/user'>
          <Feather name='arrow-left' color="#ffffff" size={24} />
        </Link>
        <Title>{titlePage}</Title>
      </GroupTitle>
    )
}
