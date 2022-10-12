import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* SagaTemplate() {
    yield takeEvery('GET_ABOUT_PAGE', getAboutPage)
}

function* getAboutPage(action) {
    try {
        const response = yield axios.get('/This_Should_Match_Between_The_Saga_And_Server')
        yield put({
            type: 'THIS_WILL_TRIGGER_A_REDUCER',
            payload: response.data
        })
    }
    catch (error) {
        ('error in SAGA, this is what you were trying to send:', action.payload)
        ('error in SAGA', error)
    }
};

export default SagaTemplate;