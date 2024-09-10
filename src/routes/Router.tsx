import { NavigationContainer } from '@react-navigation/native';
// import { AuthStack } from './AuthStack';
import { TabNavigator } from './TabNavigator';
import { AppStack } from './AppStack';
import { PermissaoStack, TabNavigatorStack } from './AuthStack';
import { useAuth } from '../contexts/Auth'
import {Text, View} from 'react-native';

export function Router(){
    
    const {authData, loading} = useAuth();
   
    if(loading){
        <View style={{flex: 1, backgroundColor: '#344e86', justifyContent: 'center',}}>
            <Text>Carregando...</Text>
        </View>
    }
    //se estiver logado, abre a stack autenticado, caso contrario o appStack representa a tela de login
    return(
        <NavigationContainer>
             {authData ? <TabNavigatorStack/>: <AppStack/> } 
        </NavigationContainer>
  );
}