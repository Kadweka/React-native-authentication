import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import SignInScreen from '../screens/authscreen/SignInScreen';
import SignUpScreen from '../screens/authscreen/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

enableScreens()
import React from 'react'

const Stack = createNativeStackNavigator();
const Tabs= createBottomTabNavigator()
const Navigation = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#009387'},headerTintColor:'#fff',headerShown: false,headerTitleStyle:{fontWeight:'bold'}}}>
     <Stack.Screen name="SplashScreen" component={SplashScreen}/>
     <Stack.Screen name="SignInScreen" component={SignInScreen}/>
     <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
     <Stack.Screen name="HomeScreen" component={HomeScreen}/>

     </Stack.Navigator> 
   </NavigationContainer>
  )
}

export default Navigation