// Packages
import React, { FC } from 'react';

// Components
import { RestaurantInfoCard, MySearchbar } from '../../components';

// Definitions
import { IRestaurant } from '../../types';

// Styles
import { SafeAreaContainer, List } from './styles';

export const RestaurantsScreen: FC = () => {
  const mockRestaurant = {
    name: 'Some restaurant',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: [
      'https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg',
    ],
    address: '100 some random street',
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
  };

  return (
    <SafeAreaContainer>
      <MySearchbar />
      <List
        data={[{ name: 1 }, { name: 2 }]}
        renderItem={() => <RestaurantInfoCard restaurant={mockRestaurant} />}
        keyExtractor={(item: IRestaurant) => Number(item.name)}
      ></List>
    </SafeAreaContainer>
  );
};
