import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import { Button } from './src/components/inputs/buttons/button'
import { useState } from 'react';

export default function App() {
  const[loading, setLoading] = useState(false);
  
function handleButtonPress(){
  console.log('pressionou');
  setLoading(true);
}
  return (

    <View style={styles.container}>

      <View style={styles.form}>
        <Text style={styles.title}>New Siap</Text>

        <TextInput
          style={styles.input}
          placeholder="Login"
          keyboardType="default"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          keyboardType="default"
        />

      <Button 
      isLoading={loading}
      title='Logar' 
      onPress={() => 
      handleButtonPress()
      }/>

      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#344e86',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30
  },
  form: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor:"#fbf8fc",
    borderRadius: 8
    //borderWidth: 0.6
  },
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8
  }
});
