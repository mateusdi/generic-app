import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home/Home';
import { Configuracao } from '../screens/configuracao/Configuracao';
import { Sobre } from '../screens/sobre/Sobre';
import { Sobre1 } from '../screens/sobre1/Sobre1';

import { Permissao } from '../screens/login/permissao/Permissao';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigator } from './TabNavigator';

const Stack  = createNativeStackNavigator();

// export function AuthStack(){
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={Home} />
//         </Stack.Navigator>
//   );
// }


export function PermissaoStack(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Permissao" component={Permissao} />
        </Stack.Navigator>
  );
}

export function TabNavigatorStack(){
    return(
        <Stack.Navigator >
            <Stack.Screen name="Permissão" component={Permissao} />
            <Stack.Screen  options={{ headerShown: false}} name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
  );
}

export function HomeStack(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
  );
}

export function ConfiguracaoStack(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Configurações" component={Configuracao} />
        </Stack.Navigator>
  );
}

export function SobreStack(){
    
    return(
        <Stack.Navigator>
                <Stack.Screen name="Sobre" component={Sobre} /> 
                <Stack.Screen name="Sobre1" component={Sobre1} /> 
        </Stack.Navigator>
  );
}