import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ItemCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: item.imagem }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title} numberOfLines={1}>
        {item.titulo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '30%', 
    marginBottom: 15,
  },

  image: {
    width: '100%',
    aspectRatio: 2 / 3, 
    borderRadius: 8,
  },

  title: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
});