import Home from "./pages/Home" 
import Food from "./pages/Food"
import Road from "./pages/Road"
import Clean from "./pages/Clean"
import AddData from "./components/AddData"
<<<<<<< HEAD
import Login from "./pages/login"
import SignUp from "./pages/Signup"
=======
import Dashboard from "./components/Dashboard"
import Dashboardclean from "./pages/DashboardClean"
import DashboardFood from "./pages/DashboardFood"
import DashboardRoad from "./pages/DashboardRoad"


>>>>>>> cb09a27 (some commit)
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
<<<<<<< HEAD
          <Route path="adddata" element={<AddData />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
=======
          <Route path="/adddata" element={<AddData />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/Dashboardclean" element={<Dashboardclean/>}/>
          <Route path="/DashboardFood" element={<DashboardFood/>}/>
          <Route path="/DashboardRoad" element={<DashboardRoad/>}/>



>>>>>>> cb09a27 (some commit)
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
