import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Feeling = () =>{
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({type: 'SET_FEELING', payload: event.target.value})
    }

    return (
        <>
            <h3>How are you feeling today?</h3>
            <div>
                {/* Step 3: getter & setter */}
                <input value={feeling} onChange={handleChange} className="input" type="number" />
                <button onClick={() => history.push('/understanding')} className="button">Next</button>
            </div>
        </>

    )
}

export default Feeling;