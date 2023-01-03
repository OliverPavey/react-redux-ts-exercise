import {Provider} from "react-redux";
import {store} from "../state";
import RepositoriesList from "./RepositoriesList";

const App = () => {
    // "store" is the Redux maintained state. It is updated by calling (via dispatch) the application's Redux reducers.
    return <Provider store={store}>
        <div>
            <h1>Search for a Package on NPM</h1>
            <RepositoriesList/>
        </div>
    </Provider>
}

export default App;