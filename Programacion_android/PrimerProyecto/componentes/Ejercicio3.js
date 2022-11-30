import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation, route }) {
    console.log(route);
    const {userName}=route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black' }}>Pantalla Principal</Text>
      <Button onPress={() => navigation.navigate("Ajustes",{userName:userName})} title="Pasar a Ajustes" />
      <Text style={{ color: 'black' }}>{userName}</Text>
    </View>
  );
}

function SettingsScreen({route}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black'}}>Pantalla de Ajustes</Text>
      <Text style={{ color: 'black' }}>{route.params.userName}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Ejercicio3() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{userName:"holys"}} options={{title:'Inicio', headerTitleAlign:'center'}}/>
        <Stack.Screen name="Ajustes" component={SettingsScreen} options={{title:'Mis Ajustes', headerTitleAlign:'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Ejercicio3;