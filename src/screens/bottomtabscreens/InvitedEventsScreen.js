import { StyleSheet,View, Text } from 'react-native'
import React from 'react'

const InvitedEventsScreen = () => {
  return (
    <View style={style.container}>
      <Text>All Events Am Invited</Text>
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
export default InvitedEventsScreen