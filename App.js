  
import React,{useState} from 'react';
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, Alert} from 'react-native';

import MyStyle from './css/style';

export default function Aplicacao(){

  const[A, setA] = useState(null);
  const[B, setB] = useState(null);
  const[C, setC] = useState(null);

  const[tipoT, setTipoT] = useState(null);
  const[soma, setSoma] = useState(null);
  const[desc, setDesc] = useState(null);
   
  const verificar = (A, B, C) => {
    setTipoT('');
    if(A == null || B == null || C == null || A == "" || B == "" || C == ""){
      Alert.alert("Aviso!","Os campos devem ser todos preenchidos");
      return;
    } else {
      var a = parseInt(A)
      var b = parseInt(B)
      var c = parseInt(C)
      if((b + c) > a && (a + c) > b && (a + b) > c ){
        setSoma('São de um Triângulo!');
        if(a == b && b == c && a == c){
          setTipoT('Equilátero');
        } else if(a == b && c != a || b == c && a != b || c == a && b != c){
          setTipoT('Isósceles');
        } else {
          setTipoT('Escaleno');
        }
      } else {
        setSoma('NÃO são de um Triângulo!');
        setTipoT('');
      }
    }
  }

  function imagem(tf){
    switch(tf) {
      case "Equilátero":
        return(<Image source={require('./imagens/equi.png')} style={MyStyle.imgT}/>)
        break;
      case "Isósceles":
        return(<Image source={require('./imagens/iso.png')} style={MyStyle.imgT}/>)
        break;
      case "Escaleno":
        return(<Image source={require('./imagens/esca.png')} style={MyStyle.imgT}/>)
        break;
      default:
        break;
    }
    
  }

  return(
    <View style={MyStyle.container2}>
      <StatusBar hidden/>

      <Image source={require('./imagens/fundo.png')}
                    style={MyStyle.img}/>

      <Text style={MyStyle.tit1}>Triângulos</Text>
      
      <Text style={MyStyle.tit2}>Essas medidas {soma} </Text>

      <TextInput placeholder="Digite o valor 1" style={MyStyle.textInput} 
        onChangeText={(value) => setA(value)} keyboardType="numeric"/>

      <TextInput placeholder="Digite o valor 2" style={MyStyle.textInput} 
        onChangeText={(value) => setB(value)} keyboardType="numeric"/>

      <TextInput placeholder="Digite o valor 3" style={MyStyle.textInput} 
        onChangeText={(value) => setC(value)} keyboardType="numeric"/>
     
      <TouchableOpacity onPress={() => verificar(A, B, C)} style={MyStyle.btnVerificar}>
        <Text style={MyStyle.textBtn}>VERIFICAR</Text>
      </TouchableOpacity>

      <View style={MyStyle.ladoalado}>
        <Text style={MyStyle.tit2}>Tipo de Triângulo: </Text>
        <Text style={MyStyle.conteudo}>{tipoT}</Text>
      </View>

      {imagem(tipoT)}

    </View>
  );
}