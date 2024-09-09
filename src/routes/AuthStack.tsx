import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home/Home';
import { Configuracao } from '../screens/configuracao/Configuracao';
import { Sobre } from '../screens/sobre/Sobre';
import { Sobre1 } from '../screens/sobre1/Sobre1';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack  = createNativeStackNavigator();

// export function AuthStack(){
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={Home} />
//         </Stack.Navigator>
//   );
// }


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