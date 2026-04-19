import { View, FlatList, StyleSheet, Text } from 'react-native';
import filmes from '../data/filmes.json';
import ItemCard from '../ItemCard';

export default function MoviesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes</Text>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <ItemCard
            item={item}
            onPress={() => navigation.navigate('Detalhes', { item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  title: {
    color: '#E50914',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 15,
  },
});