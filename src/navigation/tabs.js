import { StyleSheet,View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import EventsScreen from '../screens/bottomtabscreens/EventsScreen'
import SettingsScreen from '../screens/bottomtabscreens/SettingsScreen'
import { NavigationContainer } from '@react-navigation/native'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MyEvents from '../screens/bottomtabscreens/MyEvents'
import PostEventsScreen from '../screens/bottomtabscreens/PostEventsScreen'
import InvitedEventsScreen from '../screens/bottomtabscreens/InvitedEventsScreen'
const Tabs= createBottomTabNavigator()
const Tab= () => {
  return (
 <Tabs.Navigator style={{
    position:'absolute',
    bottom:25,
    left:25,
    right:25,
    elevation:0,
    backgroundColor:'#fff',
    borderRadius:15,
    height:90,
   
 }} 
 screenOptions={{
   headerShown: false}} 
  
 >
     <Tabs.Screen name="Events" component={EventsScreen}
     options={{tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" color={color} size={26}/>)}}/>

     <Tabs.Screen name="Mine" component={MyEvents}
     options={{tabBarIcon: ({ color, size }) => (
      <FontAwesome name="home" color={color} size={26}/>)}}/>

     <Tabs.Screen name="post" component={PostEventsScreen}
     options={{tabBarIcon: ({ color, size }) => (
      <FontAwesome name="pluscircle" color={color} size={26}/>)}}/>

     <Tabs.Screen name="Invited" component={InvitedEventsScreen}
     options={{tabBarIcon: ({ color, size }) => (
      <FontAwesome name="home" color={color} size={26}/>)}}/>

     <Tabs.Screen name="Settings" component={SettingsScreen}
     options={{tabBarIcon: ({ color, size }) => (
      <FontAwesome name="home" color={color} size={26}/>)}}/>
   </Tabs.Navigator>
  )
}
const style = StyleSheet.create({
  container:{
    position:'absolute',
    bottom:25,
    left:25,
    right:25,
    elevation:0,
    backgroundColor:'#fff',
    borderRadius:15,
    height:90,
  }
})
export default Tab