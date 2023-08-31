import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react' 6.9k (gzipped: 2.7k)

export default function componentecontrolado() {
  const [nome, setNone] = useState ('')

  return(
    <View>
      <Text style={{ fontSize: 30}}>componentecontrolado</Text>
      <Text style={{ fontSize: 30}}>none</Text>

      <TextInput
           style={styles.input}
           placeholder='Digite seu nome'

           value={value}
           onChangeText={valorDigitado setNone(valorDigitado)}
      />
    </View>
  )
}

const styles = StyleSheet.create({})