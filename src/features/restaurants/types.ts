export interface IRestaurant {
  name: string;
  icon: string | null;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}
