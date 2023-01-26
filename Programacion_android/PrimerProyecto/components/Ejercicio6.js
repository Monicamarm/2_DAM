import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AnadirFrutaScreen from '../src/containers/AnadirFrutaScreen';
import MercadoScreen from '../src/containers/MercadoScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Mercado') {
              iconName = focused
                ? 'basket'
                : 'basket-outline';
            } else if (route.name === 'Frutas') {
              iconName = focused ? 'nutrition' : 'nutrition-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'pink',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Mercado" component={MercadoScreen} />
        <Tab.Screen name="Frutas" component={AnadirFrutaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}