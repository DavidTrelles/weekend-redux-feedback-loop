import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Understanding = () =>{
    const history = useHistory();
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({type: 'SET_UNDERSTANDING', payload: event.target.value})
    }

    const handleClick = () => {
        if (feeling){
            history.push('/supported')
        } else {
            alert("Please fill in the field")
        }
    }

    return (
        <>
            <h3>How well are you understanding the material?</h3>
            <div>
                {/* Step 3: getter & setter */}
                <input value={understanding} onChange={handleChange} className="input" type="number"/>
                <button onClick={handleClick} className="button">Next</button>
            </div>
        </>

    )
}

export default Understanding;