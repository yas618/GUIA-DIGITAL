import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './src/navigation/DrawerRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}