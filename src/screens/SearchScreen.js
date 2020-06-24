import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchHistoryList from '../components/SearchHistoryList';
import { Context as SearchHistoryContext } from '../context/SearchHistoryContext';
import { Context as SearchResultsContext } from '../context/SearchResultsContext';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const pageNo = 1;
  const { searchHistory } = useContext(SearchHistoryContext);
  const { fetchMovies } = useContext(SearchResultsContext);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          fetchMovies(term, pageNo);
          searchHistory(term);
          setTerm('');
          navigation.navigate('SearchResults', { term: term });
        }}
      />
      <SearchHistoryList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
