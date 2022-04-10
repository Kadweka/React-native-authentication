import {Platform,Button,TextInput,onPress,StatusBar, StyleSheet,View,TouchableOpacity, Text } from 'react-native';
import React,{useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Aninmatable from 'react-native-animatable'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>HomeScreen</Text>
      <Button title="Go To Login In" onPress={()=>navigation.navigate("SignInScreen")}/>
    </View>
  )
}

export default HomeScreen