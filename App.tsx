// Packages
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import { BottomNavigator } from './src/components/BottomNavigator';

// Screens
import { RestaurantsScreen } from './src/features/restaurants';

// Context
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';

// Theme
import { theme } from './src/infrastructure/theme';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {
  const Tab = createBottomTabNavigator();
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const SettingsScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  };

  const MapScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Map</Text>
      </View>
    );
  };

  const tabs = [
    { name: 'Restaurants', component: RestaurantsScreen },
    { name: 'Map', component: MapScreen },
    { name: 'Settings', component: SettingsScreen },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <BottomNavigator>
                {!!tabs &&
                  tabs.map((tab, i) => (
                    <Tab.Screen
                      key={i}
                      name={tab.name}
                      component={tab.component}
                    />
                  ))}
              </BottomNavigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
