import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Divider, Text } from "react-native-elements";

const MovieItem = ({ movieItem }) => {
  return (
    <TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imagePosition}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w92${movieItem.poster_path}`,
            }}
            style={styles.imageSize}
          />
        </View>

        <View style={styles.textPosition}>
          <Text style={styles.titleText}>{movieItem.title}</Text>
          <Text style={styles.subTitleText}>{movieItem.release_date}</Text>
          <Text style={styles.overviewText} numberOfLines={4}>
            {movieItem.overview}
          </Text>
        </View>
      </View>
      <Divider style={{ backgroundColor: "gray" }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  imageSize: {
    width: 100,
    height: 140,
  },
  textPosition: {
    width: 250,
    padding: 10,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitleText: {
    fontSize: 16,
    opacity: 0.5,
  },
  overviewText: {
    fontSize: 16,
  },
});

export default MovieItem;