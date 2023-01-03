import repositoriesReducer from "./repositoriesReducer";
import {combineReducers} from "redux";

// Combine and export the reducers.
const reducers = combineReducers({
    repositories: repositoriesReducer, // One field per reducer, each with an application specific field name.
});

export default reducers;

// Derive and export the type of the action argument (to pass to React's dispatch function) with our reducers.
export type RootState = ReturnType<typeof reducers>;