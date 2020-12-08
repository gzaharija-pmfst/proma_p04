import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

const CiljUnos = (props) => {
  const [unos, promjenaUnosa] = useState('')
  const noviUnos = (tekst) => {
    promjenaUnosa(tekst)
  }
  const noviCilj = () => {
    console.log(unos)
    props.postaviCiljeve(unos);
    promjenaUnosa('')
  }
  return (
    <View style={stilovi.viewUnos}>
    <TextInput
      placeholder="dodaj cilj"
      style={stilovi.unos}
      value={unos}
      onChangeText={noviUnos}
    />
    <Button title="Dodaj"
      onPress={() => props.postaviCiljeve(unos)} />
  </View>
  )
}

const stilovi = StyleSheet.create({
  viewUnos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },  
  unos: {
    width: '70%',
    marginBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
})
export default CiljUnos