// Packages
import React, { FC, useState } from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

// Components
import { RestaurantInfoCard } from '../../components';

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const List = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  const mockRestaurant = {
    name: 'Some restaurant',
    icon: null,
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
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <List>
        <RestaurantInfoCard restaurant={mockRestaurant} />
      </List>
    </SafeAreaContainer>
  );
};
