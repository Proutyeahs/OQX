import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//admin posting new sponsor
function* postSponsor(action) {
    console.log("in post sponsor", action.payload)
    try{
        yield axios.post(`api/sponsor`, action.payload)
    } catch (err) {
        console.log(err)
    }
}


// gets the resources for all users to view
function* getSponsor(action) {
    console.log(action)
    try {
        const resource = yield axios.get(`/api/sponsor`)
        yield put({ type: 'SET_SPONSOR', payload: resource.data })
    } catch (err) {
        console.log(err)
    }
}

function* getSpecificSponsor(action) {
    console.log(action.payload)
    try {
        const details = yield axios.get(`/api/sponsor/${action.payload}`)
        yield put ({ type: 'SET_SPECIFIC_SPONSOR', payload: details.data})
        console.log(details.data)
    } catch (err) {
        console.log(err)
    }
}

function* sponsorSaga() {
    yield takeLatest ('FETCH_SPONSOR', getSponsor)
    yield takeLatest ('GET_SPECIFIC_SPONSOR', getSpecificSponsor)
    yield takeLatest ('POST_SPONSOR', postSponsor)
}

export default sponsorSaga;