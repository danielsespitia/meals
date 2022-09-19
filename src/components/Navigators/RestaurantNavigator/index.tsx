// Packages
import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

// Screens
import { RestaurantsScreen } from '../../../features/restaurants';
import { RestaurantDetailsScreen } from '../../../features/restaurants/screens/RestaurantDetailsScreen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen name="List" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="Detail"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
