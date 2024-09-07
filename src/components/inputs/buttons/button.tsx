import { StyleSheet, Text, Pressable, ActivityIndicator} from 'react-native';

interface ButtonProps{
    title: string;
    onPress: ()=> void;
    isLoading?: boolean
}

export function Button({title, onPress, isLoading = false}: ButtonProps) {
  return (
    <Pressable disabled={isLoading} style={styles.button} onPress={onPress}>
        {isLoading? <ActivityIndicator color='#FFF'/> : <Text style={styles.title}>{title}</Text>}
    
  </Pressable>
);
}

const styles = StyleSheet.create({
    button: {
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor:'#344e86',
      alignSelf: 'center',
      justifyContent: 'center',
      width: '50%',
      borderRadius: 8
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize:15
    }
  });
  