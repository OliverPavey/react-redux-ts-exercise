import {ActionType} from "../action-types";
import axios from "axios";
import {Action} from "../actions";
import {Dispatch} from "redux";

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ // dispatch will call our combined reducers function, passing this action as the 2nd argument
            type: ActionType.SEARCH_REPOSITORIES,
        });

        try {
            // Invoke the NpmJs API with '?text={term}' HTTP(S) argument.
            const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term,
                }
            });
            // There is no type definition for the JSON returned by the API, so 'any' is the best type to use here
            const names = data.objects.map((obj:any) => obj.package.name);
            dispatch({ // Call combined reducers (see above)
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names,
            })

        } catch (err: unknown) { // Cannot type the argument to a catch block (other than as any or unknown).
            dispatch({ // Call combined reducers (see above)
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err instanceof Error ? err.message : 'Uknown error',
            })
        }
    }
}