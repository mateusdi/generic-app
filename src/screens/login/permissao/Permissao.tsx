import { StyleSheet, Text, View, Switch} from 'react-native';
import { Button } from '../../../components/inputs/buttons/Button'
import { Input } from '../../../components/inputs/inputs/Input'
import { useState } from 'react';
import { useAuth } from '../../../contexts/Auth'
import { TabRouter } from '@react-navigation/native';
import { PermissaoStack } from '../../../routes/AuthStack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
// import { TabNavigator } from '../../../routes/TabNavigator';

export  function Permissao() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const {signIn} = useAuth();

    const navigation = useNavigation();

    function handleLogin (){
        navigation.replace('TabNavigator');
    };



  return (
    
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Deseja fazer Login com a senha padrão do dispositivo?</Text>

            <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
            />

            <Button 
            title='Continuar' 
            onPress={() => handleLogin()} 
            />



      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#344e86',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30
  },
  form: {
    height: 350,
    minHeight: 300,
    justifyContent: 'center',
    backgroundColor:"#fbf8fc",
    borderRadius: 8,
    alignItems: 'center'
  }
});
