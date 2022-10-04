const specificEventReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SPECIFIC_EVENT':
      console.log(action.payload)
      for (let event of action.payload)
        return { title: event.title, date: event.date, image: event.image, info: event.info, references: event.references, category_id: event.category_id, id: event.id };
    case 'PUT_TITLE':
      console.log(state)
      return { ...state, title: action.payload };
    case 'PUT_DATE':
      console.log(state)
      return { ...state, date: action.payload };
    case 'PUT_IMAGE':
      console.log(state)
      return { ...state, image: action.payload };
    case 'PUT_INFO':
      console.log(state)
      return { ...state, info: action.payload };
    case 'PUT_REFERENCES':
      console.log(state)
      return { ...state, references: action.payload };
    case 'PUT_CATEGORY_ID':
      console.log(state)
      return { ...state, category_id: action.payload };
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default specificEventReducer;
