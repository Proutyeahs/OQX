// reducer that holds the resource info for editing
const resourceSpecificReducer = (state = {category_id:''}, action) => {
    switch (action.type) {

        // sets the reducer to an object with all the data from the database
        case 'SET_SPECIFIC_RESOURCE':
            console.log(action.payload)
            for (let resource of action.payload)
                return {
                    id: resource.id,
                    name: resource.name,
                    phoneNumber: resource.phoneNumber,
                    address: resource.address,
                    category_id: resource.category_id,
                };
        case 'PUT_ID':
            console.log(state)
            return { ...state, id: action.payload };
        case 'PUT_NAME':
            console.log(state)
            return { ...state, name: action.payload };
        case 'PUT_NUMBER':
            console.log(state)
            return { ...state, phoneNumber: action.payload };
        case 'PUT_ADDRESS':
            console.log(state)
            return { ...state, address: action.payload };
        case 'PUT_CATEGORY_ID':
            console.log(state)
            return { ...state, category_id: action.payload };
        default:
            return state;
    }
};

export default resourceSpecificReducer;
