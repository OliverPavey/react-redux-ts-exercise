import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state";

// Export an object containing functions which dispatch to the action-creator of the same name.
export const useActions = () => {
    const dispatch = useDispatch(); // dispatch is the React function to invoke a reducer (taking an action object as
                            // the parameter, and passing the reducer state and the action into the reducer function).
    return bindActionCreators(actionCreators, dispatch);
};