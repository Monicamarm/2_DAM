import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black' }}>Pantalla Principal</Text>
      <Button onPress={() => navigation.navigate("Perfil",{name:'Antonio',age:'24'})} title="Pasar a Perfil" />
      <Button onPress={() => navigation.navigate("Ajustes")} title="Pasar a Ajustes" />
    </View>
  );
}

function ProfileScreen({ navigation,route}) {
  const {name,age}=route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black' }}>Pantalla de Perfil</Text>
      <Text style={{ color: 'black' }}>{name},{age}</Text>
      <Button onPress={() => navigation.navigate("Ajustes")} title="Pasar a Ajustes" />
    </View>
  );
}
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black' }}>Pantalla de Ajustes</Text>
      <Button onPress={() => navigation.navigate("Perfil")} title="Pasar a Perfil" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Ejercicio2() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Inicio'}}/>
        <Stack.Screen name="Perfil" component={ProfileScreen} options={{title:'Mi Perfil'}}/>
        <Stack.Screen name="Ajustes" component={SettingsScreen} options={{title:'Mis Ajustes'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Ejercicio2;