// Packages
import React, { FC, ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

export const BottomNavigator: FC<{ children: ReactNode }> = ({ children }) => {
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

  return (
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
      {children}
    </Tab.Navigator>
  );
};
