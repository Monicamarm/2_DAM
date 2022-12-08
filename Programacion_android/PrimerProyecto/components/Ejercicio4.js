import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


function ListScreen({ navigation }) {
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
          <Text style={{margin: 5, color:'black' }}>{item.name}</Text>
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

function FullListScreen({route}) {
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


function InfoScreen(navigation) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>El uso es muy sencillo</Text>
    </View>
  );
}

function ListStack() {
  return (
    <Stack.Navigator initialRouteName="lista">
      <Stack.Screen name="lista" component={ListScreen} />
      <Stack.Screen name="listacompleta" component={FullListScreen} options={{ title: 'Perfil' }} />
    </Stack.Navigator>
  );
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