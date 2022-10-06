import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

// sends the payload to the event router
function* postStory(action) {
    console.log(action.payload)
    try {
        yield axios.post('/api/stories', action.payload)
    } catch (error) {
        console.log(error)
    }
}

function* userStoriesSaga() {
   yield takeLatest('POST_STORY', postStory)
}

export default userStoriesSaga;