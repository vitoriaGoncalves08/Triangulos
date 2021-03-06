import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        padding:40.10,
        borderColor: '#00F',
        position:'relative',
        display:'flex',
        flexDirection:'column',
        alignItems:'center', 
    },

    img:{
        resizeMode:'cover',
        position:'absolute'
    },

    ladoalado:{
        flexDirection:'row'
    },

    tit1:{
        fontSize:35,
        color:'#000',
        marginBottom:15,
        fontFamily:'MontserratAlternates-SemiBold'
    },

    tit2:{
        fontSize:17,
        color:'#000',
        marginBottom:20,
        marginTop:10, fontFamily:'MontserratAlternates-SemiBold',
    },

    tit3:{
        fontSize:20,
        margin:10,
        fontFamily:'MontserratAlternates-SemiBold'
    },

    conteudo:{
        fontSize:20,
        color:'#000',
        marginTop:10,
        fontFamily:'MontserratAlternates-Italic',
    },

    textInput:{
        width:'100%',
        height:40,
        backgroundColor:'#FFF',
        borderRadius:20,
        paddingLeft:10,
        marginBottom:10,
        fontSize:18,
        fontFamily:'MontserratAlternates-Regular'
    },

    btnVerificar:{
        width:'100%',
        height:40,
        backgroundColor:'#7b42f5',
        borderRadius:20,
        justifyContent:'center',
        marginBottom:20
    },

    textBtn:{
        color:'white',
        textAlign:'center'
    },

    imgT:{
        resizeMode:'contain',
        width:280,
        marginTop:-15,
    }
})