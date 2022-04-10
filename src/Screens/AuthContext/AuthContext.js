import { View, Text } from 'react-native'
import React ,{createContext} from 'react'

export const AuthContext=createContext();

export const AuthAprovider= ({children}) => {
  return (
    <AuthContext.Provider value="Texting the changes">{{children}}</AuthContext.Provider>
  )
}

export default AuthContext