import React ,{createContext} from 'react'

export const AuthContext=createContext();

export const AuthAprovider= ({children}) => {
  return (
    <AuthContext.Provider value="Texting the changes">
      {children}
    </AuthContext.Provider>
  );
};
