import Icon from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function App() {
    function ExampleView(props) {
        return <Icon name="ios-person" size={30} color="#4F8EF7" />;
      }

      
    /*/const [count, setCount] = useState(0);

    return (
        <View>
            <TouchableOpacity
                style={{ alignItems: 'center', backgroundColor: 'red', padding: 10 }}
                onPress={() => { setCount(count + 1) }}>
                <Text>Press here</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ alignItems: 'center', backgroundColor: 'blue', padding: 10 }}
                onPress={() => { setCount(count + 1) }}>
                <Text>Press here</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
        </View>
    )*/


}