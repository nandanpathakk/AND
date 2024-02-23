import Home from "./pages/Home" 
import Food from "./pages/Food"
import Road from "./pages/Road"
import Clean from "./pages/Clean"
import Card from "./components/Card"
import AddData from "./components/AddData"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route pcleanath='/' element={<Home />} />
          <Route path='/clean' element={<Clean/>} />
          <Route path='/food' element={<Food />} />
          <Route path='/road' element={<Road />} />
          <Route path="adddata" element={<AddData />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
