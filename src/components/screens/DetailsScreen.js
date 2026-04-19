import { View, Text, Image, Button } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={{ padding: 10 }}>
      <Image
        source={{ uri: item.imagem }}
        style={{ width: '100%', height: 200 }}
      />

      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        {item.nome}
      </Text>

      <Text>{item.categoria}</Text>

      <Text>{item.descricaoCompleta}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}