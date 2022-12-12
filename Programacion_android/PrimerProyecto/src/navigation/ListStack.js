import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../containers/ListScreen';
import FullListScreen from '../containers/FullListScreen';

export default function ListStack() {
  const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator initialRouteName="lista">
        <Stack.Screen name="lista" component={ListScreen} />
        <Stack.Screen name="listacompleta" component={FullListScreen} options={{ title: 'Perfil' }} />
      </Stack.Navigator>
    );
  }
  