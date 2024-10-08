import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from '../screens/login/Login'
import { Home } from '../screens/home/Home';

export function AppStack(){
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
  );
}