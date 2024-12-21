import HomePage from "./components/Pages/HomePage"
import UserLogin from "./components/Pages/UserLogin"
import UserSign from "./components/Pages/UserSign"
import CaptainLogin from "./components/Pages/CaptainLogin"
import Captainsign from "./components/Pages/Captainsign"
import { Routes,Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      
      <Routes>
              <Route path = '/' element = {<HomePage/>} />
              <Route path = '/Login' element = {<UserLogin/>} />
              <Route path = '/signup' element = {<UserSign/>} />
              <Route path = '/Captain-login' element = {<CaptainLogin/>} />
              <Route path = '/Captain-signup' element = {<Captainsign/>} />
      </Routes>
    
    </div>
  )
}

export default App