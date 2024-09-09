import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';
import { AuthContext, useAuth } from '../contexts/Auth'

export function Router(){
    
    const {authData} = useAuth();
    
    return(
        <NavigationContainer>
            {authData ? <AuthStack/> : <AppStack/>}
        </NavigationContainer>
  );
}