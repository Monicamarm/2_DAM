import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View, Image, Switch, TouchableOpacity } from 'react-native';
import { Boton } from './Boton';

export default function App() {
    const [edad, setEdad] = useState('');
    const [nombre, setNombre] = useState('null');
    const [apellidos, setApellidos] = useState('null');
    const [correo, setCorreo] = useState('null');
    const [text, setText] = useState(' ');
    const [isEnabled, setIsEnabled] = useState(false)
    const [Escondido, setEscondido] = useState(false)



    function Texto(edad, correo) {
        const regex = /^[0-9]*$/;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        const regN = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

        if (edad.match(regex) && correo.match(reg) && !edad == '' && nombre.match(regN) && apellidos.match(regN)) {
            setText('Mi nombre es ' + nombre + ' con edad ' + edad + ' , y correo ' + correo + ' Sexo ' + (isEnabled ? 'Masculino' : 'Femenino'));
            setEscondido(true);
        } else {
            setText(' ')
            alert('Campos invalidos')
        }

    }

    return (
        <View style={{ flex: 1, backgroundColor: '#e0b0ff' }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 50, marginBottom:35 }}>Formulario</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 18,marginBottom:15 }}>Nombre: </Text>
                <TextInput
                    style={{
                        marginLeft: 25,
                        padding: 0,
                        height: 32,
                        width: 275,
                        borderColor: '#d3d3d3',
                        borderWidth: 1,
                        fontSize: 18

                    }}
                    placeholder=" Nombre"
                    onChangeText={nombre => setNombre(nombre)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 18,marginBottom:15 }}>Apellidos: </Text>
                <TextInput
                    style={{
                        marginLeft: 13.5,
                        padding: 0,
                        height: 32,
                        width: 275,
                        borderColor: '#d3d3d3',
                        borderWidth: 1,
                        fontSize: 18
                    }}
                    placeholder=" Apellidos"
                    onChangeText={apellidos => setApellidos(apellidos)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>

                <Text style={{ color: 'white', fontSize: 18,marginBottom:15 }}>Edad: </Text>
                <TextInput
                    style={{
                        marginLeft: 54.4,
                        padding: 0,
                        height: 32,
                        width: 275,
                        borderColor: '#d3d3d3',
                        borderWidth: 1,
                        fontSize: 18
                    }}
                    placeholder=" Edad"
                    onChangeText={edad => setEdad(edad)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 18 ,marginBottom:15}}>Correo: </Text>
                <TextInput
                    style={{
                        marginLeft: 37,
                        padding: 0,
                        height: 32,
                        width: 275,
                        borderColor: '#d3d3d3',
                        borderWidth: 1,
                        fontSize: 18
                    }}
                    placeholder=" Correo"
                    onChangeText={correo => setCorreo(correo)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{
                    marginTop: 5,
                    fontSize: 18,
                    color: 'white'
                }}>Sexo: </Text>
                <Switch style={{
                    marginLeft: 45,
                    marginTop: 5,
                }}
                    trackColor={{ false: 'aqua', true: 'pink' }}
                    thumbColor={isEnabled ? 'aqua' : 'pink'}
                    onValueChange={() => setIsEnabled(previousState => !previousState)}
                    value={isEnabled}
                />
                {isEnabled ? <Text style={{ alignItems: 'center', marginTop: 5, color: 'white', fontSize: 18 }}>  Masculino</Text> : <Text style={{ alignItems: 'center', marginTop: 5, color: 'white', fontSize: 18 }}>  Femenino</Text>}
            </View>
            <View >

            </View>
            <Boton onPress={() => { Texto(edad, correo) }} />
            <View>

                <Text style={{ alignItems: 'center' }}>{text}</Text>
                {
                    !Escondido
                        ? null
                          :
                          (isEnabled?<Image style={{
                            height: 434,
                            width: 415
                            }}
                            source={ require('./monop.jpg') }
                          />:<Image style={{
                            height: 450,
                            width: 415
                            }}
                            source={require('./mono.jpg')} />)
                          
                        }


            </View>


        </View>
    )

}