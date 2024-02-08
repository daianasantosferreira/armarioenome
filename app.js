import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.aa}>Daiana Aparecida Ferreira dos Santos</Text>
      <Text style={styles.abc}>Armario numero 02</Text>
       <Text style={styles.ultimo}>Notebook numero 14</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  abc: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'top',
  },
  aa: {
    flex: 1,
    border: '1px solid red',
    backgroundColor: '#ff3',
    fontSize: '50px',
   
   
  },
  ultimo: {
    flex: 1,
    border: '1px solid red',
    backgroundColor: '#ff3',
    
    marginTop: '100px',
  },
  
  
});
