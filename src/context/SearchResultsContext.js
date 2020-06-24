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

const fetchMovies = dispatch => async (searchTerm, pageNo) => {
  const response = await moviesApi.get('/api/movies/search', {
    params: {
      query: searchTerm,
      page: pageNo
    }
  });
  dispatch({ type: 'search_movies', payload: response.data.results });
};

export const { Provider, Context } = createDataContext(
  searchResultsReducer,
  { fetchMovies },
  []
);
