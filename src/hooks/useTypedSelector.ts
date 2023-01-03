import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../state";

// Wrap the useSelector hook, changing the argument type to RootState (i.e. the return type of our combined reducers).
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;