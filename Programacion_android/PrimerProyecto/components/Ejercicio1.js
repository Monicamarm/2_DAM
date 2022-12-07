import React, { Component } from 'react';
import { View, Text, FlatList,Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name:'ana',
      surname:'mena',
      phone:'159634872',
      icon:<MaterialCommunityIcons name="vimeo" size={30} color="pink" />
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name:'maria',
      surname:'antonia',
      phone:'369852147',
      icon:<MaterialCommunityIcons name="account-box" size={30} color="red" />
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name:'bernat',
      surname:'costa',
      phone:'147852369',
      icon:<MaterialCommunityIcons name="account-circle" size={30} color="aqua" />
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d32',
      name:'goyo',
      surname:'maldito',
      phone:'258369147',
      icon:<MaterialCommunityIcons name="account-injury" size={30} color="yellowgreen" />
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d27',
      name:'nacho',
      surname:'miguel',
      phone:'258147963',
      icon:<MaterialCommunityIcons name="account-voice" size={30} color="white" />
    }
  ];
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.surname}</Text>
      <Text>{item.phone}</Text>
      <Text>{item.icon}</Text>
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