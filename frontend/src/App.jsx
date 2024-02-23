import Home from "./pages/Home" 
import Food from "./pages/Food"
import Road from "./pages/Road"
import Clean from "./pages/Clean"
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
