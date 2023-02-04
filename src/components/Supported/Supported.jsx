import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Supported = () => {
  const history = useHistory();
  const supported = useSelector((store) => store.supported);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({ type: "SET_SUPPORTED", payload: event.target.value });
  };

  const handleClick = () => {
    if (supported) {
      history.push("/comments");
    } else {
      alert("Please fill in the field");
    }
  };

  return (
    <>
      <h3>How well are you being supported?</h3>
      <div>
        {/* Step 3: getter & setter */}
        <input
          value={supported}
          onChange={handleChange}
          className="input"
          type="number"
        />
        <button onClick={handleClick} className="button">
          Next
        </button>
      </div>
    </>
  );
};

export default Supported;
