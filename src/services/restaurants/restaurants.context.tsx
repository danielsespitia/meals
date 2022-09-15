// Packages
import React, {
  FC,
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';
import { IRestaurant } from '../../features/restaurants/types';

// Services
import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurants.services';

// Context
import { LocationContext } from '../location/location.context';

interface IRestaurantContextValue {
  restaurants: IRestaurant[];
  isLoading: boolean;
  error: null | string;
}

const restaurantContextInitValue: IRestaurantContextValue = {
  restaurants: [],
  isLoading: false,
  error: null,
};

export const RestaurantsContext = createContext(restaurantContextInitValue);

export const RestaurantsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const locationContext = useContext(LocationContext);

  const { location } = locationContext;

  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(location)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results as IRestaurant[]);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
