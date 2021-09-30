import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Desc from "./Pages/Desc";

// 페이지가 여러 개일 경우 이 곳에서 모아서 App.js에 전달합니다

const SetPages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/description">
          <Desc />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default SetPages;
