import axios from 'axios';
import {takeLatest} from 'redux-saga/effects';

// sends the payload to the event router
function* postEvent(action) {
    console.log(action.payload)
    try {
        yield axios.post('/api/event', action.payload)
    } catch (error) {
        console.log(error)
    }
}

function* eventFormSaga() {
   yield takeLatest('POST_EVENT', postEvent)
}

export default eventFormSaga;