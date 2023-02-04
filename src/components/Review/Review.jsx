import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Review() {
  const history = useHistory();
  const feeling = useSelector((store) => store.feeling);
  const understanding = useSelector((store) => store.understanding);
  const supported = useSelector((store) => store.supported);
  const comments = useSelector((store) => store.comments);

  const handleSubmit = () => {
    const newFeedback = { feeling, understanding, supported, comments };
    axios
      .post("/feedback", newFeedback)
      .then((response) => {
        console.log("successful post", response);
        history.push("/success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2>Review your answers</h2>
      <p>Feeling: {feeling}</p>
      <p>Understanding: {understanding}</p>
      <p>Supported: {supported} </p>
      <p>Your comments: {comments}</p>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
export default Review;
