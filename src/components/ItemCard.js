import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ItemCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={styles.title}>{item.nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 6,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});