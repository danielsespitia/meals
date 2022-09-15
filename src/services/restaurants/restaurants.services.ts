// Packages
import camelize, { Camelize } from 'camelize-ts';

// Data
import { cities, mockImages, ICities } from './mock';

// Definitions
import { IRestaurant } from '../../features/restaurants/types';

interface IRestaurantResponse {
  business_status?: string;
  geometry: {
    location: { lat: number; lng: number };
    viewport?: {
      northeast: { lat: number; lng: number };
      southwest: { lat: number; lng: number };
    };
  };
  icon?: string;
  name: string;
  address?: string;
  opening_hours: { open_now: boolean };
  photos: string[];
  place_id: string;
  plus_code: { compound_code: string; global_code: string };
  price_level: number;
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
}

export const restaurantsRequest = (
  location: keyof ICities = '51.219448,4.402464'
) => {
  return new Promise((resolve, reject) => {
    const city = cities[location];
    if (!city) {
      reject('not found');
    }

    resolve(city.results);
  });
};

export const restaurantsTransform = (
  results: IRestaurantResponse[] | unknown = []
): Camelize<IRestaurant[]> => {
  const myResults = results as IRestaurantResponse[];

  const mappedResults = myResults.map((restaurant): IRestaurant => {
    const randomizedMockPhoto = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      name: restaurant.name,
      icon:
        restaurant.icon ||
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
      photos: randomizedMockPhoto,
      address: restaurant.address || '123 random street',
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      rating: restaurant.rating,
      isClosedTemporarily: restaurant?.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  return camelize(mappedResults);
};
