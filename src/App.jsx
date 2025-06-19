import './App.css'
import { Routes, Route } from 'react-router-dom'
import Portofolio from './View/Portofolio/Portofolio'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portofolio />} />
        <Route path="/portofolio" element={<Portofolio />} />
      </Routes>
    </>
  )
}

export default App
