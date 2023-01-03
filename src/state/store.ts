import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// The store object used as a prop to <Provider> (in <App>) to allow the Redux libraries to function.
export const store = createStore(reducers, {}, applyMiddleware(thunk));
