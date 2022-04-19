import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DeptorsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DeptorsScreen</Text>
    </View>
  )
}

export default DeptorsScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#009387',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})