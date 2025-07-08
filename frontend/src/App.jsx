import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tasks from './pages/Tasks.jsx'
import Update from './pages/Update.jsx'

import './App.css'
import Login from './pages/login.jsx'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path='/tasks' element={<Tasks/>} />
      <Route path='/task/update' element={<Update/>} />
      <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )

}

export default App
