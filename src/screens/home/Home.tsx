import { StyleSheet, Text, View} from 'react-native';
import { useAuth } from '../../contexts/Auth';


export  function Home() {
  const {authData} = useAuth();

  return (

    <View style={styles.container}>

      <View style={styles.form}>
      <Text style={styles.title}>Bem vindo, {authData?.name}!</Text>
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
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor:"#fbf8fc",
    borderRadius: 8
  }
});
