import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from './TabRoutes';


import AboutScreen from '../components/screens/AboutScreen';
import ContactScreen from '../components/screens/ContactScreen';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Início" component={TabRoutes} />
      <Drawer.Screen name="Sobre" component={AboutScreen} />
      <Drawer.Screen name="Contato" component={ContactScreen} />
    </Drawer.Navigator>
  );
}