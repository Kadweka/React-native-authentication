import { View, Text ,TouchableOpacity,StyleSheet,TextInput,Pressable} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
  const navigation = useNavigation()
  const [name,setName] = useState(null)
  const [email,setEmail] = useState(null)
  const [password,setPassword] = useState(null)
const onPressLogin = ()=>{
  console.warn('REGISTERING A NEW ACCOUNT');
}
  return (
    <View style={styles.Container}>
    <View  style={styles.wrapper}> 
    <TextInput 
          value={name}  
          style={styles.input} 
          placeholder='Enter Email'
          onChangeText={text=>setName(text)}
          />
        <TextInput 
          value={email}  
          style={styles.input} 
          placeholder='Enter Email'
          onChangeText={text=>setEmail(text)}
          />
        <TextInput 
          value={password} 
          style={styles.input} 
          onChangeText={text=>setPassword(text)}
          placeholder='Enter Password' 
          secureTextEntry/>
        <Pressable 
          onPress={onPressLogin} 
          style={styles.button}>
          <Text style={styles.text} >Register</Text>
        </Pressable>
      <View 
      style={{flexDirection: "row",marginTop:'10%'}}>
        <Text>Have an account?  </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}
const styles=StyleSheet.create({
  Container:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  },
  wrapper:{
    width:'80%'
  },
  input:{
    marginBottom:12,
    borderWidth:1,
    height:'15%',
    borderColor:'#bbb',
    borderRadius:5,
    paddingHorizontal:14,
  },
  link:{
    color:'blue'
  },
    text:{
      fontWeight:'bold',
      color:'white',
    },
    button:{
      backgroundColor:'#3B71F3',
      width:'100%',
      padding:15,
      marginVertical:5,
      alignItems:'center',
      borderRadius:5
    },
})
export default RegisterScreen