import {ChangeEventHandler, FC, FormEventHandler, useState} from "react";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const RepositoriesList: FC = () => {
    const [term, setTerm] = useState('');
    const {searchRepositories} = useActions(); // Custom Hook
    const {loading, error, data} = useTypedSelector((state: any) => state.repositories); // Custom Hook

    const onTermChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setTerm(event.target.value);
    };

    const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        searchRepositories(term); // dispatch action
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" value={term} onChange={onTermChange}/>
                <button>Search</button>
            </form>

            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && (<ul>
                {data.map((elem: any) => (
                    <li key={elem}>{elem}</li>
                ))}
            </ul>)}
        </div>
    );
}

export default RepositoriesList;