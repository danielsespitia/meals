// Packages
import { SafeAreaView, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components/native';

// Definitions
import { IRestaurant } from '../../types';

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
