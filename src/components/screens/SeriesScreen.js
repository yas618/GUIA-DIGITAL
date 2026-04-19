import { View, FlatList, StyleSheet, Text } from 'react-native';
import series from '../data/series.json';
import ItemCard from '../ItemCard';

export default function SeriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Séries</Text>

      <FlatList
        data={series}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} // 🔥 3 COLUNAS
        contentContainerStyle={{ paddingHorizontal: 10 }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
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