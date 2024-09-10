import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import { Button } from '../../components/inputs/buttons/Button'
import { Input } from '../../components/inputs/inputs/Input'
import { useState } from 'react';
import { useAuth } from '../../contexts/Auth'



export  function Login() {
  const[loading, setLoading] = useState(false);
  const[login, setLogin] = useState('');
  const[senha, setSenha] = useState('');
  const {signIn} = useAuth();

  async function handleLogin(){
    setLoading(true);
    await signIn(login,senha);
    setLoading(false);
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>

        <Input
          placeholder="Login"
          keyboardType="default"
          onChangeText={setLogin}
        />

        <Input
          placeholder="Senha"
          keyboardType="default"
          onChangeText={setSenha}
        />

        <Button 
        isLoading={loading}
        title='Logar' 
        onPress={() => handleLogin()}
        />

      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#344e86',
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
    borderRadius: 8
  }
});
