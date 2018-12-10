// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import reducer from "../reducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));
// const store = createStore(reducer, {}, enhancer);

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "../saga";
import reducer from "../reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, {}, enhancer);

sagaMiddleware.run(saga);

export default store;

// import createSagaMiddleware from "redux-saga";
// const rootReducer = combineReducers(reducer);
// const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware];
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

// const store = createStore(
//     rootReducer,
//     {},
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// sagaMiddleware.run(rootSaga);

// export default store;
