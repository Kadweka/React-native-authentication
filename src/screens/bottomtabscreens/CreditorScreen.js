import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreditorScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreditorScreen</Text>
    </View>
  )
}

export default CreditorScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#009387',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})