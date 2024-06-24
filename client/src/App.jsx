import React from 'react'
import SignUp from './signUp.jsx'
import LogIn from './Login.jsx'
import './App.css'

import{BrowserRouter,Routes, Route} from 'react-router-dom'


function App() {

  return (
    <div id='back'>
    <BrowserRouter>
      <Routes>
          <Route path='' element={<SignUp />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
