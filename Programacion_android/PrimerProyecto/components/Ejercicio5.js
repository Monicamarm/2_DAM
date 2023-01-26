import React, { useEffect, useState } from 'react';

import { RefreshControl, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


export default function App() {
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



  const renderItem = ({ item }) => (
    <Text>{item.id} {item.name} {item.price}</Text>
  )

  return (
    < ScrollView refreshControl=
      {
        < RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        
      <Text>Fruta</Text>
      <FlatList
        data={fruits}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </ScrollView>
  )
}
