import { StyleSheet, Text, View} from 'react-native';
import { useAuth } from '../../contexts/Auth';
import CalendarStrip from 'react-native-calendar-strip';

export  function Home() {
  const {authData} = useAuth();

  return (

    <View style={styles.container}>

      <View style={styles.Calendar}>
        <CalendarStrip
          style={{height:150, paddingTop: 20, paddingBottom: 10}}
          />
      </View>

      <View style={styles.form}>
      <Text style={styles.title}>Bem vindo, {authData?.name}!</Text>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30
  },
  Calendar: {
    backgroundColor:"#fbf8fc",
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#ded9e0",
    
  }
});
