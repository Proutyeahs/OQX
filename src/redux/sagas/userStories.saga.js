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

// gets the stories for the specific event
function* getStory(action) {
    console.log(action.payload)
    try{
        const details = yield axios.get(`/api/stories/${action.payload}`)
        yield put({type : 'SET_STORIES', payload : details.data})
    } catch (err){
        console.log(err)
    }
}

function* userStoriesSaga() {
   yield takeLatest('POST_STORY', postStory)
   yield takeLatest('GET_STORY', getStory)
}

export default userStoriesSaga;