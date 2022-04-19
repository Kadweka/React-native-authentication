import {TouchableOpacity,Image, Dimensions,StyleSheet,Button,View, Text,onPress} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Aninmatable from 'react-native-animatable'
const SplashScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
    <View style={styles.header}>
     <Aninmatable.Image 
     animation='bounceIn'
     duraton="2"
     source={require('../../assets/icons/icons.png')} style={styles.logo}/>
    </View>
    <Aninmatable.View animation='fadeInUpBig' duraton="1500" style={styles.footer}>
      <Text style={styles.title}>Stay connected with everyone!</Text>
      <Text style={styles.text}>Sign in with account</Text>
      <View style={styles.button}>
    <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
      <LinearGradient colors={['#08d4c4','#01ab9d']} style={styles.SignIn}>
      <Text style={styles.textSign}>Get Started</Text>
      <MaterialIcons name='navigate-next' color='#fff' size={20}/>
      </LinearGradient>
    </TouchableOpacity>
    </View>
    </Aninmatable.View>
    </View>
  )
}
export default SplashScreen

const {height}=Dimensions.get("screen")
const height_logo = height*0.30
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#009387'
  },
  header:{
    flex:2,
    justifyContent:'center',
    alignItems:'center'
  },
  footer:{
    flex:1,
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:50,
    paddingHorizontal:50
  },
  logo:{
    width:height_logo,
    height:height_logo
  },
  title:{
    color:'grey',
    fontSize:30,
    fontWeight:'bold'
  },
  button:{
    alignItems:'flex-end',
    marginTop:5,
  },
  SignIn:{
    width:150,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    flexDirection:'row'
  },
  textSign:{
    color:'white',
    fontWeight:'bold'
  }
})
