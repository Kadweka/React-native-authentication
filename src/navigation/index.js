import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import SignInScreen from '../screens/authscreen/SignInScreen';
import SignUpScreen from '../screens/authscreen/SignUpScreen';
// import HomeScreen from '../screens/bottomtabscreens/HomeScreen';
import SplashScreen from '../screens/SplashScreen'

enableScreens()
import React from 'react'

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#009387'},headerTintColor:'#fff',headerShown: false,headerTitleStyle:{fontWeight:'bold'}}}>
     <Stack.Screen name="SplashScreen" component={SplashScreen}/>
     {/* <Stack.Screen name="HomeScreen" component={HomeScreen}/> */}
     <Stack.Screen name="SignInScreen" component={SignInScreen}/>
     <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>

     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation