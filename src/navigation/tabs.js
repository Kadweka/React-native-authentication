import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ExpenditureScreen from '../screens/bottomtabscreens/ExpenditureScreen'
import DeptorsScreen from '../screens/bottomtabscreens/DeptorsScreen'
import CreditorScreen from '../screens/bottomtabscreens/CreditorScreen'
import SettingScreen from '../screens/bottomtabscreens/SettingScreen'
import {Ionicons,MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import React from 'react'

const Tabs = createBottomTabNavigator()

const Tab = () => {
  return <Tabs.Navigator>
    <Tabs.Screen name='Expenditure' component={ExpenditureScreen}
      options={{tabBarIcon:({size,color})=>{
          return <FontAwesome5 name="money-bill" size={size} color={color} />
      }}}
      />
       <Tabs.Screen name='Deptors' component={DeptorsScreen}
      options={{tabBarIcon:({size,color})=>{
          return <MaterialCommunityIcons name="wallet" size={size} color={color} />
      }}}
      />
       <Tabs.Screen name='Creditor' component={CreditorScreen}
      options={{tabBarIcon:({size,color})=>{
          return <MaterialCommunityIcons name="wallet-plus" size={size} color={color} />
      }}}
      />
       <Tabs.Screen name='Setting' component={SettingScreen}
      options={{tabBarIcon:({size,color})=>{
          return <Ionicons name="md-settings" size={size} color={color} />
      }}}
      />
  </Tabs.Navigator>
}

export default Tab