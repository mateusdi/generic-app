import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home/Index';
import { Sobre } from '../screens/sobre/Index';

export function AuthStack(){
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Sobre" component={Sobre} />
        </Stack.Navigator>
  );
}