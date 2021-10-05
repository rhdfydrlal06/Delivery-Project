import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Home"
import DeliveryNum from "./DeliveryNum"

const SetPages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/covid-19-delivery">
          <DeliveryNum />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default SetPages
