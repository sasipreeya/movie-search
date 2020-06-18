import React, { useContext } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Context as SearchResultsContext } from '../context/SearchResultsContext';
import MovieItem from '../components/MovieItem';

const SearchResultsScreen = () => {
  const { state } = useContext(SearchResultsContext);

  return (
    <ScrollView>
      <View>
        {
          state.map((item) => (
            <MovieItem 
              movieItem={item} 
              title={item.title} 
              release_date={item.release_date} 
              overview={item.overview} 
              poster_path={item.poster_path} 
              key={item.id}
            />
          ))
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SearchResultsScreen;
