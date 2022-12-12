import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function ListScreen({ navigation }) {
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'ana',
        surname: 'mena',
        age: '23',
        sex: 'unicornio'
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'maria',
        surname: 'antonia',
        age: '68',
        sex: 'no binario'
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
        name: 'nacho',
        surname: 'guerrero',
        age: '37',
        sex: 'helicoptero de combate'
      }];
    const renderItem = ({ item }) => {
      return (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('listacompleta', { item })}>
            <Text style={{margin: 5}}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }