import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MoviesScreen from '../components/screens/MoviesScreen';
import SeriesScreen from '../components/screens/SeriesScreen';
import DetailsScreen from '../components/screens/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MoviesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FilmesLista" component={MoviesScreen} />
      <Stack.Screen name="Detalhes" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function SeriesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SeriesLista" component={SeriesScreen} />
      <Stack.Screen name="Detalhes" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Filmes" component={MoviesStack} />
      <Tab.Screen name="Séries" component={SeriesStack} />
    </Tab.Navigator>
  );
}