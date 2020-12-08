import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [unos, promjenaUnosa] = useState('')
  const [ciljevi, postaviCiljeve] = useState([])

  const noviUnos = (tekst) => {
    promjenaUnosa(tekst)
  }
  const noviCilj = () => {
    console.log(unos)
    postaviCiljeve(ciljevi => [...ciljevi, unos]);
    promjenaUnosa('')
  }
  return (
    <View style={stilovi.ekran}>
      <View style={stilovi.viewUnos}>
        <TextInput
          placeholder="dodaj cilj"
          style={stilovi.unos}
          value={unos}
          onChangeText={noviUnos}
        />
        <Button title="Dodaj"
          onPress={noviCilj} />
      </View>
      <ScrollView>
        {ciljevi.map(cilj =>
          <View key={cilj} style={stilovi.lista}>
            <Text >{cilj}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const stilovi = StyleSheet.create({
  ekran: {
    padding: 50
  },
  unos: {
    width: '70%',
    marginBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  viewUnos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lista: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})
