import createDataContext from './createDataContext';

const searchHistoryReducer = (state, action) => {
  switch (action.type) {
    case 'search_history':
      return [...state, action.payload];
    default:
      return state;
  }
};

const searchHistory = dispatch => (searchTerm) => {
  dispatch({ type: 'search_history', payload: searchTerm });
};

export const { Provider, Context } = createDataContext(
  searchHistoryReducer,
  { searchHistory },
  []
);
