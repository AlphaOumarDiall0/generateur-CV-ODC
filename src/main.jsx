
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Accueil from './components/accueil/Accueil.jsx'
import Navbar from './components/navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Accueil />
    {/* <App /> */}
  </BrowserRouter>
  
)