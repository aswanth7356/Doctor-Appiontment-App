import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AddDoctor from './pages/AddDoctor'
import Footer from './components/Footer'
import ViewDoctor from './pages/ViewDoctor'
import Appointment from './pages/Appointment'
import Department from './pages/Department'
import './bootstrap.min.css'
import Auth from './pages/Auth'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addDoctor' element={<AddDoctor/>} />
        <Route path='/viewDoctor' element={<ViewDoctor/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/department' element={<Department/>} />
        <Route path='/appointment' element={<Appointment/>} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App
