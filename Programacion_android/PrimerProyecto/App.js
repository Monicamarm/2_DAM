import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View, Image, Switch } from 'react-native';
export default function App() {
    const [edad, setEdad] = useState('');
    const [nombre, setNombre] = useState('null');
    const [apellidos, setApellidos] = useState('null');
    const [correo, setCorreo] = useState('null');
    const [text, setText] = useState(' ');
    const [isEnabled, setIsEnabled] = useState(false)
    const [Escondido, setEscondido] = useState(false)
    const [validateNumber,setvalidateNumber]=useState(false);


    function Texto(edad, correo) {
        const regex = /^[0-9]*$/;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        const regN = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

        if (edad.match(regex) && correo.match(reg) && !edad=='' && nombre.match(regN) && apellidos.match(regN))  {
            setText('Mi nombre es ' + nombre + ' con edad ' + edad + ' , y correo ' + correo + ' Sexo ' + (isEnabled?'Masculino':'Femenino'));
            setEscondido(true);
        } else {
            setText(' ')
            alert('Campos invalidos')
        }

    }

    return (
        <View style={{color:'White'}}>
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
            <TextInput style={validateNumber ?{borderWidth:2,height:40,borderColor: 'green'}:{borderWidth:2,height:40,borderColor: 'red'}} placeholder='Edad'

onChangeText={edad => validarEdad(edad)} />
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
                <Text style={{
                        marginTop:5
                    }}>Sexo: </Text>
                <Switch style={{
                        marginLeft:45,
                        marginTop:5
                    }}
                    trackColor={{ false: 'aqua', true: 'pink' }}
                    thumbColor={isEnabled ? 'aqua' : 'pink'}
                    onValueChange={() => setIsEnabled(previousState => !previousState)}
                    value={isEnabled}
                />
                {isEnabled ? <Text style={{ alignItems: 'center',marginTop:5 }}>  Masculino</Text> : <Text style={{ alignItems: 'center',marginTop:5 }}>  Femenino</Text>}
           </View>
            <View style={{ padding: 55 }}>
                <Button title='Enviar'
                    onPress={() => { Texto(edad, correo) }}
                    />
            </View>
            <View>
                
            <Text style={{ alignItems: 'center', borderRadius:15 }}>{text}</Text>
            {
            !Escondido
            ?null:< Image
                    style={{
                        height: 350,
                        width: 450,
                        alignItems: 'center'
                    }}
                    source={
                        require('./mono.jpg')
                    }
                    />}
            
               
            </View>
            

        </View>
    )
}