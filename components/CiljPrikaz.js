import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const CiljPrikaz = (props) => {

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.brisanje}>
      <View style={stilovi.lista}>
        <Text>{props.naslov}</Text>
      </View>
    </TouchableOpacity>
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