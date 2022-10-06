// holds the stories list for a specific event
const userStoriesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_STORIES':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default userStoriesReducer;
  