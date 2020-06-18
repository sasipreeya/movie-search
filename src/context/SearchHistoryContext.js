import createDataContext from './createDataContext';

const searchHandler = (state, action) => {
  if (state != []) {
    state.map((item) => {
      if ((item = action.payload)) {
        state = state.filter(
          (item) => item !== action.payload
        );
      }
    });
  }
  state.push(action.payload);
  return state;
};

const searchHistoryReducer = (state, action) => {
  switch (action.type) {
    case 'search_history':
      return searchHandler(state, action);
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
