import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

const EventsScreen = () => {
  return (
    <View style={style.container}>
      <Text>ALl Events To Come</Text>
    </View>
  )
}
const style = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#009387'
}
})

export default EventsScreen