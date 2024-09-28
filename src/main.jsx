import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={ <App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/movie/:id' element={<Movie />}/>
          <Route path='/search' element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
   
  </StrictMode>,
)
