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
    try{
        const details = yield axios.get(`/api/event`)
        yield put({type : 'SET_EVENT', payload : details.data})
    } catch (err){
        console.log(err)
    }
}

function* eventFormSaga() {
   yield takeLatest('POST_EVENT', postEvent)
   yield takeLatest('GET_EVENT', getEvent)
}

export default eventFormSaga;