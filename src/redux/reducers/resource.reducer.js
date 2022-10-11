// holds the resource list
const resourceReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RESOURCE':
        return action.payload;
      case 'POST_RESOURCE':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default resourceReducer;