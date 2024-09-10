import { StyleSheet, Text, View} from 'react-native';
import { Link } from '@react-navigation/native';
import {LocaleConfig, Calendar} from 'react-native-calendars';

export  function Sobre() {
  LocaleConfig.locales['pt-Br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
    today: "Hoje"
  };
  LocaleConfig.defaultLocale = 'pt-Br';
  return (

    <View style={styles.container}>
      <Calendar/>
      <View style={styles.form}>
      

        <Link to={{ screen: 'Sobre1'}}>
        <Text style={styles.title}> >SubMenu</Text>
        </Link>

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
    fontSize: 30,
    color:'blue'
  },
  form: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor:"#fbf8fc",
    alignItems: 'center',
    borderRadius: 8
  }
});
