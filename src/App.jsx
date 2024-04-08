import {Routes, Route} from "react-router-dom"
import Resume from "./components/formulaire/Resume"
import "./App.css"
import Accueil from "./components/accueil/Accueil"

function App() {
  return (
  <Routes>
    <Route path='/'  element={<Accueil />} />
    <Route path='/form'  element={<Resume />} />
  </Routes>)
}

export default App
