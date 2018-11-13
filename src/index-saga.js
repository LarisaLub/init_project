import SignupSaga from "./redux/saga/";
import LoginSaga from "./login/sagas"; //+
import WidgetSaga from "./widgets/sagas";

export default function* IndexSaga() {
    yield [SignupSaga(), LoginSaga(), WidgetSaga()];
}
