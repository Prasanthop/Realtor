import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
import Signin from './pages/Signin'
import Offers from './pages/Offers'
import Signup from './pages/Signup'
import Header from './components/Header'



function App() {
  return (
    <Router>
       <Header />
        <Routes>        
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/sign-in' element={<Signin/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
          
        </Routes>
    </Router>
  )
}

export default App