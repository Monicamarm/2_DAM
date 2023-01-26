import React, { useEffect, useState } from 'react';

import { RefreshControl, Text, ScrollView, View, FlatList, Image } from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


export default function MercadoScreen() {
  const [fruits, setFruits] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    fetch("http://10.88.10.59:8080/fruits")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('getting data from fetch', responseJson);
        setFruits(responseJson);
      })
      .catch(error => console.log(error));
  }, [])



  const renderItem = ({ item }) => {
      return(
    <View>
      <Text> {item.name} {item.price}</Text>
      
      <Image style={{
        height: 450,
        width: 415
      }}
        source={item.name==='piña'?require('../assets/piña.jpg'):item.name==='pera'?require('../assets/pera.jpg'):item.name==='melocoton'?require('../assets/melocoton.jpg')
        :item.name==='Manzana'?require('../assets/manzana.jpg'):item.name==='Uvas'?require('../assets/uva.jpg'):item.name==='Naranja'?require('../assets/naranja.jpg'):
        item.name==='Kiwi'?require('../assets/kiwi.jpg'):require('../assets/platano.jpg')} />
    </View>
      )
    }

  return (
    <View>

      <Text>Frutas</Text>
      <FlatList refreshControl=
        {
          < RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={fruits}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </View>
  )
}
