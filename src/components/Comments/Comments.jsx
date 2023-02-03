import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Comments = () =>{
    const history = useHistory();
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({type: 'SET_COMMENTS', payload: event.target.value})
    }


    return (
        <>
            <h3>Do you Have any comments?</h3>
            <div>
                {/* Step 3: getter & setter */}
                <textarea rows ='4' cols='40' value={comments} onChange={handleChange} placeholder='comments appreciated but not required' className="textarea" type="text"/>
                <button onClick={()=>history.push('/review')} className="button">Next</button>
            </div>
        </>

    )
}

export default Comments;