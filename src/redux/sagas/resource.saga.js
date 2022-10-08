import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// gets the resources for admin to view
function* getResource(action) {
    console.log(action.payload)
    try {
        const resource = yield axios.get(`/api/resource`)
        yield put({ type: 'SET_RESOURCE', payload: resource.data })
    } catch (err) {
        console.log(err)
    }
}

function* resourceSaga() {
    yield takeLatest('GET_RESOURCE', getResource)
}

export default resourceSaga;

