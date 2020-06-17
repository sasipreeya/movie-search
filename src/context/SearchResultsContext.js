import createDataContext from './createDataContext';
import moviesApi from '../api/movies';

const searchResultsReducer = (state, action) => {
  switch (action.type) {
    case 'search_movies':
      return action.payload;
    default:
      return state;
  }
};

const fetchMovies = dispatch => async (searchTerm) => {
  const response = await moviesApi.get('/api/movies/search', {
    params: {
      query: searchTerm
    }
  });
  dispatch({ type: 'search_movies', payload: response.data });
};

export const { Provider, Context } = createDataContext(
  searchResultsReducer,
  { fetchMovies },
  []
);
