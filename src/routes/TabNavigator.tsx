
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  HomeStack, SobreStack, ConfiguracaoStack, PermissaoStack} from './AuthStack';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function TabNavigator(){
    const Tab = createBottomTabNavigator();
  
    return(
       
        <Tab.Navigator  screenOptions={{ headerShown: false, title: ''}}>

            <Tab.Screen name="HomeTab" component={HomeStack}  options={{
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }} />

            <Tab.Screen name="SobreTab" component={SobreStack} options={{ 
                 tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />
             }}/>

            <Tab.Screen name="ConfiguracaoTab" component={ConfiguracaoStack} options={{ 
                 tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />
             }}/>
        </Tab.Navigator>
   
  );
}