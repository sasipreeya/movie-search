import createDataContext from './createDataContext';

const FavouriteReducer = (state, action) => {
  switch (action.type) {
    case 'add_favourite':
      return [...state, action.payload];
    case 'remove_favourite':
      return state.filter(movie => movie.id !== action.payload);
    default:
      return state;
  }
};

const addFavourite = dispatch => (movie) => {
  dispatch({ type: 'add_favourite', payload: movie });
};

const removeFavourite = dispatch => (movie_id) => {
  dispatch({ type: 'remove_favourite', payload: movie_id });
};

export const { Provider, Context } = createDataContext(
  FavouriteReducer,
  { addFavourite, removeFavourite },
  []
);
