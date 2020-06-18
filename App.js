import React from 'react';
import { Button } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import SearchResultsScreen from './src/screens/SearchResultsScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';
import { Provider as SearchResultsProvider } from './src/context/SearchResultsContext';
import { Provider as SearchHistoryProvider } from './src/context/SearchHistoryContext';
import { Provider as FavouriteProvider } from './src/context/FavouriteContext';

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = ({ navigation }) => ({
  headerRight: () =>
    <Button
      title="Favourite"
      type="clear"
      titleStyle={{
        fontSize: 16
      }}
      onPress={() => navigation.navigate('Favourite')}
    />
});

const MovieDetailStack = createStackNavigator({
  MovieDetail: MovieDetailScreen,
});

MovieDetailStack.navigationOptions = ({ navigation }) => ({
  headerRight: () =>
    <Button
      title="Back to Search"
      type="clear"
      titleStyle={{
        fontSize: 14
      }}
      onPress={() => navigation.navigate('SearchStack')}
    />
});

const navigator = createStackNavigator(
  {
    SearchStack,
    SearchResults: SearchResultsScreen,
    MovieDetailStack,
    Favourite: FavouriteScreen
  },
  {
    initialRouteName: 'SearchStack',
    defaultNavigationOptions: () => ({
      title: 'Movies Search'
    })
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <SearchHistoryProvider>
      <SearchResultsProvider>
        <FavouriteProvider>
          <App />
        </FavouriteProvider>
      </SearchResultsProvider>
    </SearchHistoryProvider>
  );
};
