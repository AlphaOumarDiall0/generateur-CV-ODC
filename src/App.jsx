import {Routes, Route} from "react-router-dom"
import Resume from "./components/formulaire/Resume"
import "./App.css"

function App() {
  return (
  <Routes>
    <Route path='/form'  element={<Resume />} />
  </Routes>)
}

export default App
