// Packages
import { FC, useState, useContext } from 'react';
import { Searchbar } from 'react-native-paper';

// Context
import { LocationContext } from '../../../../services/location/location.context';

// Styles
import { SearchContainer } from './styles';

export const MySearchbar: FC = () => {
  const context = useContext(LocationContext);
  const { search, keyword } = context;

  const [searchKeyword, setSearchKeyword] = useState<string>(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
        value={searchKeyword}
      />
    </SearchContainer>
  );
};
