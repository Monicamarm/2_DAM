import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View, Image, Switch } from 'react-native';
export default function App() {
    const [edad, setEdad] = useState(0);
    const [nombre, setNombre] = useState(null);
    const [apellidos, setApellidos] = useState(null);
    const [correo, setCorreo] = useState(null);
    const [sexo, setSexo] = useState(null);
    const [text, setText] = useState(null);
    
    /*function Texto(edad, correo) {
        const regex=/^[a-zA-Z]+$/;
        const reg =/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        
        if (!edad.match(regex) && !correo.match(reg)) {
            <View>
            <Text>Mi nombre es {nombre} con edad {edad} , y correo {correo}</Text>
            <Text> Sexo {sexo}</Text>
        </View>
          } else {
            
            setText('Eso no vale listillo')
            setColor('yellow')
          }
    }*/

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Nombre</Text>
                <TextInput
                    style={{
                        padding: 0,
                        height: 30,
                        width: 275,
                        borderColor: 'grey',
                        borderWidth: 1
                    }}
                    placeholder="Nombre"
                    onChangeText={nombre => setNombre(nombre)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Apellidos</Text>
                <TextInput
                    style={{
                        padding: 0,
                        height: 30,
                        width: 275,
                        borderColor: 'grey',
                        borderWidth: 1
                    }}
                    placeholder="Apellidos"
                    onChangeText={apellidos => setApellidos(apellidos)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Edad</Text>
                <TextInput
                    style={{
                        padding: 0,
                        height: 30,
                        width: 275,
                        borderColor: 'grey',
                        borderWidth: 1
                    }}
                    placeholder="Edad"
                    onChangeText={edad => setEdad(edad)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Correo</Text>
                <TextInput
                    style={{
                        padding: 0,
                        height: 30,
                        width: 275,
                        borderColor: 'grey',
                        borderWidth: 1
                    }}
                    placeholder="Correo"
                    onChangeText={correo => setCorreo(correo)}
                />
            </View>
            
            <View style={{ padding: 55 }}>
                <Button title='Enviar'
                    onPress={}
                />
            </View>
        </View>
    )
}