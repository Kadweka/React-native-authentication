import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PostScreen</Text>
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#009387',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }
})