// reducer that holds the resource info for editing
const sponsorSpecificReducer = (state = { levelOfDonation: '' }, action) => {
    switch (action.type) {

        // sets the reducer to an object with all the data from the database
        case 'SET_SPECIFIC_SPONSOR':
            console.log(action.payload)
            for (let sponsor of action.payload)
                return {
                    id: sponsor.id,
                    company: sponsor.company,
                    image: sponsor.image,
                    levelOfDonation: sponsor.levelOfDonation,
                };

        //clears reducer
        case 'CLEAR_SPONSOR':
            return { levelOfDonation: '' };

        case 'PUT_ID':
            console.log(state)
            return { ...state, id: action.payload };
        case 'PUT_COMPANY':
            console.log(state)
            return { ...state, company: action.payload };
        case 'PUT_IMAGE_SPONSOR':
            console.log(state)
            return { ...state, image: action.payload };
        case 'PUT_LEVELOFDONATION':
            console.log(state)
            return { ...state, levelOfDonation: action.payload };
        default:
            return state;
    }
};

export default sponsorSpecificReducer;
