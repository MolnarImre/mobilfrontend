import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Elso from './Elso';
import Tipusok from './Tipusok';
import Kereses from './Kereses';
import Feltoltes from './Feltoltes';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Elso_lap({ navigation }) {
  return (
    
    <Elso />
  );
}

function Tipus_fugg({ navigation }) {
  return (
    
    <Tipusok />
  );
}

function Keres({ navigation }) {
  return (
    
    <Kereses />
  );
}

function Feltolt({navigation}){
    return(
        <Feltoltes />
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Első" component={Elso_lap} />
        <Drawer.Screen name="Tipusok" component={Tipus_fugg} />
        <Drawer.Screen name="Keresés" component={Keres} />
        <Drawer.Screen name="Feltöltés" component={Feltolt} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}