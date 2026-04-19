import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>GUIA DIGITAL</Text>

      <Text style={styles.title}>Contato</Text>

      <View style={styles.card}>
        <Text style={styles.label}>📧 Email</Text>
        <Text style={styles.text}>guia.digital@gmail.com</Text>

        <Text style={styles.label}>📱 WhatsApp</Text>
        <Text style={styles.text}>(19) 89345-1034</Text>

        <Text style={styles.label}>📸 Instagram</Text>
        <Text style={styles.text}>@guiadigital</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => Linking.openURL('mailto:contato@email.com')}
      >
        <Text style={styles.buttonText}>Enviar Email</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    color: '#E50914',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: '#E50914',
    fontSize: 14,
    marginTop: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#E50914',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});