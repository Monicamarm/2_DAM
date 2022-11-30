
/**

 * Sample React Native App

 * https://github.com/facebook/react-native

 *

 * @format

 * @flow strict-local

 */



import React, { useState } from 'react';

import { StyleSheet, Button, Text, Image, TextInput, View } from 'react-native';
import Ejercicio from './componentes/Ejercicio3';


// Ejercicio 1
/*
export default function App() {
  const [Edad, setEdad] = useState(0);
  const [text, settext] = useState(null);

  function MeterEdad(Edad) {
    if (Edad < 18) {
      (text)=> settext(('¡Eres un yogurin!'))
    } else (Edad > 18); {
      (text)=> settext(('¡Viejo!'))
    }
  }

  return(
    
    <View>
      <Text>
      <Text>Hola mi nombre es Nacho Guerrero</Text>
      <Text style={{color:'blue'}}>Nacho Guerrero</Text>
        <Text>Escribe aqui tu edad</Text>
        <TextInput style={{
          height:40,
          borderColor:'black',
          borderWidth:1
        }}
        
        
        placeholder="Edad"
        onChangeText={Edad => setTexto(Edad)} //para que se guarde en el cuadro edad
    
        />

      <View>
        <Button onPress={()=> {
        MeterEdad(Edad)
      }}
      title={"Finalizar"}
      />
      </Text>
      </View>
      </View>

  )
}
*/

/*import React, { useState } from 'react';

import { StyleSheet, Button, Text, Image, TextInput, View, TouchableOpacity , Alert} from 'react-native';

export default function Ejercicio1() {
 
  const [Edad, setEdad] = useState(0);
  const [text, settext] = useState(null);
 
  function MeterEdad(Edad) {
    if (Edad < 18) {
      (text)=> settext(('¡Eres un yogurin!'))
    } else (Edad = 18); {
      (text)=> settext(('¡Videojuegos!'))
    } if (Edad > 18) {
      (text)=> settext(('¡Hora de trabajar!'))
    }
  }

  return (

    <View>
      <Text style={{ color: 'black', paddingTop: 40, textAlign: 'center' }}>
        <Text>Hola mi nombre es </Text>
        <Text style={{ color: 'blue' }}>Nacho Guerrero</Text>
      </Text>
      <Text style={{ color: 'black', paddingTop: 30, textAlign: 'left', paddingLeft: 78 }}>Escribe aquí tu edad:</Text>
      <TextInput

        style={{
          height: 30,
          width: 245,
          padding: 0,
          borderColor: 'grey',
          borderWidth: 1,
          marginLeft: 78,


        }}
        placeholder="Edad"
        onChangeText={Edad => setEdad(Edad)}
      />
      <View style={{ margin: 78 }}>
        <TouchableOpacity 
        style={StyleSheet.button}
        onPress={() => {MeterEdad(Edad)}}>
          <Text>Finalizar</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: 'center' }}>{text}</Text>
      <Text style={{ marginLeft: 95, paddingTop: 40, color: 'black' }}>Gracias por rellenar el formulario.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    paddingHorizontal:10
  },
  button: {
    alignItems:'center',
    backgroundColor:'blue',
    padding:10
  }
})*/

/*< title='Finalizar'
          onPress={Edad === null ?
            (text) => settext('null') :
            Edad < 18 ?  (text)=>settext(<Text style={{color:'green'}} >¡Eres un yogurin!</Text>) :
              Edad > 19 ?  (text)=>settext(<Text style={{color:'red'}}>¡A trabajar!</Text>) :
              (text)=>settext(<Text style={{color:'blue'}}>¡Disfruta el cheque de 400 pavos en videojuegos!</Text>)}
        />*/



/*import React, { useState } from 'react';

import { StyleSheet, Button, Text, Image, TextInput, View } from 'react-native';

export default function Ejercicio2() {
    const [Edad, setEdad] = useState(0);
    const [text, settext] = useState(null);
  
    return (
  
      <View>
        <Text style={{ color: 'black', paddingTop: 40, textAlign: 'center' }}>
          <Text>Hola mi nombre es </Text>
          <Text style={{ color: 'blue' }}>Nacho Guerrero</Text>
        </Text>
        <Text style={{ color: 'black', paddingTop: 30, textAlign: 'left', paddingLeft: 78 }}>Escribe aquí tu edad:</Text>
        <TextInput
  
          style={{
            height: 30,
            width: 245,
            padding: 0,
            borderColor: 'grey',
            borderWidth: 1,
            marginLeft: 78,
            
  
          }}
          placeholder="Edad"
          onChangeText={Edad => setEdad(Edad)}
        />
        <View style = {{margin:78}}>
          <Button title='Finalizar'
            onPress={Edad === null ?
              (text) => settext('null') :
              Edad < 18 ?  (text)=>settext(<Text style={{color:'green'}} >¡Eres un yogurin!</Text>) :
                Edad > 19 ?  (text)=>settext(<Text style={{color:'red'}}>¡A trabajar!</Text>) :
                (text)=>settext(<Text style={{color:'blue'}}>¡Disfruta el cheque de 400 pavos en videojuegos!</Text>)}
          />
        </View>
        <Text style = {{textAlign:'center'}}>{text}</Text>
        <Text style={{marginLeft:95,paddingTop:40,color:'black'}}>Gracias por rellenar el formulario.</Text>
      </View>
    )
  }*/
  
  
//Ejercicio 1 funciona!!!
/*export default function App() {
  const [Edad, setEdad]= useState(0);
  const [text,settext] = useState(null);

  return(
    
    <View>
      <Text>
        <Text>Hola mi nombre es </Text>
        <Text style = {{color:'blue'}}>Nacho Guerrero</Text>
      </Text>
      <Text>Escribe aquí tu edad:</Text>
      <TextInput 
        
        style = {{
        height:40,
        borderColor:'black',
        borderWidth:1
      }}
      placeholder = "Edad"
      onChangeText = {Edad => setEdad(Edad)}
      />

      <Button title = 'Finalizar' 
      onPress = {Edad === null? 
        (text)=>settext('null'): 
        Edad<18? (text)=>settext('¡Eres un yogurin!'): 
        Edad>19? (text)=>settext('¡A trabajar!'):
        (text)=>settext('¡Disfruta el cheque de 400 pavos en videojuegos!') } 
        />
        <Text>{text}</Text>
        <Text>Gracias por rellenar el formulario.</Text>
    </View>
  )
}
*/

export default function App() {
  /*const [Edad, setEdad] = useState(0);
  const [text, settext] = useState(null);

  return (

    <View>
      <Text style={{ color: 'black', paddingTop: 40, textAlign: 'center' }}>
        <Text>Hola mi nombre es </Text>
        <Text style={{ color: 'blue' }}>Nacho Guerrero</Text>
      </Text>
      <Text style={{ color: 'black', paddingTop: 30, textAlign: 'left', paddingLeft: 78 }}>Escribe aquí tu edad:</Text>
      <TextInput

        style={{
          height: 30,
          width: 245,
          padding: 0,
          borderColor: 'grey',
          borderWidth: 1,
          marginLeft: 78,
          

        }}
        placeholder="Edad"
        onChangeText={Edad => setEdad(Edad)}
      />
      <View style = {{margin:78}}>
        <Button title='Finalizar'
          onPress={Edad === null ?
            (text) => settext('null') :
            Edad < 18 ?  settext(<Text>¡Eres un yogurin!</Text>) :
              Edad > 19 ?  settext(<Text>¡A trabajar!</Text>) :
                 settext(<Text>¡Disfruta el cheque de 400 pavos en videojuegos!</Text>)}
        />
      </View>
      <Text style = {{textAlign:'center'}}>{text}</Text>
      <Text style={{marginLeft:95,paddingTop:40,color:'black'}}>Gracias por rellenar el formulario.</Text>
    </View>
  )*/
  return (<Ejercicio/>)
}

