import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>

      
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.imagem }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

     
      <View style={styles.content}>
        <Text style={styles.title}>{item.nome}</Text>

        <Text style={styles.description}>
          {item.descricao}
        </Text>

        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playText}>▶ Assistir</Text>
        </TouchableOpacity>

    
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#000', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  content: {
    padding: 20,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  description: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 20,
  },

  playButton: {
    backgroundColor: '#E50914',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },

  playText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  backButton: {
    borderWidth: 1,
    borderColor: '#555',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  backText: {
    color: '#fff',
  },
});