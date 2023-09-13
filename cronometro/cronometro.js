import React, { useState } from 'react';
import { StyleSheet,StatusBar,Text, View, TouchableOpacity ,SafeAreaView, Image, Alert } from 'react-native';

let timer = null;
let segundos = 0;
let minutos = 0;
let horas = 0;

export default function AppCronometro() {
  // Para reiniciar o timer.
  function iniciar(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;
      setBotao('INICIAR')
    }else{
      // Para iniciar o timer
      setBotao('PARAR')
      timer = setInterval(() => {
        segundos++; // Contando segundos

        // Minutos
        if(segundos == 60){
          segundos = 0;
          minutos++;
        }

        // Horas
        if(minutos == 60){
          minutos = 0;
          horas++;
        }

        let formatado = (horas < 10 ?'0'+ horas : horas)+ ':' +(minutos < 10 ?'0'+ minutos : minutos)
        + ':' +(segundos < 10 ?'0'+ segundos : segundos);

        setNumero(formatado);
      },1000);
      setBotao('PARAR')
    }
  }

  function zerar(){
    if(timer !== null){
        clearInterval(timer);
        timer = null;
    }
    setNumero(0)
    setMedido(numero);
    segundos = 0;
    minutos = 0;
    horas = 0;
    setBotao('INICIAR');
  }

  const [numero, setNumero] = useState('');
  const [botao, setBotao] = useState('INICIAR');
  const [medido, setMedido] = useState('');
    return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Image 
      source={require('./assets/modelocronometro.png')}
      style={styles.imagem}
      />

      <Text style={styles.texto}>{numero == 0?'00:00:00':numero}</Text>

      <View style={styles.botaoArea}>

        <TouchableOpacity style={styles.botao} onPress={iniciar}>
          <Text style={styles.textoBotao}>{botao}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={zerar}>
          <Text style={styles.textoBotao}>ZERAR</Text>

        </TouchableOpacity>

      </View>
      <View style={styles.areaTempoMedido}>
        <Text style={styles.tempoMedido}>{medido}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 60,
    color:'#FFF',
    marginTop:-270,
    fontWeight:'bold',

  },
  botaoArea:{
    flexDirection:'row',
    marginTop: 180,
    margin: 20,
    
    
  }, 
  botao:{
    backgroundColor:"#FFF",
    margin:30,
    borderRadius:80,
    padding:30,
    fontWeight:'bold',
    fontSize:60,
  },
  textoBotao:{
    fontSize:20,
    fontWeight:"bold",
  },
  areaTempoMedido:{
    marginTop:10
  },
  tempoMedido:{
    fontSize:40,
    fontStyle:'italic',
    color:"#FFF",
    fontWeight:"bold",
  }
  
});