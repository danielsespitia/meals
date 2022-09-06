// Packages
import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Card as PaperCard } from 'react-native-paper';

// Definitions
import { IRestaurant } from '../../types';

interface IRestaurantInfoCard {
  restaurant: IRestaurant;
}

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Card = styled(PaperCard)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Cover = styled(PaperCard.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard: FC<IRestaurantInfoCard> = ({ restaurant }) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5}>
      <Cover key={name} source={{ uri: `${photos[0]}` }} />
      <Title>{name}</Title>
    </Card>
  );
};
