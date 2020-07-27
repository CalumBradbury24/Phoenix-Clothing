import { takeLatest, call, put, all } from 'redux-saga/effects';
import shopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
}from './shop.actions'

//All generator functions must have yields in them
//Functions pause whenever they hit a yield until .next is called
export function* fetchCollectionsAsync(){
    yield console.log('I am fired');

    try{
        const collectionRef = firestore.collection("collections"); //collections is the collection in firebase store
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }

}

export function* fetchCollectionsStart(){
    yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync) 
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)]);
}