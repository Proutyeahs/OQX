import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// sends the payload to the event router
function* postEvent(action) {
    console.log(action.payload)
    try {
        yield axios.post('/api/event', action.payload)
    } catch (error) {
        console.log(error)
    }
}

// gets the events for the specific timeline
function* getEvent(action) {
    console.log(action.payload)
    try {
        const details = yield axios.get(`/api/event/${action.payload}`)
        yield put({ type: 'SET_EVENT', payload: details.data })
    } catch (err) {
        console.log(err)
    }
}

// gets the events for the admin to review
function* getEventAdmin(action) {
    console.log(action.payload)
    try {
        const details = yield axios.get(`/api/event/admin/${action.payload}`)
        yield put({ type: 'SET_EVENT', payload: details.data })
    } catch (err) {
        console.log(err)
    }
}

// gets the data for the specific event
function* getSpecificEvent(action) {
    console.log(action.payload)
    try {
        const details = yield axios.get(`/api/event/specific/${action.payload}`)
        yield put({ type: 'SET_SPECIFIC_EVENT', payload: details.data })
        console.log(details.data)
    } catch (err) {
        console.log(err)
    }
}

// gets the events that the user searches for
function* getSearchedEvents(action) {
    console.log('In GetSearchedEvents')
    console.log('action.payload in the getSearchedEvents:', action.payload) // Now we send this to the route
    try {
        let results = yield axios.post(`/api/event/search`, action.payload)
        console.log('Results.data: ',results.data)
        yield put({ type: 'SET_EVENT', payload: results.data })
    } catch (err) {
        console.error(err);
    }
}

// sends an update request for the specific event
function* putEvent(action) {
    console.log(action.payload)
    try {
        yield axios.put(`/api/event/${action.payload.id}`, action.payload)
    } catch (error) {
        console.log(error)
    }
}

// sends a delete request for the specific event
function* deleteEvent(action) {
    console.log(action.payload.id)
    console.log(action.payload.category_id)
    try {
        yield axios.delete(`/api/event/${action.payload.id}`)
        yield put({ type: 'GET_EVENT_ADMIN', payload: action.payload.category_id })
    } catch (err) {
        console.log(err)
    }
}

function* eventFormSaga() {
    yield takeLatest('POST_EVENT', postEvent)
    yield takeLatest('GET_EVENT', getEvent)
    yield takeLatest('GET_SPECIFIC_EVENT', getSpecificEvent)
    yield takeLatest('PUT_EVENT', putEvent)
    yield takeLatest('DELETE_EVENT', deleteEvent)
    yield takeLatest('GET_EVENT_ADMIN', getEventAdmin)
    yield takeLatest('GET_SEARCHED_EVENTS', getSearchedEvents)
}

export default eventFormSaga;