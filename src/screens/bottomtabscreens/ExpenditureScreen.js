import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpenditureScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ExpenditureScreen</Text>
    </View>
  )
}

export default ExpenditureScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#009387',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})