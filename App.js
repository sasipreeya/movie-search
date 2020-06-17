import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import SearchResultsScreen from './src/screens/SearchResultsScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';
import { Provider as SearchProvider } from './src/context/SearchContext';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    SearchResults: SearchResultsScreen,
    MovieDetail: MovieDetailScreen,
    Favourite: FavouriteScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Movies Search'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <SearchProvider>
      <App />
    </SearchProvider>
  );
};
