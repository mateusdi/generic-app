import  {createContext, useContext, useEffect, useState} from 'react';

import {authService} from '../service/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthData {
  token: string;
  login: string;
  name: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (login: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

//TODO: se for o primeiro login daquele usuario, perguntar se quer que conecte com a senha padrão, 
//face id ou biometria

//TODO: criar a tela para perguntar, verificar antes de aparecer a tela se tem authData em storage
//
export const AuthProvider = ({ children }: any) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
  }, []);

  async function loadFromStorage(){
    const auth = await AsyncStorage.getItem('@AuthData');
    //se existir a chave salva em storage, então converto para objeto.
    if(auth){
      setAuthData(JSON.parse(auth) as AuthData);
    }
    setLoading(false);
  }
  
  async function signIn(login: string, password: string) {
    try{
      const authData = await authService.signIn(login, password);

      setAuthData(authData);

      try {
        //salvo o AuthData
        await AsyncStorage.setItem('@AuthData', JSON.stringify(authData));
      } catch (error) {
        console.log(error);
      }
      
    }catch(error){
      console.log(error);
    }

  }
  async function signOut() {
    setAuthData(undefined);
    await AsyncStorage.removeItem('@AuthData');
  }

  return (
    <AuthContext.Provider value={{loading, authData, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
