// Packages
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

export const List = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
