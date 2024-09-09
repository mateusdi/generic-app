import  {createContext, useContext, useEffect, useState} from 'react';

import {authService} from '../service/authService';
import {Alert} from 'react-native';


export interface AuthData {
  token: string;
  login: string;
  name: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (login: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [authData, setAuthData] = useState<AuthData>();
  
  

  async function signIn(login: string, password: string) {
    try{
      const authData = await authService.signIn(login, password);

      setAuthData(authData);
      
    }catch(error){
      alert(error);
    }

  }
  async function signOut() {
    
    setAuthData(undefined);
    
  }

  return (
    <AuthContext.Provider value={{authData, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
