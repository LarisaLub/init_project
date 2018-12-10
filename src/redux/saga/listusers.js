import { takeEvery, put } from "redux-saga/effects";
import { listUsers, getUsers } from "../modules/listusers";
import axios from "axios";

function* listUsersWorker() {
    try {
        const res = yield axios.get("https://reqres.in/api/users?page=2");

        yield put(listUsers(res.data.data));
    } catch (error) {
        // console.log("listUsersWorker", error);
    }
}
export default function* listUsersWatcher() {
    yield takeEvery(getUsers, listUsersWorker);
}
