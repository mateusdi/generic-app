import { StyleSheet, TextInput} from 'react-native';

interface InputProps{
 
    placeholder?: string;
    keyboardType: any;
    value?: any;
    onChangeText?: any;
}

export function Input({placeholder, keyboardType='default', value, onChangeText}: InputProps) {
  return (
    <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          value={value}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50
      }
  });
  