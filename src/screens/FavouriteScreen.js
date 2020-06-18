import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MovieItem from '../components/MovieItem';
import { Context as FavouriteContext } from '../context/FavouriteContext';

const FavouriteScreen = () => {
  const { state } = useContext(FavouriteContext);

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

export default FavouriteScreen;
