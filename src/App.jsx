import { useState } from 'react'

import './App.css'
import Auth from './Auth'
import User from './User'
const Authorized=Auth(User);
function App() {
  const user={name:"Tamil"};
  const isAuth=true;


  return (
    <>
    <h1>userprofile</h1>
     <Authorized isAuth={isAuth}user={user}/>
    </>
  )
}

export default App
