const specificEventReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SPECIFIC_EVENT':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default specificEventReducer;
  