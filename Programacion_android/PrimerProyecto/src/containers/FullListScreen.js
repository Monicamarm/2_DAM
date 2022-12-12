import * as React from 'react';
import { Text, View } from 'react-native';

export default function FullListScreen({route}) {
    const { item } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color:'black'}}>{item.name}</Text>
        <Text style={{ color:'black'}}>{item.surname}</Text>
        <Text style={{ color:'black'}}>{item.age}</Text>
        <Text style={{ color:'black'}}>{item.sex}</Text>
      </View>
    );
  }