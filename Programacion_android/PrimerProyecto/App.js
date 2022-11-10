import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View, Image, Switch } from 'react-native';
export default function App() {
    const [edad, setEdad] = useState(0);
    const [nombre, setNombre] = useState(null);
    const [apellidos, setApellidos] = useState(null);
    const [correo, setCorreo] = useState(null);
    const [sexo, setSexo] = useState(null);
    const [text, setText] = useState(null);
    const [isEnabled, setIsEnabled] = useState(false)


    function Texto(edad, correo) {
        const regex = /^[a-zA-Z]+$/;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (!edad.match(regex) && !correo.text === true && Object.keys(edad).length != 0 && Object.keys(correo).length != 0) {
            setText('Mi nombre es ' + nombre + ' con edad ' + edad + ' , y correo ' + correo + ' Sexo ' + sexo);

        } else {
            setText('Edad o correo invalidos')
        }

    }

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Nombre: </Text>
                <TextInput
                    style={{
                        marginLeft:25,
                        padding: 0,
                        height: 30,
                        width: 275,
                        borderColor: 'grey',
                        borderWidth: 1
                    }}
                    placeholder=" Nombre"
                    onChangeText={nombre => setNombre(nombre)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Apellidos: </Text>
                <TextInput
                    style={{
                        marginLeft:16,
                        padding: 0,
                        height: 30,
                        width: 275,
                        borderColor: 'grey',
                        borderWidth: 1
                    }}
                    placeholder=" Apellidos"
                    onChangeText={apellidos => setApellidos(apellidos)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Edad: </Text>
                <TextInput
                    style={{
                        marginLeft:48,
                        padding: 0,
                        height: 30,
                        width: 275,
                        borderColor: 'grey',
                        borderWidth: 1
                    }}
                    placeholder=" Edad"
                    onChangeText={edad => setEdad(edad)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Correo: </Text>
                <TextInput
                    style={{
                        marginLeft:35,
                        padding: 0,
                        height: 30,
                        width: 275,
                        borderColor: 'grey',
                        borderWidth: 1
                    }}
                    placeholder=" Correo"
                    onChangeText={correo => setCorreo(correo)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Sexo: </Text>
                <Switch
                    trackColor={{ false: 'aqua', true: 'pink' }}
                    thumbColor={isEnabled ? 'aqua' : 'pink'}
                    onValueChange={() => setIsEnabled(previousState => !previousState)}
                    value={isEnabled}
                />
                {isEnabled ? <Text style={{ alignItems: 'center' }}>  Masculino</Text> : <Text style={{ alignItems: 'center' }}>  Femenino</Text>}
           </View>
            <View style={{ padding: 55 }}>
                <Button title='Enviar'
                    onPress={() => { Texto(edad, correo) }}
                    />
            </View>
            <Text style={{ alignItems: 'center', borderRadius:15 }}>{text}</Text>
            <View>
                < Image
                    style={{
                        height: 350,
                        width: 450,
                        alignItems: 'center'
                    }}
                    source={{
                        uri: 'https://i.pinimg.com/600x315/2f/57/b5/2f57b5ef82d8024b39beec08a15f5a0d.jpg'
                    }}
                    />
            </View>
        </View>
    )
}
// if (isEnabled) {
//     setSexo=('Masculino')
// }else{
//     setSexo=('Femenino')
// }