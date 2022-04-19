import { View,StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ExpenditureScreen from '../screens/bottomtabscreens/ExpenditureScreen'
import DeptorsScreen from '../screens/bottomtabscreens/DeptorsScreen'
import CreditorScreen from '../screens/bottomtabscreens/CreditorScreen'
import SettingScreen from '../screens/bottomtabscreens/SettingScreen'
import PostScreen from '../screens/bottomtabscreens/PostScreen'
import {Ionicons,AntDesign,MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { shadow } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
const Tabs = createBottomTabNavigator()
const CustomTabBarButton=({children,onPress})=>{
  return  <TouchableOpacity style={{top:-30,justifyContent:'center',alignItems:'center',...styles.shadow}} onPress={onPress}>
        <View style={{width:60,height:60,borderRadius:30,backgroundColor:'#e32f45'}}>
            {children}
        </View>
        
    </TouchableOpacity>
}
const Tab = () => {
  return (<Tabs.Navigator  activeColor="red"  screenOptions={{headerShown:false,
    tabBarStyle: {
        position:'absolute',
        bottom:25,
        left:15,
        right:15,
        height:60,
        backgroundColor:'white',
        elevation:0,
        borderRadius:15,
        ...styles.shadow
    }
  }}>
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
    <Tabs.Screen name={'Post'} component={PostScreen} options={{
              tabBarIcon:({focused})=>(
                // <View
                // >
                
                <Image source={require('../../assets/icons/plus.png')}
                resizeMode='contain'
                style={{
                    marginTop:10,
                    width: 50,
                    height: 50,
                    tintColor: '#f1f6f9',
                    alignContent: 'center',
                    justifyContent:'center'
                }}
                />
                // </View>
                
            ),
            tabBarButton:(props)=>(
                <CustomTabBarButton {...props}/>
            )
    }}/>
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
  )
}
const styles = StyleSheet.create({
        shadow:{
            shadowColor:'#7F5DF0',
            shadowOffset:{
                width:0,
                height:10
            },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
        }
  });

export default Tab