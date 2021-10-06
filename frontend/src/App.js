import "./App.css"
import SetPages from "./pages/SetPages"
import { RecoilRoot } from "recoil"

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <SetPages />
      </RecoilRoot>
    </div>
  )
}

export default App
