import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Products from './components/products/Products';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Restaurant from './components/restaurant/Restaurant';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/Restaurant' element={<Restaurant />} />
      <Route path='/Products' element={<Products />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
