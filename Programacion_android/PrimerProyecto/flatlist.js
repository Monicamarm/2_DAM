import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Primer elemento',
      nombre: 'Ana',
      edad: '2000'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Segundo elemento',
      nombre: 'Bernat',
      edad: '2001'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Tercero elemento',
      nombre: 'Carmen',
      edad: '2002'
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d32',
      title: 'Cuarto elemento',
      nombre: 'Daniel',
      edad: '2003'
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d27',
      title: 'Quinto elemento',
      nombre: 'Estefania',
      edad: '2004'
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d13',
      title: 'Sexto elemento',
      nombre: 'Fernando',
      edad: '2005'
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d702',
      title: 'Septimo elemento',
      nombre: 'Grace',
      edad: '2006'
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d207',
      title: 'Octavo elemento',
      nombre: 'hugo',
      edad: '2007'
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d720',
      title: 'Noveno elemento',
      nombre: 'Imma',
      edad: '2008'
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d721',
      title: 'Décimo elemento',
      nombre: '',
      edad: ''
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d722',
      title: 'Undecimo elemento',
      nombre: '',
      edad: ''
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d723',
      title: 'Duodecimo elemento',
      nombre: '',
      edad: ''
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d724',
      title: 'Decimotercero elemento',
      nombre: '',
      edad: ''
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d725',
      title: 'Decimocuarto elemento',
      nombre: '',
      edad: ''
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d726',
      title: 'Decimoquinto elemento',
      nombre: '',
      edad: ''
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d727',
      title: 'Decimosexto elemento',
      nombre: '',
      edad: ''
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d728',
      title: 'Decimoseptimo elemento',
      nombre: '',
      edad: ''
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d729',
      title: 'Decimooctavo elemento',
      nombre: '',
      edad: ''
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d712',
      title: 'Decimonoveno elemento',
      nombre: '',
      edad: ''
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d732',
      title: 'Vigesimo elemento',
      nombre: '',
      edad: ''
    }
  ];
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )

}