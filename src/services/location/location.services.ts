// Packages
import camelize from 'camelize-ts';

// Data & Definitions
import { locations, ICity } from '~/services/location/location.mock';
import { ICities } from '~/services/restaurants/mock';

export const locationRequest = (searchTerm: string): Promise<ICity> => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject('not found');
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result: ICity): keyof ICities => {
  const formattedResponse = camelize(result);
  const { geometry = { location: { lng: 4.402464, lat: 51.219448 } } } =
    formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  const coordinates = `${lat},${lng}` as keyof ICities;

  return coordinates;
};
