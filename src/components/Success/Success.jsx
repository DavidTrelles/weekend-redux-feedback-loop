import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Success() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    dispatch({ type: "CLEAR_ALL" });
    history.push("/");
  };
  return (
    <>
      <h1>Success!!!</h1>
      <h2>Take another Survey</h2>
      <button onClick={handleClick}>Do it again!</button>
    </>
  );
}
export default Success;
