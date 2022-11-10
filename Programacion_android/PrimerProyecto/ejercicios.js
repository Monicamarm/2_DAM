
/**
* Sample React Native App
* https://github.com/facebook/react-native
 *
 * @format
 * 
 * @flow strict-local
 */


import React, { useState } from 'react';


import { StyleSheet, Button, Text, TextInput, View, Image, Switch } from 'react-native';

/*const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>es rojo</Text>
      <Text style={styles.bigBlue}>es azul</Text>
      <Text style={[styles.bigBlue, styles.red]}>es modo azul y rojo</Text>
      <Text style={[styles.red, styles.bigBlue]}>es rojo pero azul</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'white'
  },
  bigBlue:{
    color:'blue',
    fontWeight:'bold',
    fontSize:30,
  },
  red:{
    color:'red',
  },
});

export default App;
*/

//ejercicio1

/*export default function App() {

  const nombre = "Monica"

  const name = "Cesur"

  return (
    <Text>hola {nombre} Bienvenido a {name} </Text>);
  }*/

//ejercicio2

/*export default function App() {
  const getFullName = (Nombre, Apellido) => {
  return Nombre + " " + Apellido;
}

return (

  <Text>Hola soy {getFullName("Monica", "Marino",)}</Text>
  );
}*/

//ejercicio3

/*export default function App() {
  const Human=()=>{
    return(
      <View>
    <Text>Soy un extraterreste infiltrado</Text>
    </View>
    );
  }
  return(
    <View>
    <Text>Bienvenido!!</Text>
    <Human/>
    <Human/>
    <Human/>
    </View>
    );
  }*/

//ejercicio4

/*export default function App() {
  const Human=(props)=>{
    return(
<View>
<Text>Hola, soy {props.name} {props.secondname}!</Text>
</View>
);
}
return(
  <View>
<Human name="Humano" secondname="decente" />
<Human name="Extraterreste" secondname="infiltrado pero normalito" />
<Human name="Humano" secondname=" loco(dice que ve extraterrestres)" />
<Human name="Extraterreste" secondname= "malagente"/>
</View>
);
}*/

//ejercicio 5

/*export default function App() {
  const [name, setName] = useState("cesur");
  return (
    <Text>Hola {name}</Text>
  );
}*/

//ejercicio 6

/*export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <View >
      <View style={{backgroundColor:'magenta', padding: 10}}>
      <Button
        onPress={() => {
          setCount(0);
          setCount2(0);
        }}
        title={"Reset"}
      />
      <Text>reseteo y llevo: {count} y {count2}</Text>
      </View>
      <View>
      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title={"Más 1"}
      />
      <Text>Cada vez que pulso sumo 1 y llevo: {count}</Text>
      </View>
      <View>
      <Button
        onPress={() => {
          setCount2(count2 + 10);
        }}
        title={"Más 10"}
      />
      <Text>Cada vez que pulso sumo 10 y llevo: {count2}</Text>
    </View>
    </View>
  );
}*/

//Primera actividad

/*export default function App() {
  const [edad, setEdad] = useState(0);
  const [text, setText] = useState(null);
  const [color, setColor] = useState(null);

  function MeterEdad() {
    if (edad < 18) {
      setText('¡Que joven eres!')
      setColor('blue')
    } else if (edad < 19) {
      setText('¡Pedazo de edad!')
      setColor('green')
    } else if (edad > 19 && edad < 125) {
      setText('¡Que buena edad!')
      setColor('red')
    } else if (edad > 124) {
      setText('Eres un vampitriky')
      setColor('pink')
      // } else {
      // setText('Eso es una letra listillo')
      // setColor('yellow')
      // }
    }
  }

    function VerificarNumero(numero) {
      const regex = /^[a-zA-Z]+$/;
      if (!numero.match(regex)) {
        { MeterEdad() }
      } else {
        setText('Eso no vale listillo')
        setColor('yellow')
      }
    }
    // const validateEdad = texto => { 
    //   const reg = /^[a-zA-Z]+$/; if (!texto.match(reg)) {
    //      {MeterEdad()} 
    //     } else { 
    //       setText('Eso no vale listillo')
    //       setColor('yellow')
    //     } 
    //   }
    return (
      <View>
        <Text style={{ paddingTop: 40, paddingBottom: 40, textAlign: 'center' }}>
          <Text>Hola mi nombre es </Text>
          <Text style={{ color: '#73dcde' }}>Monica Mariño</Text>
        </Text>
        <Text style={{ paddingLeft: 65 }}>Escribe aquí tu edad:</Text>
        <TextInput
          style={{
            marginLeft: 63,
            marginBottom: 200,
            padding: 0,
            height: 30,
            width: 275,
            borderColor: 'grey',
            borderWidth: 1
          }}
          placeholder="Edad"
          onChangeText={Edad => setEdad(Edad)}
        />
        <View style={{ padding: 55 }}>
          <Button title='Finalizar'
            onPress={() => {VerificarNumero(edad); MeterEdad }}
          />
        </View>
        <Text style={{ paddingLeft: 65, color: color }}>{text}</Text>
        <Text style={{ paddingLeft: 65, paddingTop: 30 }}>Gracias por rellenar el formulario.</Text>

      </View>
    )
  }*/

//ejercicio 7
export default function App() {
  const [isEnabled, setIsEnabled] = useState(false)
  return (
    /*<Image
      style={{
        marginTop: 180,
        height: 450,
        width: 450
      }}
      source={
        require('./mono.jpg')
        //uri: 'https://i.pinimg.com/600x315/2f/57/b5/2f57b5ef82d8024b39beec08a15f5a0d.jpg'
      }
    />*/
    <View style={{alignItems:'center'}}>
    <Switch
      trackColor={{ false: 'green', true: 'yellow' }}
      thumbColor={isEnabled ? 'blue' : 'red'}
      onValueChange={() => setIsEnabled(previousState => !previousState)}
      value={isEnabled}
      />
      {isEnabled ?
        <Image style={{
          marginTop: 180,
          height: 450,
          width: 450
          }}
          source={require('./mono.jpg')} />
        :
        <Image style={{
          marginTop: 180,
          height: 450,
          width: 450
          }}
          source={{ uri: 'https://i.pinimg.com/600x315/2f/57/b5/2f57b5ef82d8024b39beec08a15f5a0d.jpg' }}
        />
      }
    </View>
  )
}
