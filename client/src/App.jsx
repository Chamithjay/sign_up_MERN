import React from 'react'
import SignUp from './signUp.jsx'
import LogIn from './Login.jsx'
import{BrowserRouter,Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='' element={<SignUp />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
