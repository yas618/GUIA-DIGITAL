import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.logo}>GUIA DIGITAL</Text>

      <Text style={styles.title}>App de Filmes e Séries🎬</Text>

      <Text style={styles.description}>
        Aplicativo para visualizar filmes e séries.
        Explore títulos, veja detalhes e descubra novos conteúdos.
      </Text>

      <Text style={styles.version}>Versão 1.0</Text>

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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 20,
  },
  info: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  version: {
    color: '#888',
    marginTop: 20,
  },
});