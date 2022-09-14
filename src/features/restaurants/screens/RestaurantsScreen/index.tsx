// Packages
import React, { FC, useContext } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { View, FlatList, ListRenderItem } from 'react-native';

// Components
import { RestaurantInfoCard, MySearchbar } from '../../components';

// Context
import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context';

// Definitions
import { IRestaurant } from '../../types';

// Styles
import { SafeAreaContainer } from './styles';
import { colors } from '../../../../infrastructure/theme/colors';

export const RestaurantsScreen: FC = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  const renderItem: ListRenderItem<IRestaurant> = ({ item }) => (
    <RestaurantInfoCard restaurant={item} />
  );

  return (
    <SafeAreaContainer>
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
          <MySearchbar />
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
