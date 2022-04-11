import {Platform,Button,TextInput,onPress,StatusBar, StyleSheet,View,TouchableOpacity, Text } from 'react-native';
import React,{useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Aninmatable from 'react-native-animatable'

const SignInScreen = ({navigation}) => {
  const [data,setData] = React.useState({
    email:'',
    password:'',
    check_textInputChange:false,
    secureTextEntry:true
  });
  const textInputChange=(val)=>{
    if(val.length != 0){
      setData({
        ... data,
        email:val,
        check_textInputChange:true
      })
    }
    else{
      setData({
        ... data,
        email:val,
        check_textInputChange:false
      })
    }
  }
  const handlePasswordChange=(val)=>{
    setData({
      ... data,
      password:val
    })
  }
  const updatesecureTextEntry=(val)=>{
    setData({
      ... data,
      secureTextEntry:!data.secureTextEntry
    })
  }
  return (
   <View style={styles.container}>
     <StatusBar backgroundColor='#E78F8E' barStyle="light-content"/>
     <View style={styles.header}>
     <Text style={styles.text_header}>Welcome!</Text>
     </View>
     <Aninmatable.View animation='fadeInUpBig' duraton="1500" style={styles.footer}>
     <Text style={styles.text_footer}>Email</Text>
     <View style={styles.action}>
      <FontAwesome
       name="user-o"
       color="#05375a"
       size={20}/>
      <TextInput 
       placeholder='Your Email'
        style={styles.textInput}
        autoCapitalize="none"
        onChangeText={(val)=>textInputChange(val)}
        />
        {data.check_textInputChange? 
        <aninmatable.View>
      <Feather
        name="check-circle"
        color="green"
        size={20}/>
        </aninmatable.View>
        :null}
     </View>

     <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
     <View style={styles.action}>
      <FontAwesome
       name="lock"
       color="#05375a"
       size={20}/>
      <TextInput 
       placeholder='Your Password'
       secureTextEntry={data.secureTextEntry ? true : false}
        style={styles.textInput}
        autoComplete="none"
        onChangeText={(val)=>handlePasswordChange(val)}
        />
    <TouchableOpacity
    onPress={updatesecureTextEntry}
    >
      {data.secureTextEntry ?
            <Feather
        name="eye-off"
        color="#E78F8E"
        size={20}/>
        :
        <Feather
        name="eye"
        color="#E78F8E"
        size={20}/>
      }
    </TouchableOpacity>
     </View>
    <View style={styles.button}>
      <LinearGradient colors={['#E78F8E','#E78F8E']} style={styles.signIn}>
        <Text style={[styles.textSign,{color:'#fff'}]} onPress={()=>navigation.navigate("HomeScreen")}>Sign In</Text>
      </LinearGradient>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("SignUpScreen")}
      style={[styles.signIn,{
        borderColor:"#E78F8E",
        borderWidth:1,
        marginTop:15
      }]}
      >
<Text style={[styles.textSign,{
        color:"#E78F8E",
      }]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </Aninmatable.View>
   </View>
  )
}

export default SignInScreen
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E78F8E'
  },
  header:{
    flex:1,
    justifyContent:'flex-end',
    paddingHorizontal:20,
    paddingBottom:50,
  },
  footer:{
    flex:3,
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:30,
    paddingHorizontal:20    
  },
  text_header:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:30
  },
  text_footer:{
    color:"#05375a",
    fontSize:18,
  },
  action:{
    flexDirection:'row',
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:"#f2f2f2",
    paddingBottom:5
  },
  textInput:{
    flex:1,
    marginTop:Platform.OS='ios'? 0 :-12,
    paddingLeft:10,
    color:"#05375a"
  },
  button:{
    alignItems:'center',
    marginTop:10
  },
  signIn:{
    width:"100%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  textSign:{
    fontSize:18,
    fontWeight:'bold'
  }
})