import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import { Context as SearchHistoryContext } from '../context/SearchHistoryContext';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const { state, searchHistory } = useContext(SearchHistoryContext);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          searchHistory(term);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
