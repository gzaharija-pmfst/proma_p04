import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import CiljPrikaz from './components/CiljPrikaz'
import CiljUnos from './components/CiljUnos'

export default function App() {
  const [ciljevi, postaviCiljeve] = useState([])
  const noviCilj = (unos) => { 
    postaviCiljeve(ciljevi => [...ciljevi, { broj: Math.random().toString(), value: unos }]);    
  }
  return (
    <View style={stilovi.ekran}>
      <CiljUnos
        postaviCiljeve={noviCilj}
      />
      <FlatList
        keyExtractor={(item, index) => item.broj}
        data={ciljevi}
        renderItem={el =>
          <CiljPrikaz naslov={el.item.value} />
        }
      />
    </View>
  );
}

const stilovi = StyleSheet.create({
  ekran: {
    padding: 50
  }
})
