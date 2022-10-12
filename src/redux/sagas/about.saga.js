import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* aboutSaga() {
    yield takeEvery('GET_ABOUT_PAGE', getAboutPage)
}

function* getAboutPage(action) {
    try {
        yield axios.get('/api/about')
    }
    catch (error) {
        ('error in SAGA, this is what you were trying to send:', action.payload)
        ('error in SAGA', error)
    }
};

export default aboutSaga;