import {ActionType} from "../action-types";
import {Action} from "../actions";

// The type of the state for the reducer function.
interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

// An initial state (as default value to reducer first argument) so state is not initially undefined.
const initialState: RepositoriesState = {
    loading: false,
    error: null,
    data: [],
}

// Reducer: Determines the next state, given the current state and the action (sent to Redux's dispatch function).
const repositoriesReducer = (state: RepositoriesState = initialState, action: Action): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {loading: true, error: null, data: []};
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {loading: false, error: null, data: action.payload};
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {loading: false, error: action.payload, data: []};
        default:
            return state;
    }
};

export default repositoriesReducer;
