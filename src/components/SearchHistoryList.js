import React, { useContext } from 'react';
import { ListItem } from 'react-native-elements'
import { Context as SearchHistoryContext } from '../context/SearchHistoryContext';
import { Context as SearchResultsContext } from '../context/SearchResultsContext';
import { withNavigation } from 'react-navigation';

const SearchHistoryList = ({ navigation }) => {
  const pageNo = 1;
  const { state, searchHistory } = useContext(SearchHistoryContext);
  const { fetchMovies } = useContext(SearchResultsContext);

  if (!state.length) {
    return null;
  };

  return (
    <>
      {
        state.slice(0).reverse().map((item, index) => (
          <ListItem
            key={index}
            title={item}
            bottomDivider
            onPress={() => {
              fetchMovies(item, pageNo);
              searchHistory(item);
              navigation.navigate('SearchResults', { term: item });
            }}
          />
        ))
      }
    </>
  );
};

export default withNavigation(SearchHistoryList);