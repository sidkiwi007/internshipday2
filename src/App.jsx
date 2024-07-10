import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Records from './components/Records'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CLASS</h1>
     {/* <Record/> */}
     {/* <Record/> */}
     {/* <Add/> */}
     <View/>
     <Routes>
      <Route path='/' element={<Records/>}></Route>
      <Route path='/add' element={<Add person={{fname:"Sumaya",department:"English",semester:"s4"}}/>}></Route>
      

     </Routes>
    </>
  )
}

export default App