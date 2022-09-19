// Packages
import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Screens
import { RestaurantsNavigator } from '~/components/Navigators';

export const AppNavigator: FC = () => {
  const Tab = createBottomTabNavigator();

  interface ITabIcons {
    Restaurants: string;
    Map: string;
    Settings: string;
  }

  const TAB_ICON: ITabIcons = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings',
  };

  const tabIconGen = (routeName: keyof ITabIcons) => {
    const tabIcon = TAB_ICON[routeName] as any;
    return tabIcon;
  };

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
    { name: 'Restaurants', component: RestaurantsNavigator },
    { name: 'Map', component: MapScreen },
    { name: 'Settings', component: SettingsScreen },
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size, color }) => {
            const iconName = tabIconGen(route.name as keyof ITabIcons);
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {!!tabs &&
          tabs.map((tab, i) => (
            <Tab.Screen key={i} name={tab.name} component={tab.component} />
          ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
