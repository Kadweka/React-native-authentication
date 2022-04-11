import { StyleSheet,View, Text } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
    return (
      <View style={style.container}>
        <Text>Account Settings</Text>
      </View>
    )
  }
  const style = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#E78F8E'
    }
  })
export default SettingsScreen