const aboutReducer = (state = [], action) => { 
  switch (action.type) {
    case 'GET_ABOUT': 
    return action.payload;
    default:
      return state;
  }
};

export default aboutReducer;