import { takeEvery, put } from "redux-saga/effects";
import { listUsers, getUsers } from "../modules/listusers";
import axios from "axios";
import { URL_2 } from "../constants";

function* listUsersWorker() {
    try {
        const res = yield axios.get(URL_2);

        yield put(listUsers(res.data.data));
    } catch (error) {
        console.error();
    }
}
export default function* listUsersWatcher() {
    yield takeEvery(getUsers, listUsersWorker);
}
