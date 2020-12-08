import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const CiljPrikaz = (props) => {

  return (
    <View style={stilovi.lista}>
      <Text>{props.naslov}</Text>
    </View>
  )
}

const stilovi = StyleSheet.create({
  lista: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default CiljPrikaz;