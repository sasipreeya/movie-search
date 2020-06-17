import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as SearchResultsContext } from '../context/SearchResultsContext';

const SearchResultsScreen = () => {
  const { state } = useContext(SearchResultsContext);

  return (
    <View>
      <Text>SearchResultsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchResultsScreen;
