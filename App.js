import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import CiljPrikaz from './components/CiljPrikaz'
import CiljUnos from './components/CiljUnos'

export default function App() {
  const [ciljevi, postaviCiljeve] = useState([])
  const [unosVidljiv, postaviVidljivostUnosa] = useState(false)
  const noviCilj = (unos) => {
    postaviCiljeve(ciljevi => [...ciljevi, { broj: Math.random().toString(), value: unos }]);
    postaviVidljivostUnosa(false)
  }
  const brisiCilj = (ciljID) => {
    postaviCiljeve(ciljevi => {
      return ciljevi.filter(c => c.broj !== ciljID);
    })
    
  }
  const odustaniModal = () => {
    postaviVidljivostUnosa(false)
  }
  return (
    <View style={stilovi.ekran}>
      <Button
        title="Dodaj novi cilj"
        onPress={() =>postaviVidljivostUnosa(true)}
      />
      <CiljUnos
        vidljiv={unosVidljiv}
        postaviCiljeve={noviCilj}
        odustani={odustaniModal}
      />
      <FlatList
        keyExtractor={(item, index) => item.broj}
        data={ciljevi}
        renderItem={el =>
          <CiljPrikaz
            naslov={el.item.value}
            brisanje={() => brisiCilj(el.item.broj)}
          />
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
