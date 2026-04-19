import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MoviesScreen from '../components/screens/MoviesScreen';
import SeriesScreen from '../components/screens/SeriesScreen';
import DetailsScreen from '../components/screens/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// STACK DE FILMES
function MoviesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FilmesLista" component={MoviesScreen} />
      <Stack.Screen name="Detalhes" component={DetailsScreen} />
    </Stack.Navigator>
  );
}


function SeriesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SeriesLista" component={SeriesScreen} />
      <Stack.Screen name="Detalhes" component={DetailsScreen} />
    </Stack.Navigator>
  );
}


export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: '#222',
        },
        tabBarActiveTintColor: '#E50914',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tab.Screen name="Filmes" component={MoviesStack} />
      <Tab.Screen name="Séries" component={SeriesStack} />
    </Tab.Navigator>
  );
}