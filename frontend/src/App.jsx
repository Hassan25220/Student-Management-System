import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-student' element={<AddStudent />} />
        <Route path='/edit-student/:id' element={<EditStudent />} />

      </Routes>


    </BrowserRouter>
  )
}

export default App