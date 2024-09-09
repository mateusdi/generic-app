import { NavigationContainer } from '@react-navigation/native';
// import { AuthStack } from './AuthStack';
import { TabNavigator } from './TabNavigator';
import { AppStack } from './AppStack';
import { useAuth } from '../contexts/Auth'

export function Router(){
    
    const {authData} = useAuth();
    
    //se estiver logado, abre a stack autenticado, caso contrario o appStack representa a tela de login
    return(
        <NavigationContainer>
             {authData ? <TabNavigator/>: <AppStack/> } 
        </NavigationContainer>
  );
}