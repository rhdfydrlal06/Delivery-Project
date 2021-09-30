import { useHistory } from "react-router";
import { CenterBox } from "../styles/Container";

const Desc = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/");
  };

  return (
    <CenterBox>
      서비스 설명입니다~~~~
      <button onClick={handleSubmit}>홈</button>
    </CenterBox>
  );
};

export default Desc;
