import { useState } from 'react';
import { Header } from '../../components/Header';
import { Container } from './styles';
import { Highlight } from '../../components/Highlight';
import { GroupCard } from '../../components/GroupCard';
import {FlatList} from 'react-native'
import { ListEmpty } from '../../components/ListEmpty';
export default function Groups() {

const [groups, setGroups] = useState<string[]>(['Turma do Lolzin', 'colecionadores de muamba', 'colecionadores de desenhos','Trabalhadores da GUAPI'

])
  return (
    <Container>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='Jogue com sua Turma!'
      />
        <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({item}) => <GroupCard title={item} 
           
            />}
            ListEmptyComponent={()=> <ListEmpty message='Que tal cadastrar uma turma?' />}
        />
      
      
    </Container>
  );
}


