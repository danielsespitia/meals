// Packages
import React, { FC } from 'react';
import { SvgXml } from 'react-native-svg';

// Styles
import {
  Card,
  Cover,
  Info,
  Title,
  IconsContainer,
  Rating,
  OpeningTimes,
  Icon,
  Address,
  open,
  star,
} from './styles';
import { Spacer } from '../../../../components';
import { Text } from '../../../../components';

// Definitions
import { IRestaurant } from '../../types';

interface IRestaurantInfoCard {
  restaurant: IRestaurant;
}

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

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5}>
      <Cover key={name} source={{ uri: `${photos[0]}` }} />
      <Info>
        <Text variant="label">{name}</Text>
        <IconsContainer>
          <Rating>
            {!!ratingArray &&
              ratingArray.map((e, i) => (
                <SvgXml key={i} xml={star} width={20} height={20} />
              ))}
          </Rating>
          <OpeningTimes>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              {<Icon source={{ uri: icon }} />}
            </Spacer>
          </OpeningTimes>
        </IconsContainer>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};
