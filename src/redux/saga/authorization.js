import { takeEvery, put } from "redux-saga/effects";
import { loginSubmit, loginSuccess } from "../modules/authorization";
import axios from "axios";

function* authorizationWorker({ payload: { username, password } }) {
    const formdata = new FormData();

    formdata.append("email", "testname");
    formdata.append("password", "qawsedrf");

    const requestBody = JSON.stringify({
        email: username,
        password
    });

    try {
        const response = yield axios("https://reqres.in/api/login", {
            method: "POST",
            data: requestBody,
            headers: {
                "Content-Type": "application/json"
            }
        });
        const { token } = response.data;

        yield put(loginSuccess(token));
    } catch (error) {}
}

export default function* authorizationWatcher() {
    yield takeEvery(loginSubmit, authorizationWorker);
}
