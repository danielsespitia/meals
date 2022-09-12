// Packages
import { FC, useState } from 'react';
import { Searchbar } from 'react-native-paper';

// Styles
import { SearchContainer } from './styles';

export const MySearchbar: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </SearchContainer>
  );
};
