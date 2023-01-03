import {ActionType} from "../action-types";

// Type definitions for the action argument of all reducers.
// (Split this into multiple files if using multiple reducers.)

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

// All the reducer action types combined into one Union.
export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction
