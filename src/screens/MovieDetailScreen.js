import React from 'react';
import { View, StyleSheet } from 'react-native';
import MovieDetail from '../components/MovieDetail';

const MovieDetailScreen = ({ navigation }) => {
  const movieItem = navigation.getParam('item');

  return (
    <View>
      <MovieDetail movieItem={movieItem} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MovieDetailScreen;
