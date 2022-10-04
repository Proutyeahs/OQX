import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

// sends the payload to the event router
function* postEvent(action) {
    console.log(action.payload)
    try {
        yield axios.post('/api/event', action.payload)
    } catch (error) {
        console.log(error)
    }
}

function* getEvent(action) {
    console.log(action.payload)
    try{
        const details = yield axios.get(`/api/event/${action.payload}`)
        yield put({type : 'SET_EVENT', payload : details.data})
    } catch (err){
        console.log(err)
    }
}

function* getSpecificEvent(action) {
    console.log(action.payload)
    try{
        const details = yield axios.get(`/api/event/specific/${action.payload}`)
        yield put({type : 'SET_SPECIFIC_EVENT', payload : details.data})
        console.log(details.data)
    } catch (err){
        console.log(err)
    }
}

function* putEvent(action) {
    console.log(action.payload)
    try {
        yield axios.put(`/api/event/${action.payload.id}`, action.payload)
    } catch (error) {
        console.log(error)
    }
}

function* eventFormSaga() {
   yield takeLatest('POST_EVENT', postEvent)
   yield takeLatest('GET_EVENT', getEvent)
   yield takeLatest('GET_SPECIFIC_EVENT', getSpecificEvent)
   yield takeLatest('PUT_EVENT', putEvent)
}

export default eventFormSaga;