// Packages
import React, { FC, useContext } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { View, FlatList, ListRenderItem } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Components
import {
  RestaurantInfoCard,
  MySearchbar,
} from '~/features/restaurants/components';

// Context
import { RestaurantsContext } from '~/services/restaurants/restaurants.context';

// Definitions
import { IRestaurant } from '~/features/restaurants/types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// Styles
import { SafeAreaContainer } from '~/components/Spacer';

type RootStackParamList = {
  Restaurants: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Restaurants'>;

export const RestaurantsScreen: FC<{ navigation: Props }> = ({
  navigation,
}) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  const renderItem: ListRenderItem<IRestaurant> = ({ item }) => (
    <TouchableOpacity
      // Type navigate method
      onPress={() => navigation.navigate('Detail', { restaurant: item })}
    >
      <RestaurantInfoCard restaurant={item} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaContainer>
      <MySearchbar />
      {isLoading ? (
        // Refactor to styled component
        <View style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <ActivityIndicator
            size={50}
            style={{ marginLeft: -25 }}
            animating={true}
            color={Colors.blue300}
          />
        </View>
      ) : (
        <>
          <FlatList
            data={restaurants}
            renderItem={renderItem}
            keyExtractor={(item: IRestaurant) => item.name}
            contentContainerStyle={{ padding: 16 }}
          />
        </>
      )}
    </SafeAreaContainer>
  );
};
