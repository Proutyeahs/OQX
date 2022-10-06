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

// gets all the stories for the admin to review
function* getUserStories(action) {
    console.log(action.payload)
    try{
        const details = yield axios.get(`/api/stories`)
        yield put({type : 'SET_STORIES', payload : details.data})
    } catch (err){
        console.log(err)
    }
}

// approves a story
function* approveUserStory(action) {
    console.log(action.payload)
    try {
        yield axios.put(`/api/stories/${action.payload}`)
        yield put({type : 'GET_USER_STORIES'})
    } catch (error) {
        console.log(error)
    }
}

// deletes a story
function* deleteStory(action) {
    console.log(action.payload)
    try{
        yield axios.delete(`/api/stories/${action.payload}`)
        yield put({type : 'GET_USER_STORIES'})
    } catch (err){
        console.log(err)
    }
}

function* userStoriesSaga() {
   yield takeLatest('POST_STORY', postStory)
   yield takeLatest('GET_STORY', getStory)
   yield takeLatest('GET_USER_STORIES', getUserStories)
   yield takeLatest('APPROVE_USER_STORY', approveUserStory)
   yield takeLatest('DELETE_STORY', deleteStory)
}

export default userStoriesSaga;