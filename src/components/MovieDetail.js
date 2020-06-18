import React from 'react';
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const MovieDetail = ({ movieItem }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w92${
              movieItem.poster_path
            }`,
          }}
          style={styles.imageSize}
        />
      </View>
      <View style={{ padding: 15 }}>
        <Text style={styles.titleText}>{movieItem.title}</Text>
        <Text style={styles.subTitleText}>
          Average votes: {movieItem.vote_average}
        </Text>
        <Text style={styles.overviewText} numberOfLines={4}>
          {movieItem.overview}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageSize: {
    width: 150,
    height: 250,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
  },
  subTitleText: {
    fontSize: 16,
    margin: 5,
  },
  overviewText: {
    fontSize: 14,
    margin: 5,
  },
});

export default MovieDetail;