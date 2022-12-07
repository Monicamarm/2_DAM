import * as React from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


function ListScreen({navigation}) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'ana',
      surname: 'mena'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'maria',
      surname: 'antonia'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
      name: 'nacho',
      surname: 'guerrero'
    }];
  const renderItem = ({ item }) => (
    <View>
      <Button onPress={() => navigation.navigate("fullListScreen")} title={item.name}/>

    </View>
  )
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

function fullListScreen() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'ana',
      surname: 'mena',
      age:'23',
      sex:'Unicornio'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'maria',
      surname: 'antonia',
      age:'desconocida',
      sex:'hermafrodita'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
      name: 'nacho',
      surname: 'guerrero',
      age:'37',
      sex:'helicoptero de combate'
    }];
  const renderItem = ({ item }) => (
    <View>
      <View>
      <Text>{item.name}</Text>
      <Text>{item.surname}</Text>
      <Text>{item.age}</Text>
      <Text>{item.sex}</Text>
    </View>

    </View>
  )
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


function InfoScreen(navigation) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:'black'}}>El uso es muy sencillo</Text>
    </View>
  );
}

function ListStack() {
  <NavigationContainer>
      <Stack.Navigator initialRouteName="lista">
        <Stack.Screen name="lista" component={ListScreen} options={{title:'Inicio'}}/>
        <Stack.Screen name="lista_completa" component={fullListScreen} options={{title:'Mi Perfil'}}/>
      </Stack.Navigator>
    </NavigationContainer>
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Listado') {
              iconName = focused
                ? 'person'
                : 'person-outline';
            } else if (route.name === 'Info') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'pink',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Listado" component={ListStack} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}