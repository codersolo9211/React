import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Hii i am atul and I am a passionate web developer who is going to complete DSA by october and it's a damn promise</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
