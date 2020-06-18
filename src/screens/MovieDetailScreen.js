import React from 'react';
import { View, StyleSheet } from 'react-native';
import MovieDetail from '../components/MovieDetail';
import FavouriteButton from '../components/FavouriteButton';

const MovieDetailScreen = ({ navigation }) => {
  const movieItem = navigation.getParam('item');

  return (
    <View>
      <MovieDetail movieItem={movieItem} />
      <FavouriteButton movieItem={movieItem} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MovieDetailScreen;
