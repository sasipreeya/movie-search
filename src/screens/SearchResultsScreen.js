import React, { useState, useContext } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Context as SearchResultsContext } from "../context/SearchResultsContext";
import MovieItem from "../components/MovieItem";

const SearchResultsScreen = ({ navigation }) => {
  const term = navigation.getParam('term');
  const [pageNo, setPageNo] = useState(1);
  const { state, fetchMovies } = useContext(SearchResultsContext);

  const onPreviousPage = () => {
    if (pageNo !== 1) {
      const previousPage = pageNo - 1;
      fetchMovies(term, previousPage);
      setPageNo(previousPage);
    }
  }

  const onNextPage = () => {
    const nextPage = pageNo + 1;
    fetchMovies(term, nextPage);
    setPageNo(nextPage);
  }

  return (
    <ScrollView>
      <View>
        {state.map((item) => (
          <MovieItem
            movieItem={item}
            title={item.title}
            release_date={item.release_date}
            overview={item.overview}
            poster_path={item.poster_path}
            key={item.id}
          />
        ))}
      </View>
      <View style={styles.pagination}>
        <TouchableOpacity onPress={onPreviousPage}>
          <Icon name="chevron-left" size={15} style={styles.icon} />
        </TouchableOpacity>
        <Text>{pageNo}</Text>
        <TouchableOpacity onPress={onNextPage}>
          <Icon name="chevron-right" size={15} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: 100,
    margin: 15,
  },
  icon: {
    color: "#696969"
  }
});

export default SearchResultsScreen;
