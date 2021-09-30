import { useHistory } from "react-router";
import Greet from "../Components/Greet";

const Home = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/description");
  };

  return (
    <div>
      <Greet />
      <button onClick={handleSubmit}>설명 보기</button>
    </div>
  );
};

export default Home;
