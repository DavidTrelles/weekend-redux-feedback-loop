import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Feeling = () =>{
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({type: 'SET_FEELING', payload: event.target.value})
    }
    const handleClick = () => {
        if (feeling){
            history.push('/understanding')
        } else {
            alert("Please fill in the field")
        }
    }

    return (
        <>
            <h3>How are you feeling today?</h3>
            <div>
                {/* Step 3: getter & setter */}
                <input value={feeling} onChange={handleChange} className="input" type="number" />
                <button onClick={handleClick} className="button">Next</button>
            </div>
        </>

    )
}

export default Feeling;