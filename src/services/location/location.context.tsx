// Packages
import React, { FC, ReactNode, useState, useEffect } from 'react';
import { ICities } from '~/services/restaurants/mock';

// Services
import {
  locationRequest,
  locationTransform,
} from '~/services/location/location.services';

interface ILocationContextValue {
  isLoading: boolean;
  error: null | string;
  location: keyof ICities;
  search: (searchKeyword: string) => void;
  keyword: string;
}

const locationContextInitValue: ILocationContextValue = {
  isLoading: false,
  error: null,
  location: '51.219448,4.402464',
  search: () => {},
  keyword: 'Antwerp',
};

export const LocationContext = React.createContext(locationContextInitValue);

export const LocationContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const {
    keyword: initKeyword,
    location: initLocation,
    isLoading: initIsLoading,
    error: initError,
  } = locationContextInitValue;

  const [keyword, setKeyword] = useState<string>(initKeyword);
  const [location, setLocation] = useState<keyof ICities>(initLocation);
  const [isLoading, setIsLoading] = useState<boolean>(initIsLoading);
  const [error, setError] = useState<null | string>(initError);

  const onSearch = (searchKeyword: string) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) return;

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
