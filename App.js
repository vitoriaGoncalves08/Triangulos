import React,{useState} from 'react';
import { View, Text, Image, StatusBar, TextInput,TouchableOpacity,Alert} from 'react-native';

import MyStyle from './css/style';

export default function Aplicacao(){

  const[A, setA] = useState(null);
  const[B, setB] = useState(null);
  const[C, setC] = useState(null);

  const[tipoT, setTipoT] = useState(null);
  const[soma, setSoma] = useState(null);
  const[desc, setDesc] = useState(null);

  const Te = {
    desc: "Equilátero"
  }
  const Ti = {
    desc: "Isósceles"
  }
  const Tes = {
    desc: "Escaleno"
  }
  const sim = {
    soma: "São de um Triângulo!"
  }
  const nao = {
    soma: "NÃO são de um Triângulo!"
  }
   
  const verificar = (A,B,C) =>{
      if(A==null || B==null || C==null || A == "" || B == "" || C == ""){
        Alert.alert("Aviso!","Os campos devem ser todos preenchidos");
        return;
      }else{
        if((B + C) > A || (A + C) > B || (A + B) > C ){
          setSoma(sim.soma);
        
           if(A == B && B == C && A == C){
              setTipoT(Te.desc);
            
            }else if(A == B && C != A || B == C && A != B || C == A && B != C){
              setTipoT(Ti.desc);
              
            }else{
              setTipoT(Tes.desc);
            }
      }else{
          setSoma(nao.soma);
      }
    }
  }

  function foto(tf){
    if(tf == "Equilátero"){
      return(<Image source={require('./imagens/equi.png')}/>)
    }
  }

  return(
    <View style={MyStyle.container}>
      <StatusBar hidden/>

      <Image source={require('./imagens/fundo.jpg')}
                    style={MyStyle.img}/>

      <Text style={MyStyle.tit1}>Triângulos</Text>
      
      <Text style={MyStyle.tit2}>Essas medidas {soma} </Text>

      <TextInput placeholder="Digite o valor 1" style={MyStyle.textInput} onChangeText={(value)=>setA(value)} keyboardType="numeric"/>

      <TextInput placeholder="Digite o valor 2" style={MyStyle.textInput} onChangeText={(value)=>setB(value)}keyboardType="numeric"/>

      <TextInput placeholder="Digite o valor 3" style={MyStyle.textInput} onChangeText={(value)=>setC(value)}
      keyboardType="numeric"/>
     
      <TouchableOpacity onPress={()=>verificar(A,B,C)} style={MyStyle.btnVerificar}>
        <Text style={MyStyle.textBtn}>VERIFICAR</Text>
      </TouchableOpacity>

        <View style={MyStyle.ladoalado}>
        <Text style={MyStyle.tit2}>Tipo de Triângulo:</Text>
        <Text style={MyStyle.conteudo}>{tipoT}</Text>
        </View>

        <Text>{foto(tipoT)}</Text>
    </View>
  );
  }


