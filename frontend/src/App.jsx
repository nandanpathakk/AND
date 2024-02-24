import Home from "./pages/Home" 
import Food from "./pages/Food"
import Road from "./pages/Road"
import Clean from "./pages/Clean"
import Card from "./components/Card"
import AddData from "./components/AddData"
import Login from "./pages/login"
import SignUp from "./pages/Signup"
import Adminlogin from "./pages/Adminlogin"
import Adminsignup from "./pages/Adminsignup"

import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clean' element={<Clean/>} />
          <Route path='/food' element={<Food />} />
          <Route path='/road' element={<Road />} />
          <Route path="adddata" element={<AddData />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="Adminlogin" element={<Adminlogin />} />
          <Route path="Adminsignup" element={<Adminsignup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
