import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Shop from './pages/Shop/Shop'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </>
  )
}

export default App
