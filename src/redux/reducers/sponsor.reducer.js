// holds the resource list
const sponsorReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SPONSOR':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default sponsorReducer;