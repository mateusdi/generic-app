import { StyleSheet, Text, View} from 'react-native';


export  function Sobre1() {

  return (

    <View style={styles.container}>

      <View style={styles.form}>
        <Text style={styles.title}>Sobre 1.1</Text>
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
