import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchHistoryList from '../components/SearchHistoryList';
import { Context as SearchHistoryContext } from '../context/SearchHistoryContext';
import { Context as SearchResultsContext } from '../context/SearchResultsContext';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const { searchHistory } = useContext(SearchHistoryContext);
  const { fetchMovies } = useContext(SearchResultsContext);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          fetchMovies(term);
          searchHistory(term);
          setTerm('');
          navigation.navigate('SearchResults');
        }}
      />
      <SearchHistoryList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
