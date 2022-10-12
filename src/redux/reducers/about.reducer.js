const reducerTemplate = (state = {}, action) => { 
  switch (action.type) {
    case 'THIS_WILL_TRIGGER_A_REDUCER': 
    return { ...state, ...payload }

    default:
      return state;
  }
};



export default reducerTemplate;