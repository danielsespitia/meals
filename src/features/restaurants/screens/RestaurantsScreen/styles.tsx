// Packages
import { SafeAreaView, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  flex: 1;
`;
