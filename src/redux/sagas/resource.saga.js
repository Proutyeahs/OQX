import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//admin posting new resource
function* postResource(action) {
    console.log("in post resource", action.payload)
    try {
        yield axios.post(`api/resource`, action.payload)
    } catch (err) {
        console.log(err)
    }
}

// gets the resources for all users to view
function* getResource(action) {
    console.log(action)
    try {
        const resource = yield axios.get(`/api/resource`)
        yield put({ type: 'SET_RESOURCE', payload: resource.data })
    } catch (err) {
        console.log(err)
    }
}

//get specific resource (admin only)
function* getSpecificResource(action) {
    console.log(action.payload)
    try {
        const details = yield axios.get(`/api/resource/${action.payload}`)
        yield put({ type: 'SET_SPECIFIC_RESOURCE', payload: details.data })
        console.log(details.data)
    } catch (err) {
        console.log(err)
    }
}

//admin edit resource info
function* putResource(action) {
    console.log(action.payload)
    try {
        yield axios.put(`/api/resource/${action.payload.id}`, action.payload)
    } catch (error) {
        console.log(error)
    }
}

//admin delete resource info
function* deleteResource(action) {
    console.log(action.payload)
    try {
        yield axios.delete(`/api/resource/${action.payload.id}`)
        yield put({ type: 'FETCH_RESOURCE' })
    } catch (err) {
        console.log(err)
    }
}

//listens for sagas to be called, then runs the corresponding function
function* resourceSaga() {
    yield takeLatest('FETCH_RESOURCE', getResource)
    yield takeLatest('POST_RESOURCE', postResource)
    yield takeLatest('GET_SPECIFIC_RESOURCE', getSpecificResource)
    yield takeLatest('PUT_RESOURCE', putResource)
    yield takeLatest('DELETE_RESOURCE', deleteResource)
}

export default resourceSaga;